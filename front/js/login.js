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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user, password })
        });

        const data = await response.json();
        console.log("Respuesta del backend:", data);


        if (response.ok) {
            //Guardar sesion
            localStorage.setItem('token', data.token);
            localStorage.setItem('usuario', data.user); 

            message.textContent = "Acceso permitido, redirigiendo...";
            message.style.color = "green";

            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);
        } else {
            message.textContent = "Usuario o contraseña incorrectos.";
            message.style.color = "red";
        }

    } catch (error) {
        console.error(error);
        message.textContent = "Error al conectar con el servidor.";
        message.style.color = "red";
    }
});
