import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Home from '../../screens/Home';
import Tasks from '../../screens/Tasks';
import AddTask from '../../screens/AddTask';
import Personal from '../../screens/Personal';
import Tab from '../components/navigation/Tab';
const Navigator = () => {
  const [activeTab, setActiveTap] = React.useState('Home');
  return (
    <View className="w-screen h-full items-center bg-slate-100">
      <ScrollView className="w-full h-screen py-2">
        {activeTab == 'Home' ? (
          <Home />
        ) : activeTab == 'Tasks' ? (
          <Tasks />
        ) : activeTab == 'AddTask' ? (
          <AddTask />
        ) : (
          <Personal />
        )}
      </ScrollView>
      <View className="fixed w-[90%] flex-row bottom-0 items-center justify-between py-2 bg-sky-700 px-2 my-2 rounded-3xl">
        <View className="flex-row justify-evenly w-full">
          <Tab
            setActiveTap={setActiveTap}
            iconName="home"
            tabName="Home"
            size={35}
            color="#ffffff"
          />
          <Tab
            setActiveTap={setActiveTap}
            iconName="home"
            tabName="Tasks"
            size={35}
            color="#ffffff"
          />
          <Tab
            setActiveTap={setActiveTap}
            iconName="home"
            tabName="AddTask"
            size={35}
            color="#ffffff"
          />
          <Tab
            setActiveTap={setActiveTap}
            iconName="home"
            tabName="Personal"
            size={35}
            color="#ffffff"
          />
        </View>
      </View>
    </View>
  );
};

export default Navigator;
