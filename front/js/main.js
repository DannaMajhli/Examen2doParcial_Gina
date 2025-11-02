// main.js

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("main-header");
    const usuario = localStorage.getItem("usuario");


    if (header) {
        const nav = header.querySelector("nav ul");

        if (usuario) {
            //Usuario logueado
            nav.innerHTML += `
                <li class="user-info">Hola, ${usuario}</li>
                <li><a href="#" id="logoutBtn">Cerrar sesión</a></li>
            `;
        } else {
            //Usuario NO logueado
            nav.innerHTML += `
                <li><a href="login.html">Iniciar Sesión</a></li>
            `;
        }

        //Evento cerrar sesion
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                localStorage.removeItem('token');
                localStorage.removeItem('usuario');
                window.location.href = "index.html";
            });
        }
    }
});
