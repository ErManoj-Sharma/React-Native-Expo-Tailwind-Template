import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const page = () => {
    const router = useRouter();
    return (
        <View>
            <Text>Bills index page</Text>
            <Button onPress={() => router.push("/examandjob")} title="go to xam"></Button>
        </View>
    )
}

export default page