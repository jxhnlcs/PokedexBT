<template>
  <section class="container">
    <h1>Pokédex</h1>
    <ol class="pokemons">
      <li>
        Bulbasaur
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Bulbasaur">
      </li>
      <li>
        Ivysaur
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg" alt="Ivysaur">
      </li>
      <li>
        Venusaur
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg" alt="Venusaur">
      </li>
      <li>
        Charmander
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="Charmander">
      </li>
      <li>
        Charmeleon
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg" alt="Charmeleon">
      </li>
      <li>
        Charizard
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg" alt="Charizard">
      </li>
    </ol>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

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
  grid-template-columns: 1fr 1fr;
  grid-gap: .5rem;
  list-style: none;
  padding: 0;
}
.pokemons li {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  color: white;
  border-radius: 1rem;
  background-color: #14A06F;
}

.pokemons li img{
  max-width: 100%;
  height: 100px;
}
</style>
