<template>
  <section class="container">
    <h1>Pokédex</h1>
    <ol class="pokemons">
      <li v-for="pokemon in pokemons" :key="pokemon.id" :style="{ backgroundColor: pokemon.color }">
        {{ pokemon.name }}
      </li>
    </ol>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { pokemons } from '@/db/pokemonsData';

interface Pokemon {
  id: number;
  name: string;
  type: string;
  color: string;
}

export default defineComponent({
  data() {
    return {
      pokemons: pokemons as Pokemon[],
    };
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
  grid-gap: .5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.pokemons li {
  padding: 2rem 1rem;
  color: white;
  border-radius: 1rem;
}
</style>
