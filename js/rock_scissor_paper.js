const d = document;
const $btns = d.querySelectorAll(".cover");
const $idRock = d.getElementById("rock");
const $idPaper = d.getElementById("paper");
const $idScissor = d.getElementById("scissor");
const $restart = d.getElementById("restart")
const $result = d.getElementById("result");

d.addEventListener("click", (e)=>{
    if(e.target === $idRock){
        $idPaper.classList.add("none");
        $idScissor.classList.add("none");
        $idRock.style.transform = 'scale(1.2)';
        $idRock.style.transform = 'rotate(180deg)'
        $idRock.style.transform = 'rotate(360deg)';
        let decision = e.target.getAttribute("src").slice(9, e.target.getAttribute("src").length-4);
        jugar(decision);
        e.target.parentElement.setAttribute("disabled", "")
    }

    if(e.target === $idPaper){
        $idRock.classList.add("none");
        $idScissor.classList.add("none");
        $idPaper.style.transform = 'scale(1.2)';
        $idPaper.style.transform = 'rotate(180deg)'
        $idPaper.style.transform = 'rotate(360deg)';
        let decision = e.target.getAttribute("src").slice(9, e.target.getAttribute("src").length-4);
        jugar(decision);
        e.target.parentElement.setAttribute("disabled", "")
    }

    if(e.target === $idScissor){
        $idPaper.classList.add("none");
        $idRock.classList.add("none");
        $idScissor.style.transform = 'scale(1.2)';
        $idScissor.style.transform = 'rotate(180deg)';
        $idScissor.style.transform = 'rotate(360deg)';
        let decision = e.target.getAttribute("src").slice(9, e.target.getAttribute("src").length-4);
        jugar(decision);
        e.target.parentElement.setAttribute("disabled", "")
    }
    if (e.target === $restart) {
        reiniciar();
    }
    
    

    function jugar(decision){
        let sources = ["./assets/paper.png", "./assets/rock.png","./assets/scissor.png"];
        $btns.forEach((btn, index) =>{
            if(index !== 2) btn.classList.add("none")
            if(index == 2){
                btn.setAttribute("src", sources[Math.floor(Math.random()*sources.length)])
            }
            const $h3 = d.createElement("h3");
            const randomSelected = btn.getAttribute("src").slice(9, btn.getAttribute("src").length-4);
            if(decision === randomSelected){
                $h3.innerHTML = "Empate"
                $result.appendChild($h3)
                $result.style.backgroundColor = '#d9e9e6';
            }
            else if(decision === "rock" && randomSelected === "scissor"){
                $h3.innerHTML = "Ganaste";
                $result.appendChild($h3);
                $result.style.backgroundColor = "#b2e9b2";
            }
            else if(decision === "rock" && randomSelected === "paper"){
                $h3.innerHTML = "Perdiste"
                $result.appendChild($h3);
                $result.style.backgroundColor = '#d65b2a';
            }
            else if(decision === "paper" && randomSelected === "scissor"){
                $h3.innerHTML = "Perdiste"
                $result.appendChild($h3);
                $result.style.backgroundColor = '#d65b2a';
            }
            else if(decision === "paper" && randomSelected === "rock"){
                $h3.innerHTML = "Ganaste";
                $result.appendChild($h3);
                $result.style.backgroundColor = "#b2e9b2";
            }
            else if(decision === "scissor" && randomSelected === "rock"){
                $h3.innerHTML = "Perdiste"
                $result.appendChild($h3);
                $result.style.backgroundColor = '#d65b2a';
            }
            else if(decision === "scissor" && randomSelected === "paper"){
                $h3.innerHTML = "Ganaste"
                $result.appendChild($h3);
                $result.style.backgroundColor = "#b2e9b2";
            }
            $result.classList.remove("none");
            setTimeout( ()=>{
                $result.classList.add("none");
            }, 2000)
            $restart.removeAttribute("disabled")
        })
    }

    function reiniciar(){
            $btns.forEach( btn =>{
                btn.classList.remove("none");
                btn.setAttribute("src", "./assets/cover.png")
            })
            $idRock.classList.remove("none");
            $idRock.parentElement.removeAttribute("disbled");
            $idScissor.classList.remove("none");
            $idScissor.parentElement.removeAttribute("disbled");
            $idPaper.classList.remove("none");
            $idPaper.parentElement.removeAttribute("disbled");
            $result.innerHTML = "";
            $result.classList.add("none");
        }
        

})

//Rock, Scissor, Paper, Lizard and Spock
const gameOptions = d.querySelectorAll(".gameppt2"),
sourcesExtended = ["./assets/lizardexp.png", "./assets/scissorexp.png", "./assets/paperexp.png", "./assets/rockexp.png", "./assets/spockexp.png"];

d.addEventListener("click", (e)=>{
    
})