import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
    <>
      {/* Way:1  */}
      {/* <Text>Header</Text>
      <Slot />
      <Text>footer</Text> */}
      {/* Way 2 */}
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack>
    </>
  );
};

export default RootLayout;
