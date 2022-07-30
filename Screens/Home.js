import React, { useContext, useState } from 'react';
import {View, Text, ImageBackground, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SliderImages, FreeGames, PaiedGames } from '../module/data';
import SliderImage from '../Component/SliderImage';
import Carousel from 'react-native-snap-carousel';
import CustomeSwitch from '../Component/CustomeSwitch';
import CardGame from '../Component/CardGame';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../Navigation/AuthProvider';

export default function Home() {
  const navigation = useNavigation();
  const [gameSwitch , setGameSwitch] = useState(1)
  //get the name of user 
  const {user} = useContext(AuthContext)
  //function
  const RenderSlider = ({item ,index}) => {
    return <SliderImage data={item}/>
  }
  const onSwitchCase = (value) => {
    setGameSwitch(value);
  }
    return (
      <View style={{flex: 1, backgroundColor: 'white', padding: 30}} >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 23, color: '#20315f', fontWeight: 'bold'}}>
              Hello {user}
            </Text>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
              <ImageBackground
                source={require('../Images/Avatar.png')}
                style={{width: 40, height: 40}}
                imageStyle={{borderRadius: 25}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row', borderWidth: 1,borderRadius: 11,borderColor: '#C6C6C6',paddingHorizontal: 18,alignItems:'center', marginTop:23}}>
            <MaterialIcons name="search" size={26} color="#C6C6C6" />
            <TextInput
              placeholder="search"/>
          </View>
          <View style={{flexDirection:'row' , justifyContent:'space-between', marginVertical: 16}}>
            <Text style={{fontSize: 19, color: '#20315f', fontWeight: 'bold'}}>Upcaming Games</Text>
            <Text style={{fontSize: 19, color: "#0aaad8", fontWeight: 'bold'}}>See all</Text>
          </View>
          <Carousel
              ref={(c) => { this._carousel = c; }}
              data={SliderImages}
              renderItem={RenderSlider}
              sliderWidth={600}
              itemWidth={300}
              loop={true}
              windowSize={1}
            />        
            <CustomeSwitch switchNum={1} text1="Free Game" text2="Paid Game" onSwitchCase={onSwitchCase}/>
            <View style={{width:'100%'}}>
              {gameSwitch == 1 && FreeGames.map((item) => <CardGame data={item}/>)}
              {gameSwitch == 2 && PaiedGames.map((item) => <CardGame data={item}/>)}
            </View>
        </ScrollView>
      </View>
    );
    
}

