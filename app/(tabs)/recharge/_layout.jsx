// app/(tabs)/recharge/_layout.jsx
import { Stack } from 'expo-router';

export default function RechargeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index" // This refers to app/(tabs)/recharge/index.js
        options={{ title: 'Recharge' , headerShown: true }}
      />
      <Stack.Screen
        name="[id]" // This refers to app/(tabs)/recharge/[id].js
        options={{ title: 'Recharge Details' , headerShown: true }}
      />
    </Stack>
  );
}