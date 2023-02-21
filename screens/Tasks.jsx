import {View, Text} from 'react-native';
import React from 'react';
import TaskList from '../src/components/tasks/TaskList';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTasks} from '../store/slices/taskSlice';

const Tasks = () => {
  const {user} = useSelector(state => state.userReducer);
  console.log(user);
  const dispatch = useDispatch();
  dispatch(fetchTasks(user.token));
  return (
    <View className="h-screen w-screen">
      <TaskList />
    </View>
  );
};

export default Tasks;
