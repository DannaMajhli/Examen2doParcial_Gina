import express from 'express';
import { authRequired } from '../middleware/authRequired.js';

const router = express.Router();

router.get('/exam/start', authRequired, (req, res) => {
  res.json({ message: 'Examen iniciado', user: req.user });
});

router.post('/exam/submit', authRequired, (req, res) => {
  res.json({ message: 'Examen enviado', data: req.body });
});

router.get('/exam/pdf', authRequired, (req, res) => {
  res.json({ message: 'Aquí se generaría el PDF del examen' });
});

export default router;