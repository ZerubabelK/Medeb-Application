import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {signup} from '../../store/slices/userSlice';
const Signup = ({setIsNew}) => {
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignup = async () => {
    dispatch(signup({firstname, lastname, password, email}));
  };
  return (
    <View className="relative h-screen justify-center">
      <View className="items-center">
        <View className="">
          <Text className="text-4xl font-sans text-black">Welcome!</Text>
        </View>
        <View>
          <Text className="text-xl text-center mt-1 text-black">
            Please, Signup before
          </Text>
          <Text className="text-xl text-center text-black">
            using our plaftorm
          </Text>
        </View>
      </View>
      <View className="items-center justify-center mt-4">
        <TextInput
          placeholder="First name"
          className="w-3/4 rounded px-2 py-3 mt-3 shadow-sm z-20"
          onChangeText={text => setFirstname(text)}
        />
        <TextInput
          placeholder="Last name"
          className="w-3/4 rounded px-2 py-3 mt-3 shadow-sm z-20"
          onChangeText={text => setLastname(text)}
        />
        <TextInput
          textContentType="emailAddress"
          placeholder="Email"
          className="w-3/4 rounded px-2 py-3 mt-3 shadow-sm z-20"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          textContentType="password"
          className="w-3/4 rounded px-2 py-3 mt-4 shadow-sm z-20"
          onChangeText={text => setPassword(text)}
        />
        <View className="w-4/5 h-px bg-gray-300 mt-10"></View>
        <TouchableOpacity
          onPress={handleSignup}
          className="bg-sky-500 px-3 py-3 mt-3 w-3/4 rounded-lg items-center">
          <Text className="text-white text-xl">Sign up</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row self-center mt-12">
        <Text>Already a member?</Text>
        <TouchableOpacity onPress={() => setIsNew(false)}>
          <Text className="text-sky-500"> Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
