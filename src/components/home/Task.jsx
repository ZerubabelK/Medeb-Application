import {View, Text} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ProgressBar from '../common/ProgressBar';
const Task = ({task}) => {
  const progress = Math.floor(
    (task.subtasks.filter(subtask => subtask.done).length /
      task.subtasks.length) *
      100,
  );

  return (
    <View className="mx-3 justify-between shadow-xl bg-white h-[23vh] rounded-xl w-[60vw] py-2 px-2">
      <View className="flex-row items-center justify-between">
        <Text>{task.task}</Text>
        <Text className="text-lg">...</Text>
      </View>
      <Text>{task.desc}</Text>
      <View>
        <View className="flex-row justify-between">
          <Text>Progress</Text>
          <Text>{Math.round(progress)}%</Text>
        </View>
        <View className="mt-1 bg-slate-100 rounded-md">
          <ProgressBar progress={progress} />
        </View>
      </View>
      <View className="flex-row items-center">
        <FontAwesome5 name="clock" size={20} color={'gray'} />
        <Text className="ml-2">2 days left</Text>
      </View>
    </View>
  );
};

export default Task;
