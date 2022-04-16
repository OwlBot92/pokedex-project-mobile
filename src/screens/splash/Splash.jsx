import React from 'react';
import { View, Text } from 'react-native';
//import lottie
import LottieView from 'lottie-react-native';
import Pokeball from '../../../assets/lottie/pokeball.json';
//integrare pokeball di lottie che durera' 1.5s
const Splash = (props) => {
  const { duration } = props;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* use lottie image to simulate loading screen */}
      <LottieView style={{ width: 250 }} source={Pokeball} autoPlay loop />
      <Text style={{ marginVertical: 40, fontSize: 25, fontWeight: 'bold' }}>POKELOADING</Text>
    </View>
  );
}
export default Splash;