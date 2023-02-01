import {Animated, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ProgressBar({progress}) {
  if (progress == 50) {
    progress += 1;
  }
  return (
    <View className="h-[10px] w-full">
      <View className="h-full w-full">
        <View className={`w-[${progress}%] h-full bg-sky-500 rounded-md`} />
      </View>
    </View>
  );
}
