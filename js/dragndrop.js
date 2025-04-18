const CARDS = 10;

fetch("https://pokeapi.co/api/v2/pokemon/")
.then(response => response.json())
.then(data => mostrarPokemon(data));

function mostrarPokemon(data){
    console.log(data)
}