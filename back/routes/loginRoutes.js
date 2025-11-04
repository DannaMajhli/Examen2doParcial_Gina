import express from 'express';
import { login, register } from '../controllers/loginController.js';
import { authRequired } from '../middleware/authRequired.js';

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

export default router;