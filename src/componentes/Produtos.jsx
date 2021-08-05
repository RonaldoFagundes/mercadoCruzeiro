import React from 'react';
import { View, Text,Button } from 'react-native';


export default function Produtos  ({navigation}){


  return(
    <View style={{flex:1,alignItems:'center' ,justifyContent:'center'}}>
      <Text>Tela - Produtos</Text>
      <Button title=" Abrir menu lateral " onPress={() => navigation.openDrawer()}/>
    </View>
);

  
 

}