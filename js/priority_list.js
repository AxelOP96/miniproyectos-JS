const $priorityBox = d.getElementById("priority"),
$priorityList = d.querySelector(".priority-list");
crearPrioridades();
d.addEventListener("keyup", (e)=>{

    if(e.target === $priorityBox && e.key === 'Enter') 

    console.log("True")
    
    
})
function crearPrioridades(){
    for(let i=0; i<20; i++){
        const span = d.createElement("span");
        span.setAttribute("id", `${i}`);
        //span.classList.add("none", "task");
        span.innerHTML = `Tarea ${i+1}`;
        $priorityList.appendChild(span)
    }
}