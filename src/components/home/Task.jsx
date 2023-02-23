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
  function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    a = new Date(a);
    b = new Date(b);
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc1 - utc2) / _MS_PER_DAY);
  }
  return (
    <View className="mx-3 justify-between shadow-xl bg-white h-[23vh] rounded-xl w-[60vw] py-2 px-2">
      <View className="flex-row items-center justify-between">
        <Text className="text-black font-semibold text-lg">{task.name}</Text>
      </View>
      <Text className="text-black">{task.description}</Text>
      <View>
        <View className="flex-row justify-between">
          <Text className="text-black">Progress</Text>
          <Text className="text-black">{Math.round(progress)}%</Text>
        </View>
        <View className="mt-1 bg-slate-100 rounded-md">
          <ProgressBar progress={progress} />
        </View>
      </View>
      <View className="flex-row items-center">
        <FontAwesome5 name="clock" size={20} color={'black'} />
        <Text className="ml-2 text-black">
          {dateDiffInDays(task.endDate, task.startDate)} days left
        </Text>
      </View>
    </View>
  );
};

export default Task;
