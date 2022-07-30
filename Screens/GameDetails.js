import React from 'react'
import { View, Text, Image } from 'react-native';

const GameDetails = ({route}) => {
  return (
    <View style={{flex: 1}}>
        <Image source={route.params?.image} style={{width: "100%" , height:"50%"}}/>
        <Text style={{fontSize: 24 , fontWeight:'bold' , marginStart: 27 }}>Game Type for {route.params?.title}</Text>
        <Text style={{fontSize: 24  , marginStart: 27}}>{route.params?.subtitle}</Text>
    </View>
  )
}

export default GameDetails;
