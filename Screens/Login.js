import React, { useContext , useState } from 'react'
import { Text, View , Image, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../Navigation/AuthProvider';
const Login = ({navigation}) => {
  //for authentication 
  const [email , setEmail] = useState(null);
  const [password , setPassword] = useState(null);
  const {login} = useContext(AuthContext)
  return (
    <View style={{flex : 1 , justifyContent:'center'}}>
      <Image source={require("../Images/login.png")} style={{width: '90%' , height: 330}}/>
      <View style={{flexDirection:'row', alignItems:"center" , borderBottomColor: "#666" , borderBottomWidth: 1 , marginHorizontal:21}}>
      <MaterialIcons name='email' size={25} color="#666"/>
      <TextInput placeholder='Email address' keyboardType='email-address' style={{paddingStart: 8}} value={email} onChangeText={(text)=>{setEmail(text)}}/>
      </View>
      <View style={{flexDirection:'row', alignItems:"center" , borderBottomColor: "#666" , borderBottomWidth: 1 , marginHorizontal:21}}>
      <MaterialIcons name='lock' size={25} color="#666"/>
      <TextInput placeholder='Password' secureTextEntry={true} style={{paddingStart: 8}} value={password} onChangeText={(value)=>{setPassword(value)}}/>
      </View>
      <TouchableOpacity style={{backgroundColor:"#7DCE13" , marginHorizontal:25 , marginTop: 13}} onPress={()=>{login(email, password)}}>
        <Text style={{textAlign:'center' , fontSize:19 , paddingVertical:7 , fontWeight:'bold' , color:'#fff'}}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{justifyContent:'center' ,flexDirection:'row', marginHorizontal:25 , marginTop: 13}}>
        <Text style={{fontSize:19 , color:'#666'}}>Don't have account? </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('regist')}>
        <Text style={{fontSize:19 , color:'#7dce13'}}>regist</Text>
        </TouchableOpacity>
        
      </TouchableOpacity>
    </View>
  )
}

export default Login