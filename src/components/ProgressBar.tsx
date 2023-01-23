import React from "react";
import { View } from "react-native";

// import { Container } from './styles';
interface Props {
  progress?: number;
}
export const ProgressBar = ({ progress = 0 }: Props) => {
  const parsedProgress = progress > 100 ? 100 : progress;
  return (
    <View className="2-full h-3 rounded-xl bg-zinc-700 mt-4">
      <View className="h-3 rounded-xl bg-violet-600" style={{ width: `${progress}%` }} />
    </View>
  );
};
