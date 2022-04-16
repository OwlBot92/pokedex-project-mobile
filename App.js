import React, { useEffect, useState, } from 'react'
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/screens/home/Home';
import Pokedetail from './src/screens/pokeDetail/Pokedetail';

const EntryApp = (props) => {


  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={props.root}
          screenOptions={{
            /* headerMode: 'none', */
            gestureEnabled: false,
          }}>

          {/* HOME SCREEN */}
          <Stack.Screen
            options={
              {
                title: 'POKEDEX',
                headerStyle: {
                  backgroundColor: '#000'
                },
                headerTintColor: '#fff',
              }
            }
            name='Home'
            component={Home}
          />

          {/* POKEDETAIL SCREEN */}
          <Stack.Screen
            options={
              {
                title: 'Pokédetail',
                headerStyle: {
                  backgroundColor: '#000'
                },
                headerTintColor: '#fff',
              }
            }
            name='Pokedetail'
            component={Pokedetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default EntryApp;