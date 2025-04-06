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
export function cameraOn(id){
    const $cameraOn = d.querySelector(`${id}`);
    let mediaStream;
    $cameraOn.addEventListener("click", (e) =>{
        
        if (mediaStream) {
            mediaStream.getTracks().forEach(track => track.stop()); 
            camara.srcObject = null;  
            $cameraOn.innerText = "Encender cámara"; 
            mediaStream = null;  
        } else {
            n.mediaDevices.getUserMedia({
                audio: true,
                video: { width: 840, height: 600 },
            }).then(function (media){
                camara.srcObject = media;
                mediaStream = media;
                camara.play();
                $cameraOn.innerText = "Apagar cámara";
            })
            .catch(function (error) {
                console.log("Error al acceder a la cámara: ", error);
            });
        }
    })
    
    
}