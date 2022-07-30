import React , {useContext, useState} from 'react'
import { Text, View , Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker'
import { AuthContext } from '../Navigation/AuthProvider';
const Regist = ({navigation}) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [birthLabel , setBirthLabel] = useState("Birthday date")
    const [name , setName] = useState(null)
    //for authentication
    const [email , setEmail] = useState(null);
    const [password , setPassword] = useState(null);
    const {register, setUser} = useContext(AuthContext)
  return (
    <View style={{flex : 1 , justifyContent:'center'}}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Image source={require("../Images/signup.png")} style={{width: '90%' , height: 290 , marginBottom:13}}/>
    <View style={{flexDirection:'row', alignItems:"center" , borderBottomColor: "#666" , borderBottomWidth: 1 , marginHorizontal:21}}>
    <MaterialIcons name='supervised-user-circle' size={25} color="#666"/>
    <TextInput placeholder='First name' style={{paddingStart: 8}} value={name} onChangeText={(text)=>{setUser(text), setName(text)}}/>
    </View>
    <View style={{flexDirection:'row', alignItems:"center" , borderBottomColor: "#666" , borderBottomWidth: 1 , marginHorizontal:21}}>
    <MaterialIcons name='email' size={25} color="#666"/>
    <TextInput placeholder='Email address' keyboardType='email-address' style={{paddingStart: 8}} value={email} onChangeText={(text)=>{setEmail(text)}}/>
    </View>
    <View style={{flexDirection:'row', alignItems:"center" , borderBottomColor: "#666" , borderBottomWidth: 1 , marginHorizontal:21}}>
    <MaterialIcons name='lock' size={25} color="#666"/>
    <TextInput placeholder='password' secureTextEntry={true} style={{paddingStart: 8}} value={password} onChangeText={(value)=>{setPassword(value)}}/>
    </View>
    <View style={{flexDirection:'row', alignItems:"center" , borderBottomColor: "#666" , borderBottomWidth: 1 , marginHorizontal:21}}>
    <MaterialIcons name='lock' size={25} color="#666"/>
    <TextInput placeholder='Confirm password' secureTextEntry={true} style={{paddingStart: 8}}/>
    </View>
    <View style={{paddingVertical:11 ,flexDirection:'row', alignItems:"center" , borderBottomColor: "#666" , borderBottomWidth: 1 , marginHorizontal:21}}>
        <MaterialIcons name='date-range' size={25} color="#666"/>
        <TouchableOpacity onPress={()=>setOpen(true)}>
            <Text style={{paddingStart: 8}}>{birthLabel}</Text>
        </TouchableOpacity>
        <DatePicker
        modal
        mode='date'
        //maximumDate={"2020-01-01"}
        //minimumDate={'1980-01-01'}
        open={open}
        date={date}
        onDateChange={setDate}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
          setBirthLabel(date.toDateString())
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </View>
    <TouchableOpacity style={{backgroundColor:"#7DCE13" , marginHorizontal:25 , marginTop: 13}} onPress={()=>{register(email , password)}}>
      <Text style={{textAlign:'center' , fontSize:19 , paddingVertical:7 , fontWeight:'bold' , color:'#fff'}}>Sign up</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{justifyContent:'center' ,flexDirection:'row', marginHorizontal:25 , marginTop: 13}}>
      <Text style={{fontSize:19 , color:'#666'}}>Allready have account.</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Text style={{fontSize:19 , color:'#7dce13' , paddingStart:5}}>login</Text>
      </TouchableOpacity>
    </TouchableOpacity>
    </ScrollView>
  </View>
  )
}

export default Regist