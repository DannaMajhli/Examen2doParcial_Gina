const express = require('express');
const { authRequired } = require('../middleware/authRequired');
const {
  startQuiz,
  submitAnswers,
  estadoIntento
} = require('../controllers/exam.Controller');

const router = express.Router();

router.get('/exam/start', authRequired, startQuiz);
router.post('/exam/submit', authRequired, submitAnswers);
router.get('/exam/estado/:idIntento', authRequired, estadoIntento);

module.exports = router;
