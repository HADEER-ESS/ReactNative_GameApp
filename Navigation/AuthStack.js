import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Splash from '../Screens/Splash';
import Regist from '../Screens/Regist';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="splash" component={Splash} options={{headerShown: false}}/>
    <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
    <Stack.Screen name="regist" component={Regist} options={{headerShown: false}}/>
  </Stack.Navigator>
  )
}

export default AuthStack;