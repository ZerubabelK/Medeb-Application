import {View, Text} from 'react-native';
import React from 'react';
import Header from '../src/components/home/Header';
import TasksInProgress from '../src/components/home/TasksInProgress';

const Home = () => {
  return (
    <View className="h-full">
      <Header />
      <TasksInProgress />
    </View>
  );
};

export default Home;
