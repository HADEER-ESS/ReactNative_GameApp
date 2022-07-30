import React, { useContext } from 'react';
import {View, Image, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {ImageBackground} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../Navigation/AuthProvider';
const CustomDrawer = props => {
  //for Authentication
  const {logout , user} = useContext(AuthContext)
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#fff'}}>
        <ImageBackground
          source={require('../Images/background.jpg')}
          style={{padding: 30}}>
          <Image
            source={require('../Images/Avatar.png')}
            style={{width: 48, height: 48, paddingStart: 0 ,borderWidth: 2, borderRadius: 40, borderColor:"#808080"}}
          />
          <Text
            style={{
              fontSize: 18,
              color: '#806080',
              fontWeight: 'bold',
              marginTop: 9,
            }}>
            {user}
          </Text>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{padding: 25 , borderTopWidth : 1 , borderColor: "#808080"}}>
      <TouchableOpacity style={{ marginBottom: 11}}>
      <View style={{flexDirection:'row' ,alignItems:'center'}}>
      <Text style={{fontSize:17 , marginEnd:13 , color:"#808080" }} >About us</Text>
        <MaterialIcons name='info' size={21} color="#fa86c4"/>
      </View>
      </TouchableOpacity>
       
        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{logout()}}>
        <View style={{flexDirection:'row' ,alignItems:'center'}}>
        <Text style={{fontSize:17 , marginEnd:18 , color:"#808080"}}>Log out</Text>
        <MaterialIcons name='logout' size={18} color="#fa86c4"/>
        </View>
        </TouchableOpacity>
      
      </View>
    </View>
  );
};

export default CustomDrawer;
