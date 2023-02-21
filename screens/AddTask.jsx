import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {addTask, setCachedTask} from '../store/slices/taskSlice';
import {useDispatch, useSelector} from 'react-redux';
const AddTask = () => {
  const {cachedTask} = useSelector(state => state.taskReducer);
  const {user} = useSelector(state => state.userReducer);
  const [subtasks, setSubtasks] = useState(cachedTask.subtasks);
  const dispatch = useDispatch();
  const [name, setName] = useState(cachedTask.name);
  const [description, setDescription] = useState(cachedTask.description);
  const handleSubtaskAdd = () => {
    if (name && description) {
      setSubtasks([...subtasks, {name, description}]);
      setName('');
      setDescription('');
      dispatch(setCachedTask({name, description, subtasks}));
    } else {
      Alert.alert('PLease fill out all the fields in Sub-task');
    }
  };
  const handleTaskAdd = () => {
    console.log(cachedTask, user.token);
    dispatch(addTask({task: cachedTask, token: user.token}));
  };
  const Subtasks = ({subtask}) => {
    return (
      <View className="border-t-gray-300 border-t-[1px] bg-cyan-600 rounded-lg justify-center px-3 my-2">
        <View className="flex-row justify-between items-center">
          <Text className="text-white font-semibold">{subtask.name}</Text>
          <Text className="text-white font-semibold">
            {subtask.description}
          </Text>
          <Pressable className="p-2">
            <FontAwesome5 name={'times'} size={25} color={'white'} />
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <View>
      <View className="mx-auto w-11/12 px-3 justify-center space-y-4 mt-4">
        <Text className="text-center text-black font-semibold text-lg">
          New Task
        </Text>
        <TextInput
          placeholder="Task name"
          className="border-[1px] rounded-lg px-1"
        />
        <TextInput
          placeholder="Description..."
          multiline={true}
          className="border-[1px] rounded-lg px-1"
        />
        <View className="my-2 space-y-2">
          <View className="flex-row justify-between">
            <Text className="text-black font-semibold text-lg">Subtasks</Text>
          </View>
          <View>
            <View className="space-y-3">
              <TextInput
                className="border-[1px] rounded-lg py-1 px-1"
                placeholder="Subtask name"
                onChangeText={text => {
                  setName(text);
                }}
                value={name}
              />

              <TextInput
                className="border-[1px] rounded-lg py-1 px-1"
                placeholder="Subtask Description"
                onChangeText={text => {
                  setDescription(text);
                }}
                value={description}
              />
              <Pressable
                className="bg-sky-500 self-center rounded-md px-2 py-2 w-1/3"
                onPress={handleSubtaskAdd}>
                <Text className="text-white text-center font-semibold">
                  Add Subtask
                </Text>
              </Pressable>
            </View>
          </View>
          <View>
            {subtasks.map(subtask => (
              <Subtasks subtask={subtask} />
            ))}
          </View>
        </View>
        <TouchableOpacity onPress={handleTaskAdd}>
          <Text>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTask;
