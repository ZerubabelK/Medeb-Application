import {View, Text} from 'react-native';
import React from 'react';
import Header from '../src/components/home/Header';
import TasksInProgress from '../src/components/home/TasksInProgress';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTasks} from '../store/slices/taskSlice';

const Home = ({setActiveTap}) => {
  const {user} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  dispatch(fetchTasks(user.token));
  return (
    <View className="h-full">
      <Header setActiveTap={setActiveTap} />
      <TasksInProgress setActiveTap={setActiveTap} />
    </View>
  );
};

export default Home;
