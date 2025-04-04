const $words = d.getElementById("words");
const ALPHABET = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const palabras = [
    "aventuras", "alquileres", "francisco", "misterios", "recibidos", 
    "solitarios", "entusiasmo", "delicioso", "entrenado", "confianza", 
    "distancia", "secretivo", "instantes", "olvidados", "sugestivo", 
    "espectros", "traducción", "construir", "libertado", "inmortal", 
    "creación", "sintético", "futuroso", "sinceridad", "vanguardia", 
    "resistencia", "sorpresas", "máximo", "satisfacción", "discreción", 
    "evaluar", "tolerancia", "cambiantes", "destrucción", "explosivo", 
    "solidez", "tendencia", "sorprendente", "complejos", "aprecio", 
    "transitar", "resolución", "despacho", "fugaz", "impulso", 
    "progreso", "necesario", "espectacular", "voluntario"
  ];
  
d.addEventListener("DOMContentLoaded", (e)=>{

    for(let i=0; i<ALPHABET.length; i++){
        const $letter = d.createElement("button");
        $letter.innerHTML = `${ALPHABET[i]}`;
        $letter.classList.add("letter");
        $words.appendChild($letter);
    }

    const random = mostrarPalabra();
    convertir(random);
})

function mostrarPalabra(){
    const h2 = d.createElement("h2");
    h2.innerHTML = `${palabras[Math.floor(Math.random()*palabras.length)]}`;
    h2.classList.add("center", "word");
    $words.insertAdjacentElement("beforebegin", h2)
    return h2;
}
function convertir(random){
    console.log(random)
    const newWord = "";
    for(let i=0; i<random.length; i++){
        newWord += "- "
    }
    random.innerHTML = `${newWord}`;
}