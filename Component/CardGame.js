import React from "react";
import { View , Text , ImageBackground, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardGame({data}){
    const navigation = useNavigation();
    return(
    <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop:15}}>
    <View style={{flexDirection: 'row'}}>
        <ImageBackground source={data.image} style={{width: 40 , height: 40, marginEnd: 17 , marginTop:9}} imageStyle={{borderRadius:25}}/>
        <View>
            <Text style={{fontSize:18 , fontWeight:'bold'}}>{data.title}</Text>
            <Text style={{fontSize:13}}>{data.subtitle}</Text>
        </View>
    </View>
                                                              {/*subtitle, title, image will be stored in (route)  that be accepted  as a param in another component */}
        <TouchableOpacity onPress={()=> navigation.navigate("gameDetail" , {subtitle : data.subtitle , image : data.image , title:data.title})} style={{height:30 , width:67 , backgroundColor:"#0aaad8" , borderRadius: 7 ,justifyContent:'center' , alignItems:'center', marginTop: 9}}>
            {data.isFree ? <Text style={{color:'white' , fontSize: 18}}>Play</Text> : <Text style={{color:'white' , fontSize: 18}}>{data.price} $</Text>}
        </TouchableOpacity>
    </View>

    )
}
{/* <Text style={{color:'white' , fontSize: 18}}>Play</Text> */}