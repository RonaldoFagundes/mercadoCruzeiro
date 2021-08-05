import React from 'react';
import { View, Text,Button } from 'react-native';


export default function Login ({navigation}){


  return(
    <View style={{flex:1,alignItems:'center' ,justifyContent:'center'}}>
      <Text>Tela - Login</Text>
      <Button title=" Abrir menu lateral " onPress={() => navigation.openDrawer()}/>
    </View>
);

  
 

}