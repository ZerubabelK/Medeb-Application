import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Pressable} from 'react-native';
const Tab = ({setActiveTap, tabName, iconName, size, color, isActive}) => {
  return (
    <View className={'items-center justify-center'}>
      <Pressable
        onPress={() => {
          setActiveTap(tabName);
        }}>
        <FontAwesome5 name={iconName} size={size} color={color} />
      </Pressable>
    </View>
  );
};

export default Tab;
