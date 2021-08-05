import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer  } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from './src/componentes/Home';
import Login from './src/componentes/Login';
import Produtos from './src/componentes/Produtos';
import Promocao from './src/componentes/Promocao';

const Drawer = createDrawerNavigator();



 
export default function App() {
  return (

     <NavigationContainer>                  
       <StatusBar/>

       <Drawer.Navigator initialRouteName='Home'>
           <Drawer.Screen name='Home'  component={Home}/>       
           <Drawer.Screen name='Login'  component={Login}/>  
           <Drawer.Screen name='Produtos'  component={Produtos}/>  
           <Drawer.Screen name='Promocao'  component={Promocao}/>  
       
       </Drawer.Navigator>

     </NavigationContainer>


  );
}
