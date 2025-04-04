const $words = d.getElementById("words");
const ALPHABET = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const $try = d.getElementById("try");
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
//recibo la palabra, reemplazo (replace) la palabra por un guion por cada letra, luego al dar click si esa letra coincide reemplazarla
    //los dos strings la palabra elegida y la de guiones deberian estar en la misma funcion
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
        //console.log(e.target)
        //console.log(e.target.innerHTML)
        if(palabraElegida.includes(e.target.innerHTML)){
            //random.innerHTML = palabraElegida[j];
            console.log("Está")
            for(let i=0; i< palabraElegida.length; i++){
                if(palabraElegida[i] === e.target.innerHTML){
                    console.log("La letra a reemplazar es " , palabra.innerHTML[i] )
                    let palabraArray = palabra.innerHTML.split("");
                    palabraArray[i] = palabra.innerHTML[i];     // ["h", "e", "l", "a"]
                    // Unimos el array nuevamente en un string
                    palabra.innerHTML = palabraArray.join("");
                    //palabra.innerHTML[i] = e.target.innerHTML;
                    console.log(palabra.innerHTML[i])
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