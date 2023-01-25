import React from "react";
import { View, TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import Animated, { ZoomInRotate } from "react-native-reanimated";
interface Props extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
}

export const CheckBox = ({ title, checked = false, ...rest }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} className="flex-row mb-2 items-center" {...rest}>
      {checked ? (
        <Animated.View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center" entering={ZoomInRotate}>
          <Feather name="check" size={20} color={colors.white} />
        </Animated.View>
      ) : (
        <View className="h-8 w-8 bg-zinc-800 rounded-lg" />
      )}

      <Text className="text-white text-base font-semibold ml-3">{title}</Text>
    </TouchableOpacity>
  );
};
