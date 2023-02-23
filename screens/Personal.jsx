import {
  View,
  Text,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../store/slices/userSlice';
import TasksInProgress from '../src/components/home/TasksInProgress';
const Personal = ({setActiveTap}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.userReducer);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <View className="flex-1 h-screen bg-white">
      <View>
        <TouchableOpacity
          onPress={handleLogout}
          className="self-end bg-[#1b0f28c8] px-5 py-2 rounded-md mr-3">
          <Text className="text-white font-semibold text-lg">Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center p-4">
        <Image
          source={{uri: 'https://source.unsplash.com/random'}}
          className="w-16 h-16 rounded-full"
        />
        <View className="ml-4">
          <Text className="text-lg font-bold">
            {user.firstname} {user.lastname}
          </Text>
          <Text className="text-sm text-gray-500">{user.email}</Text>
        </View>
      </View>
      <View className="p-4">
        <Text className="text-gray-600">
          Hi, I'm John Doe. I'm a software engineer who loves building web and
          mobile apps using React and React Native. I have more than 5 years of
          experience in developing user-friendly and scalable applications for
          various clients.
        </Text>
      </View>
      <TasksInProgress setActiveTap={setActiveTap} />
    </View>
  );
};

export default Personal;
