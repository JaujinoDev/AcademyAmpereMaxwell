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
