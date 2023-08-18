import axios from 'axios';

const API_BASE_URL = 'https://pokeapi.co/api/v2/';

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export async function fetchPokemonData(pokemonName: string) {
  try {
    const response = await axios.get(`${API_BASE_URL}pokemon/${pokemonName}`);
    const formattedName = capitalizeFirstLetter(pokemonName);
    
    const types = response.data.types.map((typeObj: any) => typeObj.type.name);

    return { ...response.data, formattedName, types };
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
}
