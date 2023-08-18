<template>
  <section class="container">
    <h1>Pokédex</h1>
    <ol class="pokemons">
      <li v-for="pokemon in pokemons" :key="pokemon.id" :style="{ backgroundColor: pokemon.color }">
        <div class="pokemon-card">
          <img :src="pokemon.imageUrl" alt="Pokemon Image" class="pokemon-image" />
          <p class="pokemon-name">{{ capitalizeFirstLetter(pokemon.formattedName) }}</p>
          <div class="pokemon-types">
            <span v-for="type in pokemon.types" :key="type" class="type">{{ type }}</span>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fetchPokemonData } from '@/db/pokemonService';
import { pokemons } from '@/db/pokemonsData';

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  color: string;
  imageUrl: string;
  formattedName: string;
}

export default defineComponent({
  data() {
    return {
      pokemons: [] as Pokemon[],
    };
  },
  async created() {
    for (const pokemon of pokemons) {
      try {
        const pokemonData = await fetchPokemonData(pokemon.name);
        this.pokemons.push({
          ...pokemon,
          imageUrl: pokemonData.sprites.front_default,
          formattedName: pokemonData.formattedName,
          types: pokemonData.types,
        });
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    }
  },
  methods: {
    capitalizeFirstLetter(word: string) {
      return word.charAt(0).toUpperCase() + word.slice(1);
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 200px;
  grid-gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

ol li{
  border-radius: 1rem;
}

.pokemon-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  color: white;
  border-radius: 1rem;
  background-size: cover;
  position: relative;
}

.pokemon-image {
  margin: 0 auto;
  width: 80px;
}

.pokemon-name {
  margin-top: 0.5rem;
  font-weight: bold;
}

.pokemon-types {
  margin-top: 0.25rem;
}

.type {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  margin-right: 0.25rem;
  border-radius: 0.25rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 0.75rem;
}

</style>