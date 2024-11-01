// app/(tabs)/examandjob/_layout.jsx
import { Stack } from 'expo-router';

export default function BillLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="examAndJobPage" // This refers to app/(tabs)/examandjob/index.js
        options={{ title: 'Exam and Jobs' , headerShown: true }}
      />
      <Stack.Screen
        name="[id]" // This refers to app/(tabs)/examandjob/[id].js
        options={{ title: 'Job Details' , headerShown: true }}
      />
    </Stack>
  );
}
