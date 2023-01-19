import React from "react";
import { StyleSheet } from "react-native";

import { ActivityIndicator, View } from "react-native";

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#7C3AED" size={72} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090A",
    alignItems: "center",
    justifyContent: "center",
  },
});
