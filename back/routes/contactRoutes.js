import express from 'express';
import { recibirMensaje } from '../controllers/contactController.js';

const router = express.Router();

router.post('/contact', recibirMensaje);

export default router;
