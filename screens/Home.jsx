import {View, Text} from 'react-native';
import React from 'react';
import Header from '../src/components/home/Header';
import TasksInProgress from '../src/components/home/TasksInProgress';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTasks} from '../store/slices/taskSlice';

const Home = () => {
  const {user} = useSelector(state => state.userReducer);
  console.log(user);
  const dispatch = useDispatch();
  dispatch(fetchTasks(user.token));
  return (
    <View className="h-full">
      <Header />
      <TasksInProgress />
    </View>
  );
};

export default Home;
