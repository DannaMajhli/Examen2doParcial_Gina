import express from 'express';
import { authRequired } from '../middleware/authRequired.js';
import { startQuiz, submitAnswers, estadoIntento } from '../controllers/examController.js';

const router = express.Router();

// Rutas del examen
router.get('/exam/start', authRequired, startQuiz);
router.post('/exam/submit', authRequired, submitAnswers);
router.get('/exam/estado/:idIntento', authRequired, estadoIntento);

export default router;
