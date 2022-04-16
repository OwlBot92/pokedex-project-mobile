import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { PokemonCard } from 'fathom-story-comp';
import { useGetResource } from '../../hooks/useGetResource';
import Splash from '../splash/Splash';
import { isEmpty } from 'lodash';
import PokeCard from '../../components/renderItemPokeCard/RenderItemPokeCard';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  /* HOOKS */
  const readyPokeData = useGetResource('https://pokeapi.co/api/v2/', 'pokemon?offset=0&limit=151'); //first param is the base url, second is the endpoint
  const navigation = useNavigation();
  const navigateToDetail = (data) => () => {
    navigation.navigate('Pokedetail', { data });
  }
  return (
    <>
      {isEmpty(readyPokeData) && <Splash />}
      {
        !isEmpty(readyPokeData) &&
        <FlatList
          style={styles.flatListContainer}
          data={readyPokeData}
          renderItem={({ item }) => <PokeCard
            id={item.id}
            name={item.name}
            imgUrl={item.img}
            onPress={navigateToDetail({ url: item.url, weight: item.size.weight, height: item.size.height, name: item.name, imgUrl: item.img })}
          />}
          keyExtractor={(item) => item.id}
        />
      }
    </>
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: '#cb092a',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#b10924',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    paddingVertical: 15,
    borderRadius: 15
  },
});
