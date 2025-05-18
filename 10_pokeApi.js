/*
LISTA POKÉMON
Lista los 151 primeros Pokémon
utilizando la PokéAPI.
*/

const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const list = data.results;
    list.forEach(pokemon => {
      console.log(pokemon.name);
    });
  })
  .catch(error => {
    console.error("Error al obtener los datos:", error);
  });
