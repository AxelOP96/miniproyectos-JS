const d = document;
const $btns = d.querySelectorAll(".gameppt");
const $idRock = d.getElementById("rock");
const $idPaper = d.getElementById("paper");
const $idScissor = d.getElementById("scissor");
const $restart = d.getElementById("restart")

d.addEventListener("click", (e)=>{
    if(e.target === $idRock){
        $idPaper.classList.add("none");
        $idScissor.classList.add("none");
        $idRock.style.transform = 'scale(1.2)';
        $idRock.style.transform = 'rotate(180deg)'
        $idRock.style.transform = 'rotate(360deg)'
    }

    if(e.target === $idPaper){
        $idRock.classList.add("none");
        $idScissor.classList.add("none");
        $idPaper.style.transform = 'scale(1.2)';
        $idPaper.style.transform = 'rotate(180deg)'
        $idPaper.style.transform = 'rotate(360deg)'
    }

    if(e.target === $idScissor){
        $idPaper.classList.add("none");
        $idRock.classList.add("none");
        $idScissor.style.transform = 'scale(1.2)';
        $idScissor.style.transform = 'rotate(180deg)'
        $idScissor.style.transform = 'rotate(360deg)'
    }
    let decision = e.target.getAttribute("id");
    jugar(decision);

    function jugar(decision){
        
    }
})