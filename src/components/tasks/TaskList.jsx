import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import TaskCard from './TaskCard';
import {useSelector} from 'react-redux';

const TaskList = () => {
  const [isActive, setActive] = useState('todo');
  const {allTasks} = useSelector(state => state.taskReducer);
  const progressing = allTasks.filter(task => task.tag == 'Progressing');
  const todos = allTasks.filter(task => task.tag == 'Todo');
  const completed = allTasks.filter(task => task.tag == 'Completed');
  return (
    <View className="mt-3 min-h-screen w-screen">
      <View className="flex-row fixed top-0 justify-between pb-2 pt-1 px-3">
        <TouchableOpacity
          onPress={() => {
            setActive('todo');
          }}
          className="py-2 px-6 rounded-xl"
          style={isActive == 'todo' ? {backgroundColor: '#3a0945c6'} : {}}>
          <Text style={isActive == 'todo' ? {color: '#ffffff'} : {}}>Todo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActive('in-progress');
          }}
          className="py-2 px-5 rounded-xl"
          style={
            isActive == 'in-progress' ? {backgroundColor: '#3a0945c6'} : {}
          }>
          <Text style={isActive == 'in-progress' ? {color: '#ffffff'} : {}}>
            In-Progress
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActive('completed');
          }}
          className="py-2 px-5 rounded-xl"
          style={isActive == 'completed' ? {backgroundColor: '#3a0945c6'} : {}}>
          <Text style={isActive == 'completed' ? {color: '#ffffff'} : {}}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      <View className="w-screen h-screen">
        <ScrollView className="w-full min-h-screen pb-2 px-3">
          {isActive == 'todo'
            ? todos.map(task => <TaskCard task={task} key={task.id} />)
            : isActive == 'in-progress'
            ? progressing.map(task => <TaskCard task={task} key={task.id} />)
            : completed.map(task => <TaskCard task={task} key={task.id} />)}
        </ScrollView>
      </View>
      {/* <View className="bg-[#3a0945c6]"></View> */}
    </View>
  );
};

export default TaskList;
