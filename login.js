const formulario = document.getElementById('formularioLogin');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const u = document.getElementById('usuario').value;
    const p = document.getElementById('contrasena').value;

    if (u === "Monky2" && p === "12345") {
        alert("Hola Monky2!");
        window.location.href = "https://www.youtube.com/watch?v=dsUXAEzaC3Q"
        alert("CONTRASEÑA O USUARIO MAL, INTENTA OTRA VEZ");
    }
});