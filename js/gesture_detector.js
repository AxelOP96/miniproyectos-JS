const d = document,
n = navigator,
w = window;

const $info = d.querySelector(".info");
const camara = d.querySelector("#camara")
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
export function cameraOn(){
    n.mediaDevices.getUserMedia({
        audio: false,
        video: { width: 840, height: 600 },
    }).then(function (media){
        camara.srcObject = media;
        camara.play();
    })
    
}