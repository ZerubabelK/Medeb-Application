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
import DatePicker from 'react-native-date-picker';
const AddTask = ({setActiveTap}) => {
  const {cachedTask} = useSelector(state => state.taskReducer);
  const {user} = useSelector(state => state.userReducer);
  const [subtasks, setSubtasks] = useState(
    cachedTask ? cachedTask.subtasks : [],
  );
  const [startDate, setStartDate] = useState(new Date());
  const [openStart, setOpenStart] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [endStart, setOpenEnd] = useState(false);
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [name, setName] = useState(cachedTask ? cachedTask.name : '');
  const [description, setDescription] = useState(
    cachedTask ? cachedTask.description : '',
  );
  const handleSubtaskAdd = () => {
    if (name && description) {
      setSubtasks([...subtasks, {name, description}]);
      dispatch(
        setCachedTask({
          name: taskTitle,
          description: taskDescription,
          subtasks,
          startDate,
          endDate,
        }),
      );
      setName('');
      setDescription('');
    } else {
      Alert.alert('PLease fill out all the fields in Sub-task');
    }
  };
  const handleTaskAdd = () => {
    const task = {
      name: taskTitle,
      description: taskDescription,
      subtasks,
      startDate: startDate.toDateString(),
      endDate: endDate.toDateString(),
    };
    dispatch(
      addTask({
        task,
        token: user.token,
      }),
    );
    setActiveTap('Tasks');
  };
  const Subtasks = ({subtask, index}) => {
    return (
      <View className="border-t-gray-300 border-t-[1px] bg-cyan-600 rounded-lg justify-center px-3 py-3 my-2">
        <View className="flex-row justify-between items-center">
          <Text className="text-white font-semibold">{subtask.name}</Text>
          <Text className="text-white font-semibold">
            {subtask.description}
          </Text>
          <Pressable
            className="p-2"
            onPress={_ => {
              console.log('press');
              setSubtasks(subtasks.filter((subtask, idx) => idx != index));
            }}>
            <FontAwesome5 name={'times'} size={25} color={'white'} />
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <View>
      <View className="mx-auto item w-11/12 px-3 justify-center space-y-4 mt-4">
        <View className="flex-row justify-between">
          <Text className="text-center text-black font-semibold text-xl">
            New Task
          </Text>
          <TouchableOpacity
            className="bg-[#1b0f28c8] px-5 py-2 rounded-md justify-center"
            onPress={handleTaskAdd}>
            <Text className="text-white font-semibold">Add Task</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text className="text-sm py-0">Name</Text>
          <TextInput
            placeholder="Task name"
            className="border-[1px] rounded-lg px-1 bg-sla"
            value={taskTitle}
            onChangeText={text => {
              setTaskTitle(text);
              dispatch(
                setCachedTask({
                  name,
                  description,
                  subtasks,
                  startDate,
                  endDate,
                }),
              );
            }}
          />
        </View>
        <View>
          <Text className="text-sm py-0">Description</Text>
          <TextInput
            placeholder="Description..."
            multiline={true}
            className="border-[1px] rounded-lg px-1"
            value={taskDescription}
            onChangeText={text => {
              setTaskDescription(text);
              dispatch(
                setCachedTask({
                  name,
                  description,
                  subtasks,
                  startDate,
                  endDate,
                }),
              );
            }}
          />
        </View>
        <View className="flex-row justify-between px-5">
          <View>
            <DatePicker
              modal
              open={openStart}
              date={startDate}
              onConfirm={date => {
                setOpenStart(false);
                setStartDate(date);
              }}
              onCancel={() => {
                setOpenStart(false);
              }}
            />
            <Text className="text-xs">Starting Date</Text>
            <Pressable
              onPress={_ => {
                setOpenStart(true);
              }}
              className="border-[1px] py-2 rounded px-4">
              <Text>{startDate.toLocaleDateString()}</Text>
            </Pressable>
          </View>
          <View>
            <DatePicker
              modal
              open={endStart}
              date={endDate}
              onConfirm={date => {
                setOpenEnd(false);
                setEndDate(date);
              }}
              onCancel={() => {
                setOpenEnd(false);
              }}
            />
            <Text className="text-xs">Ending Date</Text>
            <Pressable
              onPress={_ => {
                setOpenEnd(true);
              }}
              className="border-[1px] py-2 rounded px-4">
              <Text>{endDate.toLocaleDateString()}</Text>
            </Pressable>
          </View>
        </View>
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
                className="bg-[#1b0f28c8] self-center rounded-md px-2 py-2 w-1/3"
                onPress={handleSubtaskAdd}>
                <Text className="text-white text-center font-semibold">
                  Add Subtask
                </Text>
              </Pressable>
            </View>
          </View>
          <View>
            {subtasks.map((subtask, index) => (
              <Subtasks subtask={subtask} index={index} key={index} />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddTask;
