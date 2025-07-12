document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("intro-banner");
    const closeBtn = document.getElementById("close-banner");

    closeBtn.addEventListener("click", () => {
        banner.classList.add("fade-out");
        setTimeout(() => {
            banner.style.display = "none";
        }, 600); // tiempo igual al de la animación
    });
});




window.onload = typeWriter;


document.getElementById('form-contacto').addEventListener('submit', function (e) {
    e.preventDefault();

    // Validación simple
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !correo || !telefono || !mensaje) {
        alert('Por favor completa todos los campos.');
        return;
    }

    alert('¡Mensaje enviado correctamente! (Funcionalidad pendiente)');
});

// Slider automático
const slides = document.querySelectorAll(".slide");
let idx = 0;
setInterval(() => {
    slides[idx].classList.remove("active");
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add("active");
}, 5000);

// Máquina de escribir
const textos = [
    "Prepárate para alcanzar tus sueños",
    "Educación moderna, virtual y presencial",
    "Tu ingreso universitario comienza aquí",
    "Formamos líderes del futuro"
];

let currentIndex = 0;
const typedText = document.getElementById("typed-text");

function typeWriter(text, i = 0) {
    if (i < text.length) {
        typedText.textContent += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1), 70);
    }
}

function startTypingLoop() {
    typedText.textContent = ""; // Limpiar texto anterior
    const currentText = textos[currentIndex];
    typeWriter(currentText);
    currentIndex = (currentIndex + 1) % textos.length;
}

window.addEventListener("load", () => {
    startTypingLoop();                         // Primer mensaje
    setInterval(startTypingLoop, 10000);       // Cada 10 segundos
});

