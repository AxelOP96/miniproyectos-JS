const $priorityBox = d.getElementById("priority"),
$priorityList = d.querySelector(".priority-list");
crearPrioridades();
let count = 1;
d.addEventListener("keyup", (e)=>{

    if(e.target === $priorityBox && e.key === 'Enter') {
        
        desbloquearTarea(count, e);
        count ++;
    }

    
    function desbloquearTarea(count, e){
        const spanDesbloqueado = d.querySelector(`#tarea${count}`);
        spanDesbloqueado.classList.remove("none");
        spanDesbloqueado.innerHTML = e.target.value;
    }
    
})
function crearPrioridades(){
    for(let i=0; i<20; i++){
        const article = d.createElement("article");

        const span = d.createElement("span");
        span.setAttribute("id", `tarea${i+1}`);
        article.classList.add( "article-task");//"none",
        span.innerHTML = `Tarea ${i+1}`;
        article.innerHTML = `
        <span class="up">⬆️</span>
        <span class="task">${span.innerHTML}</span>
        <span class="down">⬇️</span>`
        $priorityList.appendChild(article)
    }
}