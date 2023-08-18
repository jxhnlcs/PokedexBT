<template>
  <section class="container">
    <h1>Pokédex</h1>
    <ol class="pokemons">
      <li>
        Bulbasaur
      </li>
      <li>
        Ivysaur
      </li>
      <li>
        Venusaur
      </li>
      <li>
        Charmander
      </li>
      <li>
        Charmeleon
      </li>
      <li>
        Charizard
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 160px;
  grid-gap: .5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
.pokemons li {
  padding: 2rem 1rem;
  color: white;
  border-radius: 1rem;
  background-color: #14A06F;
}
</style>
