import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Home from '../../screens/Home';
import Tasks from '../../screens/Tasks';
import AddTask from '../../screens/AddTask';
import Personal from '../../screens/Personal';
import Tab from '../components/navigation/Tab';
import {useSelector} from 'react-redux';
import Auth from '../../screens/Auth';
const Navigator = () => {
  const [activeTab, setActiveTap] = React.useState('Home');
  const {isLogged} = useSelector(state => state.userReducer);

  return isLogged ? (
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
      <View className="fixed w-[95%] flex-row bottom-0 items-center justify-between py-2 bg-[#1b0f28c8] px-2 my-2 rounded-3xl">
        <View className="flex-row justify-evenly w-full">
          <Tab
            setActiveTap={setActiveTap}
            iconName="home"
            tabName="Home"
            size={28}
            color="#ffffff"
            isActive={activeTab == 'Home'}
          />
          <Tab
            setActiveTap={setActiveTap}
            iconName="tasks"
            tabName="Tasks"
            size={28}
            color="#ffffff"
            isActive={activeTab == 'Tasks'}
          />
          <Tab
            setActiveTap={setActiveTap}
            iconName="plus"
            tabName="AddTask"
            size={28}
            color="#ffffff"
            isActive={activeTab == 'AddTask'}
          />
          <Tab
            setActiveTap={setActiveTap}
            iconName="user"
            tabName="Personal"
            size={28}
            color="#ffffff"
            isActive={activeTab == 'Personal'}
          />
        </View>
      </View>
    </View>
  ) : (
    <Auth />
  );
};

export default Navigator;
