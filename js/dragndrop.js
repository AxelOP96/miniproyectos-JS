const CARDS = 10;

fetch("https://pokeapi.co/api/v2/pokemon/25")
    .then(response => response.json())
    .then(data => mostrarPokemon(data));

function mostrarPokemon(data){
    console.log(data)
    
    const $drag = d.querySelector(".drag");
    const $drop = d.querySelector(".drop");
    const div = d.createElement("div");
    const img = d.createElement("img");
    img.classList.add("pokemon");
    img.setAttribute("src",`${data.sprites.front_default}`);
    $drop.innerHTML = `${data.name}`;
    $drag.appendChild(img);
}