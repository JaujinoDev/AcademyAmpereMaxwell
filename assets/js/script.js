document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("intro-banner");
    const closeBtn = document.getElementById("close-banner");

    closeBtn.addEventListener("click", () => {
        banner.style.display = "none";
    });
});


// Efecto máquina de escribir

const text = "¡Tu futuro comienza hoy en Ampere Maxwell!";
let index = 0;
const speed = 70;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typed-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

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


