import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import A from './screens/ScreenA';
import B from './screens/ScreenB';
import RootNavigator from './screens/RootScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='A' screenOptions={{ headerShown: false}}>
        <Tab.Screen name="A" component={A} />
        <Tab.Screen name="B" component={B} />
        <Tab.Screen name="Root" component={RootNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
