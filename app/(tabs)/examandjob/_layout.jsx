// app/(tabs)/examandjob/_layout.jsx
import { Stack } from 'expo-router';

export default function BillLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index" // This refers to app/(tabs)/examandjob/index.js
        options={{ title: 'Exam and Jobs' , headerShown: false }}
      />
      <Stack.Screen
        name="[id]" // This refers to app/(tabs)/examandjob/[id].js
        options={{ title: 'Job Details' , headerShown: false }}
      />
    </Stack>
  );
}
