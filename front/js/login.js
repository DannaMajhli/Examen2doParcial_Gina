//login.js

const loginForm = document.getElementById('loginForm');
const message = document.getElementById('loginMessage');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, password })
        });

        const data = await response.json();

        if (response.ok) {
            //Guardar token y usuario en localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('usuario', data.nombreCompleto);

            //Mostrar mensaje
            message.textContent = "Acceso permitido, redirigiendo..";
            message.style.color = "green";

            //Redirigir al inicio
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);
        } else {
            message.textContent = "Credenciales incorrectas.";
            message.style.color = "red";
        }
    } catch (error) {
        console.error(error);
        message.textContent = "Error en el servidor.";
        message.style.color = "red";
    }
});
