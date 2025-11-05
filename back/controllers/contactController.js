// controllers/contactController.js

export function recibirMensaje(req, res) {
  const { nombre, email, asunto, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  console.log('📩 Nuevo mensaje recibido:');
  console.log('Nombre:', nombre);
  console.log('Email:', email);
  console.log('Asunto:', asunto);
  console.log('Mensaje:', mensaje);

  // Aquí podrías:
  // ✅ Guardarlo en una base de datos
  // ✅ Enviar un correo con nodemailer
  // ✅ Guardarlo en un archivo

  res.status(200).json({ mensaje: 'Mensaje enviado correctamente' });
}
