//1.Insertar Header y Footer

document.addEventListener("DOMContentLoaded", () => {
    cargarHeader();
    cargarFooter();
    mostrarUsuarioEnHeader();
});

//------------ Header dinamico ------------
function cargarHeader() {
    const header = document.querySelector("header");
    if (!header) return;

    header.innerHTML = `
        <nav class="navbar">
            <a href="index.html" class="logo">SkillForge</a>
            <ul class="nav-links" id="navLinks">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="certificaciones.html">Certificaciones</a></li>
                <li><a href="nosotros.html">Nosotros</a></li>
                <li><a href="contacto.html">Contacto</a></li>
                <li id="loginMenu"><a href="login.html">Login</a></li>
            </ul>
            <button class="menu-toggle" id="menuToggle">☰</button>
        </nav>
    `;

    //Menu responsivo 
    document.getElementById("menu").addEventListener("click", () => {
        document.getElementById("navLinks").classList.toggle("active");
    });
}

//------------ Footer dinamico ------------
function cargarFooter() {
    const footer = document.querySelector("footer");
    if (!footer) return;

    footer.innerHTML = `
        <p>&copy; 2025 SkillForge - Todos los derechos reservados.</p>
    `;
}


// 2. Mostrar usuario logueado
function mostrarUsuarioEnHeader() {
    const usuario = localStorage.getItem("usuario"); //Se guarda desde login.js

    const loginMenu = document.getElementById("loginMenu");

    if (usuario) {
        loginMenu.innerHTML = `
            <span>Hola, ${usuario}</span>
            <button id="logoutBtn" class="logout-btn">Cerrar sesion</button>
        `;

        //Evento de logout
        document.getElementById("logoutBtn").addEventListener("click", () => {
            localStorage.removeItem("usuario");
            localStorage.removeItem("token");
            window.location.href = "index.html";
        });
    }
}
