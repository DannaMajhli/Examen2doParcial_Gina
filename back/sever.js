const express = require('express');
const cors = require('cors');
const loginRoutes = require('./routes/loginRoutes');
const examRoutes = require('./routes/exam.Routes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', loginRoutes);
app.use('/api', examRoutes);
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
