const express = require('express');
const { login, register } = require('../controllers/loginController');
const { authRequired } = require('../middleware/authRequired');

const router = express.Router();

// Rutas públicas
router.post('/login', login);
router.post('/register', register);

// Ruta protegida (solo si el “token” es válido)
router.get('/profile', authRequired, (req, res) => {
  res.json({
    message: 'Acceso autorizado al perfil protegido',
    user: 'Admin'
  });
});

module.exports = router;
