<template>
  <section class="container">
    <h1>Pokédex</h1>
    <ol class="pokemons">
      <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">Bulbasaur</span>
        <div class="details">
          <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
          </ol>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            alt="Bulbasaur">
        </div>
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

.pokemon {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  color: white;
  border-radius: 1rem;
  background-color: #1AC9A9;
}

.pokemon .details img {
  max-width: 100%;
  height: 100px;
}
</style>
