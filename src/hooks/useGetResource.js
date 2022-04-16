import { useState, useEffect } from 'react';
import GenericServices from '../services/genericServices';

export const useGetResource = (BASE_URL, URL) => {

  const genericServices = new GenericServices(BASE_URL);
  const [resource, setResource] = useState([]);

  useEffect(() => {
    getResource(URL);
  }, [URL]);

  // async function to get the resource
  const getResource = async (URL) => {
    const temp = [];
    const response = await genericServices.get(URL);
    const dataArray = response.data.results;
    (async () => {
      for (const pokemon of dataArray) {
        let singlePokemonInfo = await genericServices.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        let pokeImg = await singlePokemonInfo.data.sprites.other['official-artwork'].front_default
        temp.push({
          id: singlePokemonInfo.data.id,
          name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
          apiName: pokemon.name,
          url: pokemon.url,
          img: pokeImg,
          size: {
            height: singlePokemonInfo.data.height,
            weight: singlePokemonInfo.data.weight
          },
          captured: false,
        })
      }
      setResource(temp);
    })();
  };

  return resource;
};
