<template>
  <section class="container">
    <h1>Pokédex</h1>
    <ol class="pokemons">
      <li v-for="(pokemon, index) in pokemonList" :key="index" class="pokemon">
        <span class="number">{{ getPokemonNumber(pokemon.url) }}</span>
        <span class="name">{{ pokemon.name }}</span>
        <div class="details">
          <ol class="types">
            <li v-for="(type, typeIndex) in pokemon.types" :key="typeIndex" class="type">{{ type }}</li>
          </ol>
          <img :src="getPokemonImage(getPokemonIdFromUrl(pokemon.url))" :alt="pokemon.name">
        </div>
      </li>
    </ol>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Pokemon {
  name: string;
  url: string;
  types: string[];
}

export default defineComponent({
  data() {
    return {
      offset: 0,
      limit: 151,
      url: '',
      pokemonList: [] as Pokemon[],
      typeColors: {
        normal: '#A8A878',
        fire: '#F08030',
        water: '#6890F0',
        grass: '#78C850',
        electric: '#F8D030',
        ice: '#98D8D8',
        fighting: '#C03028',
        poison: '#A040A0',
        ground: '#E0C068',
        flying: '#A890F0',
        psychic: '#F85888',
        bug: '#A8B820',
        rock: '#B8A038',
        ghost: '#705898',
        dragon: '#7038F8',
        dark: '#705848',
        steel: '#B8B8D0',
        fairy: '#EE99AC',
      },
    };
  },

  created() {
    this.url = `https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.limit}`;
    this.fetchPokemonList();
  },

  methods: {
    capitalizeFirstLetter(text: string) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },

    fetchPokemonList() {
      fetch(this.url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemonList: Pokemon[]) => {
          this.pokemonList = pokemonList.map(pokemon => ({
            ...pokemon,
            name: this.capitalizeFirstLetter(pokemon.name), // Capitalize Pokémon names
          }));
          this.fetchPokemonTypes();
        })
        .catch((error) => console.error(error));
    },

    fetchPokemonTypes() {
      this.pokemonList.forEach((pokemon) => {
        fetch(pokemon.url)
          .then((response) => response.json())
          .then((pokemonDetails) => {
            pokemon.types = pokemonDetails.types.map((typeInfo: any) =>
              this.capitalizeFirstLetter(typeInfo.type.name) // Capitalize type names
            );
          })
          .catch((error) => console.error(error));
      });
    },
    getPokemonNumber(url: string) {
      const parts = url.split('/');
      return `#${parts[parts.length - 2].padStart(3, '0')}`;
    },
    getPokemonImage(pokemonId: number) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
    },
    getPokemonIdFromUrl(url: string): number {
      const parts = url.split('/');
      return parseInt(parts[parts.length - 2]);
    },
  },
});
</script>

<style scoped>
.container {
  padding: 1rem;
}

.container h1 {
  margin: 0;
}

.pokemons {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: .5rem;
  list-style: none;
  padding: 0;
}

.pokemon {
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  border-radius: 1rem;
  background-color: #1AC9A9;
}

.pokemon .number {
  color: #000;
  opacity: 0.3;
  text-align: right;
  font-size: .900rem;
}

.pokemon .name {
  color: white;
  margin-bottom: 0;
}

.pokemon .details {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.pokemon .details .types {
  padding: 0;
  margin: 0;
  list-style: none;
}

.pokemon .details .types .type {
  background-color: #3FDAC0;
  color: #fff;
  padding: .25rem .5rem;
  margin: .25rem 0;
  font-size: .825rem;
  border-radius: 1rem;
  text-align: center;
  font-weight: bold;
}

.pokemon .details img {
  max-width: 100%;
  height: 100px;
}
</style>
