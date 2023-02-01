import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Task from './Task';

const TasksInProgress = () => {
  const [isActive, setActive] = useState('todo');
  const [progressing, setProgressing] = useState([
    {
      id: Math.random() * 1000,
      task: 'User flow mapping',
      desc: 'Raisen',
      subtasks: [
        {title: 'Something', done: false},
        {title: 'Something', done: true},
        {title: 'Something', done: true},
        {title: 'Something', done: false},
      ],
      progress() {
        return 75;
      },
    },
    {
      id: Math.random() * 1000,
      task: 'User flow mapping',
      desc: 'Raisen',
      subtasks: [
        {title: 'Something', done: false},
        {title: 'Something', done: true},
        {title: 'Something', done: true},
        {title: 'Something', done: false},
      ],
      progress() {
        return 75;
      },
    },
    {
      id: Math.random() * 1000,
      task: 'User flow mapping',
      desc: 'Raisen',
      subtasks: [
        {title: 'Something', done: false},
        {title: 'Something', done: true},
        {title: 'Something', done: true},
        {title: 'Something', done: false},
      ],
      progress() {
        return 75;
      },
    },
    {
      id: Math.random() * 1000,
      task: 'User flow mapping',
      desc: 'Raisen',
      subtasks: [
        {title: 'Something', done: false},
        {title: 'Something', done: true},
        {title: 'Something', done: true},
        {title: 'Something', done: false},
      ],
      progress() {
        return (
          (100 * this.subtasks.filter(sub => sub.done).length) /
          this.subtasks.length
        );
      },
    },
    ,
  ]);
  const [todo, setPTodo] = useState([
    {
      id: Math.random() * 1000,
      task: 'Client flow mapping',
      desc: 'Raisen',
      subtasks: [
        {title: 'Something', done: false},
        {title: 'Something', done: true},
        {title: 'Something', done: true},
        {title: 'Something', done: false},
      ],
      progress() {
        return 75;
      },
    },
    {
      id: Math.random() * 1000,
      task: 'User flow mapping',
      desc: 'Raisen',
      subtasks: [
        {title: 'Something', done: false},
        {title: 'Something', done: true},
        {title: 'Something', done: true},
        {title: 'Something', done: false},
      ],
      progress() {
        return 75;
      },
    },
    {
      id: Math.random() * 1000,
      task: 'User flow mapping',
      desc: 'Raisen',
      subtasks: [
        {title: 'Something', done: false},
        {title: 'Something', done: true},
        {title: 'Something', done: true},
        {title: 'Something', done: false},
      ],
      progress() {
        return 75;
      },
    },
    {
      id: Math.random() * 1000,
      task: 'User flow mapping',
      desc: 'Raisen',
      subtasks: [
        {title: 'Something', done: false},
        {title: 'Something', done: true},
        {title: 'Something', done: true},
        {title: 'Something', done: false},
      ],
      progress() {
        return (
          (100 * this.subtasks.filter(sub => sub.done).length) /
          this.subtasks.length
        );
      },
    },
    ,
  ]);
  const [completed, setCompleted] = useState([
    {
      id: Math.random() * 1000,
      task: 'Server flow mapping',
      desc: 'Raisen',
      subtasks: [
        {title: 'Something', done: false},
        {title: 'Something', done: true},
        {title: 'Something', done: true},
        {title: 'Something', done: false},
      ],
      progress() {
        return 75;
      },
    },
    {
      id: Math.random() * 1000,
      task: 'User flow mapping',
      desc: 'Raisen',
      subtasks: [
        {title: 'Something', done: false},
        {title: 'Something', done: true},
        {title: 'Something', done: true},
        {title: 'Something', done: false},
      ],
      progress() {
        return 75;
      },
    },
    {
      id: Math.random() * 1000,
      task: 'User flow mapping',
      desc: 'Raisen',
      subtasks: [
        {title: 'Something', done: false},
        {title: 'Something', done: true},
        {title: 'Something', done: true},
        {title: 'Something', done: false},
      ],
      progress() {
        return 75;
      },
    },
    {
      id: Math.random() * 1000,
      task: 'User flow mapping',
      desc: 'Raisen',
      subtasks: [
        {title: 'Something', done: false},
        {title: 'Something', done: true},
        {title: 'Something', done: true},
        {title: 'Something', done: false},
      ],
      progress() {
        return (
          (100 * this.subtasks.filter(sub => sub.done).length) /
          this.subtasks.length
        );
      },
    },
    ,
  ]);
  return (
    <View className="mt-3">
      <View className="w-full flex-row justify-between px-6">
        <Text className="text-lg text-black font-bold">Tasks in progress</Text>
        <TouchableOpacity>
          <Text className="text-base text-blue-500">See all</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View className="flex-row justify-evenly pb-2 pt-1">
          <TouchableOpacity
            delayPressIn={1}
            onPress={() => {
              setActive('todo');
            }}
            className="py-2 px-5 rounded-xl"
            style={isActive == 'todo' ? {backgroundColor: '#3a0945c6'} : {}}>
            <Text style={isActive == 'todo' ? {color: '#ffffff'} : {}}>
              Todo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            delayPressIn={1}
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
            delayPressIn={1}
            onPress={() => {
              setActive('completed');
            }}
            className="py-2 px-5 rounded-xl"
            style={
              isActive == 'completed' ? {backgroundColor: '#3a0945c6'} : {}
            }>
            <Text style={isActive == 'completed' ? {color: '#ffffff'} : {}}>
              Completed
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ScrollView className="h-full pb-2" horizontal={true}>
          {isActive == 'todo'
            ? todo.map(task => <Task task={task} key={task.id} />)
            : isActive == 'in-progress'
            ? progressing.map(task => <Task task={task} key={task.id} />)
            : completed.map(task => <Task task={task} key={task.id} />)}
        </ScrollView>
      </View>
      <View className="bg-[#3a0945c6]"></View>
    </View>
  );
};

export default TasksInProgress;
