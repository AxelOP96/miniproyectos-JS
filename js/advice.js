
const $advice = d.getElementById("advice");

d.addEventListener("DOMContentLoaded", (e)=>{
    const h2 = d.createElement("h2");
    const p = d.createElement("p");

    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => renderizarData(data));

    function renderizarData(data){
            h2.innerHTML = `Advice: #${data.slip.id}`;
            h2.classList.add("center");
            h2.style.color = 'hsl(150, 100%, 66%)';
            p.innerHTML = `“${data.slip.advice}”`;
            p.style.padding = '3rem';
            p.style.fontSize = '36px';
            p.style.color = 'hsl(193, 38%, 86%)';
            $advice.appendChild(h2);
            $advice.appendChild(p);
    }
})
