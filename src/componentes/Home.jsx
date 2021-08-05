import React from 'react';
import { View, Text,Button } from 'react-native';


export default function Home ({navigation}){


  return(
    <View style={{flex:1,alignItems:'center' ,justifyContent:'center'}}>
      <Text>Tela - Home</Text>
      <Button title=" Abrir menu lateral " onPress={() => navigation.openDrawer()}/>
    </View>
);

  
 

}