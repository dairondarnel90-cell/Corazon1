const corazon = document.getElementById('corazonClick');
const texto = document.getElementById('textoMensaje');

// Lista de mensajes que irán cambiando con cada clic
const mensajesAdicionales = [
    "❤️ Eres mi persona favorita ❤️",
    "¡😍 Gracias por dejarme estar en tu vida 😍!",
    "😘 Eres lo mejor de mi vida 😘",
    "¡💖 Te Amo inmenso Mi Moi 💖!",
    "🥰 Hoy y siempre, te amo 😍"
];

let indice = 0;

corazon.addEventListener('click', () => {
    // 1. Cambiar el texto
    texto.innerText = mensajesAdicionales[indice];
    indice = (indice + 1) % mensajesAdicionales.length;

    // 2. Crear lluvia de corazoncitos
    crearLluvia();
});

function crearLluvia() {
    for (let i = 0; i < 15; i++) {
        const mini = document.createElement('div');
        mini.classList.add('mini-corazon');
        mini.innerText = '❤️';
        mini.style.left = Math.random() * 100 + "vw";
        mini.style.top = "-5vh";
        mini.style.fontSize = Math.random() * 20 + 10 + "px";
        mini.style.opacity = Math.random();
        
        document.body.appendChild(mini);

        // Animación de caída
        const duracion = Math.random() * 3 + 2;
        mini.animate([
            { transform: `translateY(0) rotate(0deg)` },
            { transform: `translateY(110vh) rotate(${Math.random() * 360}deg)` }
        ], {
            duration: duracion * 1000,
            easing: 'linear'
        });

        // Limpiar el DOM eliminando el corazón después de que caiga
        setTimeout(() => {
            mini.remove();
        }, duracion * 1000);
    }
}