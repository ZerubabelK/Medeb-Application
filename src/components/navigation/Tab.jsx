import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Tab = ({setActiveTap, tabName, iconName, size, color}) => {
  return (
    <View className="items-center justify-center">
      <TouchableOpacity
        onPress={() => {
          setActiveTap(tabName);
        }}>
        <FontAwesome5 name={iconName} size={size} color={color} />
      </TouchableOpacity>
    </View>
  );
};

export default Tab;
