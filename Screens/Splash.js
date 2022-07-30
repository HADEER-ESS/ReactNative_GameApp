import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default class Splash extends React.Component{
  render(){
    return(
        <View style={{flex:1, margin:30}}>
            <View>
            <Text style={{textAlign:'center' , fontSize: 38 ,color:'#20315f', fontWeight:'bold'}}>GameApp</Text>
            </View>
            <Image source={require('../Images/Games.png')} style={{width: '90%', height:300 , marginHorizontal: 30 ,transform:[{rotate: '15deg'}]}}/>
            <TouchableOpacity style={{backgroundColor:'#AD40AF' , alignItems:'center' ,flexDirection:"row" ,position:'absolute' , bottom:0 ,paddingHorizontal:21 ,justifyContent:'space-between' , borderRadius: 7 , height:53 , width:'100%'}}
            onPress={()=>this.props.navigation.navigate("login")}>
              <Text style={{color:'white' , fontSize: 25 , fontWeight:'bold'}}>Let's Start</Text>
              <MaterialIcons name="arrow-right" color='white' size={38}/>
            </TouchableOpacity>
        </View>
    )
  }
}