const $words = d.getElementById("words");
const ALPHABET = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const $try = d.getElementById("try");
const palabras = [
    "aventuras", "alquileres", "francisco", "misterios", "recibidos", 
    "solitarios", "entusiasmo", "delicioso", "entrenado", "confianza", 
    "distancia", "secretivo", "instantes", "olvidados", "sugestivo", 
    "espectros", "traduccion", "construir", "libertado", "inmortal", 
    "creacion", "sintetico", "futuroso", "sinceridad", "vanguardia", 
    "resistencia", "sorpresas", "maximo", "satisfaccion", "discrecion", 
    "evaluar", "tolerancia", "cambiantes", "destruccion", "explosivo", 
    "solidez", "tendencia", "sorprendente", "complejos", "aprecio", 
    "transitar", "resolucion", "despacho", "fugaz", "impulso", 
    "progreso", "necesario", "espectacular", "voluntario"
  ];
let intentos = 5;
d.addEventListener("DOMContentLoaded", (e)=>{

    for(let i=0; i<ALPHABET.length; i++){
        const $letter = d.createElement("button");
        $letter.innerHTML = `${ALPHABET[i]}`;
        $letter.classList.add("letter");
        $words.appendChild($letter);
    }

    const random = mostrarPalabra();
    const $letters = d.querySelectorAll(".letter");
    probarLetra($letters, random);
    
})

function mostrarPalabra(){
    const h2 = d.createElement("h2");
    h2.innerHTML = `${palabras[Math.floor(Math.random()*palabras.length)]}`;
    h2.classList.add("center", "word");
    h2.setAttribute("id", "word");
    $words.insertAdjacentElement("beforebegin", h2)
    return h2;
}

function probarLetra($letters, random){
    console.log("random" , random.innerText)
    const palabraElegida = random.innerText;
    let newWord = "";
    for(let i=0; i<random.innerText.length; i++){
        newWord += "-"
    }
    random.innerHTML = `${newWord}`;
    
    $letters.forEach((letter) =>{
        letter.addEventListener("click", (e) => intentarLetra(e, random, palabraElegida));
    })
    
    function intentarLetra(e, palabra, palabraElegida){
        if(palabraElegida.includes(e.target.innerHTML)){
            for(let i=0; i< palabraElegida.length; i++){
                if(palabraElegida[i] === e.target.innerHTML){
                    
                    let palabraArray = palabra.innerHTML.split("");
                    palabraArray[i] = e.target.innerHTML;
                    palabra.innerHTML = palabraArray.join("");
                }
            }
        }
        else{
            if(intentos > 0){
                intentos--;
                $try.setAttribute("src", `./assets/intentos-${intentos}.png`);
            }
            
        }
    }
}