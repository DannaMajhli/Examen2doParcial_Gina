import express from 'express';
import cors from 'cors';
import loginRoutes from './routes/loginRoutes.js';
import examRoutes from './routes/exam.Routes.js';

const app = express();


app.use(
  cors({
    origin: "http://127.0.0.1:5500", // el dominio desde donde cargas tu front
    credentials: true, // permite cookies y autenticación
  })
);
app.use(express.json());

// Rutas
//const loginRoutes = require('./routes/loginRoutes.js');
app.use('/api', loginRoutes);
app.use('/api', examRoutes);

import contactRoutes from './routes/contactRoutes.js';

app.use('/api', contactRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});