import React from "react";
import { View, Image} from "react-native";

// take data from Carousel (package) in home screen
export default function SliderImage({data}){
    return(
        <View>
            <Image source={data.image} style={{width: 300 , height: 200}}/>
        </View>
    )
}