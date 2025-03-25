# Documentación

Este proyecto utiliza las API de geolocalización y de acceso a la cámara del navegador para mostrar información del dispositivo y activar la cámara. 

## Funciones Principales

### `showData()`

Esta función recopila y muestra información sobre el dispositivo del usuario, incluyendo:

- **User Agent:** Información sobre el navegador y sistema operativo.
- **Idioma Predeterminado:** El idioma configurado en el navegador.
- **Geolocalización:** Si la geolocalización está disponible, obtiene la posición actual y muestra la latitud, longitud y precisión.

**Uso:**

```javascript
showData();
cameraOn()
```
Esta función activa la cámara del usuario y la muestra en un elemento de video especificado en el HTML. Configura la cámara con una resolución de 840x600 píxeles.

## Uso:

cameraOn();
## Requisitos
Asegúrate de que tu navegador soporte las siguientes características:

* API de Geolocalización

* API de Media Devices

## Implementación

Asegúrate de tener un elemento con la clase info para mostrar la información y un elemento de video con el id camara.


<div class="info"></div>
<video id="camara" autoplay></video>
JavaScript
Incluye el archivo JavaScript que contiene las funciones showData y cameraOn.

<script type="module">
    import { showData, cameraOn } from './tuArchivo.js';
    
    // Llama a las funciones según lo necesites
    showData();
    cameraOn();
</script>
## Consideraciones
La geolocalización requiere el permiso del usuario y puede no estar disponible en todos los dispositivos.

El acceso a la cámara también requiere el permiso del usuario.

Este proyecto debe ejecutarse en un entorno seguro (HTTPS) para acceder a la geolocalización y la cámara.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor abre un issue o envía un pull request.