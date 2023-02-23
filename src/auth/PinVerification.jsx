import {View, Text, TextInput, Pressable, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logout, resentOTP, verifyUser} from '../../store/slices/userSlice';

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
    <View className="h-screen w-full px-3">
      <View className="container w-full mx-auto">
        <View className="mx-auto w-full">
          <View className="w-full">
            <View>
              <TouchableOpacity
                className="self-end px-5 py-2 bg-[#1b0f28c8] mt-5 rounded-md"
                onPress={_ => dispatch(logout())}>
                <Text className="text-white font-semibold text-lg">Cancel</Text>
              </TouchableOpacity>
            </View>
            <View className="rounded-xl py-20 px-3 h-64 text-center">
              <Text className="text-3xl font-bold text-center">
                OTP Verification
              </Text>
              <View className="flex flex-col mt-4 items-center">
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
                <TouchableOpacity
                  onPress={_ => dispatch(resentOTP(user._id))}
                  className="flex items-center bg-[#1b0f28c8] rounded-md py-2 px-3 cursor-pointer">
                  <Text className="font-bold text-white">resend OTP</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PinVerification;
