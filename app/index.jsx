import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import * as React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export default function App() {
  return (
    <View className="flex-1 bg-pink-400 items-center justify-center">
      <Text>This file in app/index.js</Text>
      <Link href="/bills">
        <Text className="text-blue-500 underline">Jump to bills</Text>
      </Link> 
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
      <StatusBar style="auto" />
    </View>
  );
}
