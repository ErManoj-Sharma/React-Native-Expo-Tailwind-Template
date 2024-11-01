import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
const page = () => {
  const {id} = useLocalSearchParams()
  return (
    <View>
      <Text> Bill page of {id} </Text>
    </View>
  )
}

export default page