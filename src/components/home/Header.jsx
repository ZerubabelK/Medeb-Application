import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Circle, Path} from 'react-native-svg';
import Svg from 'react-native-svg';
import {describeArc} from '../../utils/arc_path';
const Header = () => {
  return (
    <View>
      <View className="mx-5">
        <View>
          <Image
            className="w-12 h-12"
            source={require('../../assets/Avatar.png')}
          />
        </View>
        <View className="mt-3">
          <Text className="text-4xl text-neutral-800">Hello,</Text>
          <Text className="text-3xl text-neutral-800">Shakil Ahmed</Text>
        </View>
        <View className="bg-[#1b0f28c8] px-5 rounded-2xl py-4">
          <Text className="text-white text-lg text-center">
            Onboarding Mobile App
          </Text>
          <View className="flex-row mt-2 justify-center">
            <View className="w-2/3">
              <Text className="text-white text-center text-[18px]">
                Great! your progress is almost done
              </Text>
              <TouchableOpacity className="bg-white  py-2 px-2 rounded-2xl mt-3">
                <Text className="text-sky-800 text-center font-bold text-[16px]">
                  View Tasks
                </Text>
              </TouchableOpacity>
            </View>
            {/* <View className="items-center w-1/3">
              
            </View> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
