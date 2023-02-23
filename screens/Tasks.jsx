import {View, Text, Image} from 'react-native';
import React from 'react';
import TaskList from '../src/components/tasks/TaskList';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTasks} from '../store/slices/taskSlice';

const Tasks = () => {
  const {user} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  try {
    dispatch(fetchTasks(user.token)).then(pay => {
      console.log(pay.payload.tasks);
    });
  } catch (err) {
    console.log(err);
  }
  return (
    <View className="h-screen w-screen">
      <View className="border-b-[1px] py-3 flex-row justify-evenly">
        <Image
          className="w-12 h-12"
          source={require('../src/assets/Avatar.png')}
        />
        <View className="mt-3 items-center">
          <Text className="text-2xl text-neutral-800">
            Hello, here are your tasks
          </Text>
        </View>
      </View>
      <TaskList />
    </View>
  );
};

export default Tasks;
