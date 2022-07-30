import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../Screens/Home"
import CartScreen from "../Screens/CartScreen";
import FavoriteScreen from "../Screens/FavoriteScreen";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GameDetails from '../Screens/GameDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//to can navigate from home page to game details page
const HomeStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
      <Stack.Screen name='gameDetail' component={GameDetails} options={({route})=>({title: route.params?.subtitle})}/>
    </Stack.Navigator>
  )
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator 
    screenOptions={{tabBarActiveTintColor: "#FFF" , tabBarInactiveTintColor : "blue" , tabBarShowLabel:false , tabBarStyle: {backgroundColor: '#AD40AF'}}}>
        <Tab.Screen name='home' component={HomeStack} options= {{
            tabBarIcon : ({color , size}) => <MaterialIcons name='home' size={size} color={color}/>,
            headerShown : false
        }}/>
        <Tab.Screen name='cart' component={CartScreen} options={{
            tabBarIcon : ({color , size}) => <MaterialIcons name='shoppingcart' size={size} color={color}/>,
            tabBarBadge: 2,
            tabBarBadgeStyle: {backgroundColor : "orange" , color:"#fff"}
        }}/>
        <Tab.Screen name='favorite' component={FavoriteScreen} options={{
            tabBarIcon : ({size , color}) => <MaterialIcons name='heart-outlined' size={size} color={color}/>
        }}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation;