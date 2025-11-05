import PDFDocument from 'pdfkit';
import { generateCertificate } from '../utils/generatePDF.js';
import { intentosExamen } from './examController.js';
import QUESTIONS from '../data/questions.js';

const generateCertPDF = (req, res) => {
    const { intentoId } = req.params;
    const idUsuario = req.user.id;
    
    const intento = intentosExamen.get(intentoId);
    if (!intento || intento.idUsuario !== idUsuario || !intento.pasado) {
        return res.status(400).json({ message: "No se puede generar el certificado" });
    }

    const doc = new PDFDocument({ layout: 'landscape', size: 'A4' });
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="certificado-${intentoId}.pdf"`);
    doc.pipe(res);

    const userData = { nombreCompleto: req.user.nombreCompleto };
    const examData = {
        quizTitle: getQuizTitle(intento.idQuiz),
        porcentaje: intento.porcentaje.toFixed(2),
        fecha: new Date(intento.fechaEnvio).toLocaleDateString('es-MX')
    };

    generateCertificate(doc, userData, examData, intentoId);
    doc.end();
};

function getQuizTitle(quizId) {
    const quiz = QUESTIONS.find(q => q.id === quizId);
    return quiz ? quiz.title : "Programación";
}

export { generateCertPDF };  // ✅ Exportación nombrada