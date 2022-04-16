import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PokemonCard } from 'fathom-story-comp';

const PokeCard = (props) => {
  const { id, name, onPress, imgUrl } = props;
  return (
    <View style={styles.container}>
      <PokemonCard
        key={id}
        name={name}
        onPress={onPress}
        imgUrl={imgUrl}
      />
    </View>
  );
}
const styles = StyleSheet.create({
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

export default PokeCard;