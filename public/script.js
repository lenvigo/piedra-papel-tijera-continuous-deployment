document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", (event) => {
        if (event.key.toLowerCase() === "p") jugar("piedra");
        if (event.key.toLowerCase() === "a") jugar("papel");
        if (event.key.toLowerCase() === "t") jugar("tijera");
    });
});

function jugar(eleccionUsuario) {
    const opciones = ["piedra", "papel", "tijera"];
    const maquina = opciones[Math.floor(Math.random() * 3)];

    let resultadoTexto = "";
    if (eleccionUsuario === maquina) {
        resultadoTexto = "¡Empate! 🤝";
    } else if (
        (eleccionUsuario === "piedra" && maquina === "tijera") ||
        (eleccionUsuario === "papel" && maquina === "piedra") ||
        (eleccionUsuario === "tijera" && maquina === "papel")
    ) {
        resultadoTexto = `¡Ganaste! 🎉 (${eleccionUsuario} vence a ${maquina})`;
    } else {
        resultadoTexto = `Perdiste 😢 (${maquina} vence a ${eleccionUsuario})`;
    }

    const resultado = document.getElementById("resultado");
    resultado.textContent = resultadoTexto;

    // Animación del resultado
    resultado.style.animation = "none";
    setTimeout(() => resultado.style.animation = "fadeIn 0.5s ease-in-out", 10);
}

