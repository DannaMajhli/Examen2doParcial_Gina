//Codigo Aaliyah..


//************** Validar el inicio de sesion ************************
document.addEventListener("DOMContentLoaded", () => {
    const btnExamen = document.getElementById("btnExamen");
    const mensaje = document.getElementById("mensajeCertificacion");

    //Verifica si hay una sesion iniciada
    const token = localStorage.getItem("token");

    if (!token) {
        //Si no hay sesion desactiva boton y muestra aviso
        btnExamen.disabled = true;
        btnExamen.style.opacity = "0.5";
        mensaje.textContent = "⚠ Debes iniciar sesión para acceder al examen.";
        mensaje.style.color = "red";
    } else {
        //Si si hay sesion permite ir al examen
        btnExamen.addEventListener("click", () => {
            window.location.href = "examen.html";
        });
    }
});
