document.addEventListener('DOMContentLoaded', () => {
    const nombre = "Gaby Campoverde";
    const contenedor = document.getElementById('nombre-animado');
    let i = 0;

    function escribirNombre() {
        if (i < nombre.length) {
            contenedor.innerHTML += nombre.charAt(i);
            i++;
            setTimeout(escribirNombre, 150); // Velocidad de escritura
        }
    }

    escribirNombre();
    
    // Mantener la funcionalidad de los mensajes del botón si la tenías
    const boton = document.getElementById('btnAccion');
    const mensaje = document.getElementById('mensaje');
    if(boton && mensaje) {
        boton.addEventListener('click', () => {
            mensaje.innerText = "¡Excelente elección! Soy la pieza que le falta a tu equipo.";
            mensaje.style.color = "#0ea5e9";
        });
    }
});
