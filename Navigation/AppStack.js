import React from 'react'
import Home from '../Screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Setting from '../Screens/Setting';
import Messages from '../Screens/Messages';
import Profile from '../Screens/Profile';
import CustomDrawer from '../Component/CustomDrawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Drawer = createDrawerNavigator();
import BottomTabNavigation from './BottomTabNavigation';
const AppStack = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer{...props}/>} screenOptions={{headerShown: false, drawerActiveBackgroundColor: "#Fec5e5" , drawerActiveTintColor: "#fff" , drawerLabelStyle: {fontSize: 16 , fontWeight:'bold' }}}>
          <Drawer.Screen name="Home" component={BottomTabNavigation} options={{
            drawerIcon : () => 
            <MaterialIcons name='home' size={18} color="#806080"/>
          }} />
          <Drawer.Screen name="Profile" component={Profile} options={{
            drawerIcon : () => 
            <FontAwesome name='user-outline' size={18} color="#806080"/>
          }}/>
          <Drawer.Screen name="Message" component={Messages} 
            options={{
            drawerIcon : () => 
            <MaterialIcons name='message' size={18} color="#806080"/>
          }}
          />
          <Drawer.Screen name="Setting" component={Setting} 
            options={{
            drawerIcon : () => 
            <MaterialIcons name='settings' size={18} color="#806080"/>
          }}
          />
    </Drawer.Navigator>
  )
}

export default AppStack