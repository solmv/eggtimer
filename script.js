//selecciona el botón para la función
const boton1 = document.getElementById("uno");
const boton2 = document.getElementById("dos");
const boton3 = document.getElementById("tres");
const boton4 = document.getElementById("cuatro");
const gifCargando = document.getElementById("loading");

//agregar evento click para cada botón
boton1.addEventListener("click", manejarClick);
boton2.addEventListener("click", manejarClick);
boton3.addEventListener("click", manejarClick);
boton4.addEventListener("click", manejarClick);

//crear función
function manejarClick(evento) {
    const idBoton = event.target.id;

    gifCargando.style.display = "block";

    if (idBoton === "uno") {
        console.log("Botón cruda fue clickeado");
        gifCargando.style.display = "block";
        setTimeout(() => {
            gifCargando.style.display = "none";
            alert("¡Listo!")
        }, 300000);
    } else if (idBoton === "dos") {
        console.log("Botón termino medio fue clickeado");
        gifCargando.style.display = "block";
        setTimeout(() => {
            gifCargando.style.display = "none";
            alert("¡Listo!")
        }, 480000);
    } else if (idBoton === "tres") {
        console.log("Botón 3/4 fue clickeado");
        gifCargando.style.display = "block";
        setTimeout(() => {
            gifCargando.style.display = "none";
            alert("¡Listo!")
        }, 600000);
    } else if (idBoton === "cuatro") {
        console.log("Botón bien cocida fue clickeado");
        gifCargando.style.display = "block";
        setTimeout(() => {
            gifCargando.style.display = "none";
            alert("¡Listo!")
        }, 720000);
    }
}
