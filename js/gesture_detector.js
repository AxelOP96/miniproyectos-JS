const d = document,
n = navigator,
w = window;
//.n.mediaDevices, getUserMedia
const $info = d.querySelector(".info");
export function showData(){
    $info.innerHTML = `Tu dispositivo es: ${n.userAgent} <br>
    Tu idioma predeterminado es ${n.language}`
    if(n.geolocation) n.geolocation.getCurrentPosition(success);
    else{
        console.log("Geolocalización no soportada")
    }
    

    function success(position){
        $info.insertAdjacentHTML("beforebegin", `Latitud:  ${position.coords.latitude}
    <br>Longitud:  ${position.coords.longitude} <br>Precisión:  ${position.coords.accuracy}`);
    }
}