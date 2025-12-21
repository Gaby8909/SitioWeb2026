document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btnAccion');
    const mensaje = document.getElementById('mensaje');

    boton.addEventListener('click', () => {
        // Un mensaje más divertido y menos formal al hacer clic
        const frases = [
            "¡Genial! Me encanta la gente con iniciativa. Vamos a charlar.",
            "¡Excelente elección! Soy la pieza que le falta a tu equipo.",
            "Buscabas organización y me has encontrado. ¡Hola!"
        ];
        const randomFrase = frases[Math.floor(Math.random() * frases.length)];
        
        mensaje.innerText = randomFrase;
        mensaje.style.color = "#0ea5e9";
        mensaje.style.fontWeight = "bold";
    });
});
