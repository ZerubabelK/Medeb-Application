import {View, Text, Pressable, Switch, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  changeStatusOfSubtask,
  removeTask,
} from '../../../store/slices/taskSlice';
import {useDispatch, useSelector} from 'react-redux';
const TaskCard = ({task}) => {
  const [spread, setSpread] = useState(false);
  const {token} = useSelector(state => state.userReducer.user);
  const dispatch = useDispatch();
  function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    a = new Date(a);
    b = new Date(b);
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc1 - utc2) / _MS_PER_DAY);
  }
  return (
    <View className="flex-row w-full">
      <Pressable onPress={() => setSpread(!spread)}>
        <View
          style={!spread ? {display: 'flex'} : {display: 'none'}}
          className="flex-row w-full justify-evenly bg-[#4a1146c8] shadow-lg rounded-lg py-3 my-3 px-2">
          <View className="flex-row items-center">
            <Text className="text-white">{task.name}</Text>
          </View>
          <View className="justify-center">
            <Text className="text-white">{task.description}</Text>
          </View>
          <View className="flex-row items-center">
            <FontAwesome5 name="clock" size={20} color={'white'} />
            <Text className="ml-2 text-white">
              {dateDiffInDays(task.endDate, task.startDate)} days left
            </Text>
          </View>
        </View>
        <View
          style={spread ? {display: 'flex'} : {display: 'none'}}
          className="bg-white py-3 my-3 px-2 rounded-lg">
          <View className="flex-row justify-between items-center">
            <Text className="text-2xl text-black">{task.name}</Text>
            <TouchableOpacity
              onPress={_ => dispatch(removeTask({taskId: task._id, token}))}
              className="px-3">
              <FontAwesome5 name="trash" size={20} color={'red'} />
            </TouchableOpacity>
          </View>
          <View className="w-[88vw] h-[1px] bg-slate-300 my-2 "></View>
          <Text className="text-black text-[14px]">{task.description}</Text>
          <View className="flex-row flex-wrap justify-between">
            {task.subtasks.map(subtask => (
              <View key={subtask._id} className="flex-row py-2">
                <Text className="text-black">{subtask.name}</Text>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={'#3f8cff'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={value => {
                    dispatch(
                      changeStatusOfSubtask({
                        taskId: task._id,
                        subtaskId: subtask._id,
                        value,
                        token,
                      }),
                    );
                  }}
                  value={subtask.done}
                />
              </View>
            ))}
          </View>
          <View></View>
        </View>
      </Pressable>
    </View>
  );
};

export default TaskCard;
