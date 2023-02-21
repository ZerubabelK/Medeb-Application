import {View, Text, Pressable, Switch} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ProgressBar from '../common/ProgressBar';
import {changeStatusOfSubtask} from '../../../store/slices/taskSlice';
import {useDispatch} from 'react-redux';
const TaskCard = ({task}) => {
  const [spread, setSpread] = useState(false);
  const dispatch = useDispatch();
  return (
    <View className="flex-row w-full">
      <Pressable onPress={() => setSpread(!spread)}>
        <View
          style={!spread ? {display: 'flex'} : {display: 'none'}}
          className="flex-row w-full justify-evenly bg-[#4a1146c8] shadow-lg rounded-lg py-3 my-3 px-2">
          <View className="flex-row items-center">
            <Text className="text-white">{task.task}</Text>
          </View>
          <View className="justify-center">
            <Text className="text-white">{task.desc}</Text>
          </View>
          <View className="flex-row items-center">
            <FontAwesome5 name="clock" size={20} color={'white'} />
            <Text className="ml-2 text-white">2 days left</Text>
          </View>
        </View>
        <View
          style={spread ? {display: 'flex'} : {display: 'none'}}
          className="bg-white py-3 my-3 px-2 rounded-lg">
          <View>
            <Text className="text-2xl text-black">{task.task}</Text>
          </View>
          <View className="w-[88vw] h-[1px] bg-slate-300 my-2 "></View>
          <Text className="text-black text-[14px]">
            - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis doloribus ab, ex deserunt quia temporibus reprehenderit
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {task.subtasks.map(subtask => (
              <View key={subtask.title} className="flex-row py-2">
                <Text className="text-black">{subtask.title}</Text>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={'#3f8cff'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={value => {
                    console.log(subtask);
                    dispatch(
                      changeStatusOfSubtask({
                        taskId: task.id,
                        subtaskId: subtask.id,
                        value,
                      }),
                    );
                  }}
                  value={subtask.done}
                />
              </View>
            ))}
          </View>
          <View>
            <Pressable>
              <Text>Mark As</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default TaskCard;
