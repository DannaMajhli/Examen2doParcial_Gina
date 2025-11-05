// js/contacto.js

const form = document.querySelector('.form-contacto');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita recargar la página

  const nombre = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const asunto = form.querySelectorAll('input[type="text"]')[1].value;
  const mensaje = form.querySelector('textarea').value;

  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, asunto, mensaje })
    });

    if (response.ok) {
      alert('Mensaje enviado correctamente ✅');
      form.reset();
    } else {
      alert('Hubo un error al enviar ❌');
    }

  } catch (error) {
    console.error(error);
    alert('Error de conexión con el servidor ❗');
  }
});
