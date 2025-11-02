// js/main.js

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("main-header");
    const usuario = localStorage.getItem("usuario");
    const token = localStorage.getItem("token");

    if (header) {
        const navList = header.querySelector("nav ul");

        if (!navList) return;

        // Elimina botones previos para evitar duplicados
        const oldUserInfo = header.querySelector(".user-info");
        const oldLogout = header.querySelector("#logoutBtn");
        const oldLogin = header.querySelector("#loginBtn");
        if (oldUserInfo) oldUserInfo.remove();
        if (oldLogout) oldLogout.remove();
        if (oldLogin) oldLogin.remove();

        if (usuario && token) {
            // Usuario logueado
            navList.innerHTML += `
                <li class="user-info">Hola, ${usuario}</li>
                <li><a href="#" id="logoutBtn">Cerrar sesión</a></li>
            `;
        } else {
            // Usuario NO logueado
            navList.innerHTML += `
                <li><a href="login.html" id="loginBtn">Iniciar Sesión</a></li>
            `;
        }

        // Lógica para cerrar sesión
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('token');
                localStorage.removeItem('usuario');
                window.location.href = "index.html";
            });
        }

        // Bloquear enlaces protegidos si no hay sesión
        /*if (!token) {
            document.querySelectorAll('.protegido').forEach((link) => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    alert("Debes iniciar sesión para acceder a esta sección.");
                    window.location.href = "login.html";
                });
            });
        }*/
    }
});
