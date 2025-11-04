import express from 'express';
import cors from 'cors';
import loginRoutes from './routes/loginRoutes.js';
import examRoutes from './routes/examRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
//const loginRoutes = require('./routes/loginRoutes.js');
app.use('/api', loginRoutes);
app.use('/api', examRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});