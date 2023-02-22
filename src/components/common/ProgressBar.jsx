import {Animated, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ProgressBar({progress}) {
  return (
    <View className="h-[10px] w-full">
      <View className="h-full w-full">
        <View
          className={
            `w-[` + progress + '%'
              ? progress
              : '0'`] h-full bg-sky-500 rounded-md`
          }
        />
      </View>
    </View>
  );
}
