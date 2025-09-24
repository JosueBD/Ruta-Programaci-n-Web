// Cambiar color de fondo con botón
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // Crear botón dinámicamente
    const btn = document.createElement("button");
    btn.textContent = "Cambiar fondo";
    btn.style.marginTop = "10px";
    btn.style.padding = "8px 15px";
    btn.style.cursor = "pointer";

    // Añadir botón al final del header
    document.querySelector("header").appendChild(btn);

    // Cambiar color al hacer click
    btn.addEventListener("click", () => {
        const colores = ["#f7f2e7", "#e0f7fa", "#fce4ec", "#fff3e0"];
        body.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
    });

    // Validación simple del formulario
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        const nombre = form.nombre.value.trim();
        const email = form.email.value.trim();
        if (nombre === "" || email === "") {
            e.preventDefault();
            alert("Por favor, completa todos los campos.");
        }
    });
});
