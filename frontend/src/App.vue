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

.pokemon .name{
  color: white;
  margin-bottom: 0;
}

.pokemon .details{
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

.pokemon .details .types .type{
  background-color: #3FDAC0;
  color: #fff;
  padding: .25rem .5rem;
  margin: .25rem 0;
  font-size: .825rem;
  border-radius: 1rem;
}

.pokemon .details img {
  max-width: 100%;
  height: 100px;
}
</style>
