import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {verifyUser} from '../../store/slices/userSlice';

const PinVerification = () => {
  const {user} = useSelector(state => state.userReducer);
  const [otpInput, setOtpInput] = useState(['', '', '', '']);
  const dispatch = useDispatch();
  const handleVerification = () => {
    dispatch(verifyUser({token: otpInput.join(''), id: user._id}));
  };
  useEffect(() => {
    let cnt = 0;
    otpInput.map(otp => {
      if (otp.match(/[0-9]/)) {
        cnt += 1;
      }
    });
    if (cnt == 4) {
      handleVerification();
    }
  }, [otpInput]);
  return (
    <View className="h-screen w-full py-20 px-3">
      <View className="container w-full mx-auto">
        <View className="mx-auto w-full">
          <View className="w-full">
            <View className="rounded-xl px-3 h-64 py-3 text-center">
              <Text className="text-3xl font-bold">OTP Verification</Text>
              <View className="flex flex-col mt-4">
                <Text>Enter the OTP you received at</Text>
                <Text className="font-bold">{user.email}</Text>
              </View>

              <View
                id="otp"
                className="flex-row w-full justify-center space-x-6 text-center px-2 mt-5">
                <TextInput
                  value={otpInput[0]}
                  keyboardType="numeric"
                  onChangeText={text =>
                    setOtpInput([text, otpInput[1], otpInput[2], otpInput[3]])
                  }
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  maxlength="1"
                />
                <TextInput
                  value={otpInput[1]}
                  keyboardType="numeric"
                  onChangeText={text =>
                    setOtpInput([otpInput[0], text, otpInput[2], otpInput[3]])
                  }
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  maxlength="1"
                />
                <TextInput
                  value={otpInput[2]}
                  keyboardType="numeric"
                  onChangeText={text =>
                    setOtpInput([otpInput[0], otpInput[1], text, otpInput[3]])
                  }
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  maxlength="1"
                />
                <TextInput
                  value={otpInput[3]}
                  keyboardType="numeric"
                  onChangeText={text =>
                    setOtpInput([otpInput[0], otpInput[1], otpInput[2], text])
                  }
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  maxlength="1"
                />
              </View>

              <View className="flex-row items-center space-x-3  justify-center text-center mt-8">
                <Pressable className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                  <Text className="font-bold bg-sky-400 px-3 py-2 text-white rounded-md">
                    Verify
                  </Text>
                </Pressable>
                <Pressable className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                  <Text className="font-bold ">resend OTP</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PinVerification;
