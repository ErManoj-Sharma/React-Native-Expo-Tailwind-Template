import { Tabs } from 'expo-router';
import { Image,StyleSheet  } from 'react-native';
import {recharge} from "./../../assets/icons/icons"
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="bills"
        options={{ title: 'Bills',
          headerShown: false ,
          }} // Hide header for Bills tab
      />
      <Tabs.Screen
        name="examandjob"
        options={{ title: 'Exam and Jobs', headerShown: false }} // Hide header for Exam and Jobs tab
      />
      <Tabs.Screen
        name="recharge"
        options={{ title: 'Recharge', headerShown: false }} // Hide header for Recharge tab
      />
    </Tabs>
  );
}
