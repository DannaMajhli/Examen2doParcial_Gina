const express = require('express');
const { recibirMensaje } = require('../controllers/contactController');

const router = express.Router();

router.post('/contact', recibirMensaje);

module.exports = router;
