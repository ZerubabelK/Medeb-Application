import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login, resentOTP} from '../../store/slices/userSlice';
const Signin = ({setIsNew}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [processing, setProcessing] = useState(false);
  const handleAuth = async () => {
    setProcessing(true);
    const response = await dispatch(login({email, password}));
    if (response.error) {
      setError(
        response.payload == 'Network Error'
          ? response.payload
          : 'Invalid Credentials',
      );
    }
    if (response) setProcessing(false);
  };
  return (
    <View className="relative h-screen mt-12 ">
      <View className="items-center">
        <View className="mt-12">
          <Text className="text-4xl font-sans text-black">Welcome!</Text>
        </View>
        <View>
          <Text className="text-xl text-center mt-1 text-black">
            Please, Signin before
          </Text>
          <Text className="text-xl text-center text-black">
            using our plaftorm
          </Text>
        </View>
      </View>
      {error ? (
        <View className="bg-[#cb5c5cbf] w-2/3 self-center items-center rounded-lg py-3 mt-4">
          <Text className="text-white">{error}</Text>
        </View>
      ) : (
        <></>
      )}
      <View className="items-center justify-center mt-4">
        <TextInput
          placeholder="Email"
          className="w-3/4 rounded px-2 py-3 mt-3 shadow-sm z-20"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          className="w-3/4 rounded px-2 py-3 mt-4 shadow-sm shadow-red-300 z-20"
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <View className="w-4/5 h-px bg-gray-300 mt-10"></View>
        <TouchableOpacity
          disabled={processing}
          onPress={handleAuth}
          className="bg-[#1b0f28c8] px-3 py-3 mt-3 w-3/4 rounded-lg items-center">
          <Text className={'text-white text-xl'}>
            {processing ? 'Processing...' : 'Sign in'}
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row self-center mt-12">
        <Text>Not a member?</Text>
        <TouchableOpacity
          onPress={() => {
            setIsNew(true);
          }}>
          <Text className="text-sky-500"> Register now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signin;
