// app/(tabs)/bills/_layout.jsx
import { Stack } from 'expo-router';

export default function BillLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index" // This refers to app/(tabs)/bills/index.js
                options={{ title: 'Bills', headerShown: true }}
            />
            <Stack.Screen
                name="[id]" // This refers to app/(tabs)/bills/[id].js
                options={{ title: 'Bill Details', headerShown: true }}
            />
        </Stack>
    );
}