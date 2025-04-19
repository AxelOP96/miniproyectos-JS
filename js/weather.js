//api key: 2cc4fd0846e843ea83900027252503
const $weather = d.getElementById("weather");

fetch("https://api.weatherapi.com/v1/current.json?key=2cc4fd0846e843ea83900027252503&q=Argentina&aqi=yes")
.then(response => response.json())
.then(data => renderWeather(data))


function renderWeather(datos){
    const div = d.createElement("div");
    const div2 = d.createElement("div");
    div.classList.add("card-time", "flex-column")
    div.innerHTML = 
    `<img src="${datos.current.condition.icon} " alt='Icon of the weather'>
    <h3>La condición actual es: ${datos.current.condition.text}</h3>
    <h3>La sensación térmica actual es: ${datos.current.feelslike_c}</h3>
    <h3>La última actulización fue: ${datos.current.last_updated}</h3>
    <h3>La visibilidad actual es de: ${datos.current.vis_km} KM</h3>
    <h3>La dirección del viente es: ${datos.current.wind_dir}</h3>`

    $weather.appendChild(div);
    $weather.appendChild(div2);
}