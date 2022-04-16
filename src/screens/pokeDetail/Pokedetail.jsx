
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { PokedexScreen } from 'fathom-story-comp';

const Pokedetail = (props) => {
  const navigation = useNavigation();
  const { name, height, weight, imgUrl } = props.route.params.data;
  const goBack = () => {
    navigation.goBack();
  }
  //console.log(props.route.params.data);
  return (
    <PokedexScreen
      name={name}
      imgUrl={imgUrl}
      height={height}
      weight={weight}
      onPress={goBack}
    />
  );
}
export default Pokedetail;















































{/* <View style={style.container}>
  <View style={style.blueCircle} />
  <View style={style.pokedexScreen}>
    <Image
      style={{ height: 200, width: 200, marginTop: 10, }}
      source={{
        uri: imgUrl,
      }}
    />
  </View>

  <View style={style.infoScreen}>
    <Text style={{ fontSize: 24, color: 'white', marginBottom: 10, }}>{name.toUpperCase()}</Text>
    <Text style={{ fontSize: 18, color: 'white', alignSelf: 'flex-start' }}>Weight: {weight}</Text>
    <Text style={{ fontSize: 18, color: 'white', alignSelf: 'flex-start' }}>Height: {height}</Text>
  </View>

  <TouchableOpacity style={style.btn} onPress={goBack}>
    <Text style={{ color: 'white' }}>HOME</Text>
  </TouchableOpacity>
</View> */}