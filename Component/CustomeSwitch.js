import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";


export default function CustomeSwitch({switchNum , text1 , text2 , onSwitchCase}){
    //state to change buttom activity once I click it changes state
    const [activeState , setActiveSate] = useState(switchNum);
    const switchCasenum = (value) => {
        setActiveSate(value);
        onSwitchCase(value);
    }
    return(
        <View style={{flexDirection:'row' , marginTop:18 , height: 44 , width:'100%' , backgroundColor:"#e4e4e4" , justifyContent:'center' , borderRadius: 11 , borderColor:'#AD40AF'}}>
            <TouchableOpacity onPress={()=>switchCasenum(1)}
                style={{
                    flex:1,
                    backgroundColor: activeState == 1 ? "#AD40AF" : "#E4E4E4",
                    borderColor: "#AD40AF",
                    borderRadius: 11,
                    justifyContent: 'center',
                    alignItems:'center'
                }}
            >
            <Text style={{fontSize: 18 , color: activeState == 1 ? "#e4e4e4" : "#ad40af"}}>{text1}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>switchCasenum(2)}
                style={{
                    flex: 1 ,
                    backgroundColor: activeState == 2? "#AD40AF" : "#E4E4E4",
                    borderColor: "#AD40AF",
                    borderRadius: 11,
                    justifyContent: 'center',
                    alignItems:'center'
                }}
            >
            <Text style={{fontSize: 18 , color: activeState == 2 ? "#e4e4e4" : "#ad40af" }}>{text2}</Text>
            </TouchableOpacity>
        </View>
    )
}