export const generateCertificate = (doc, userData, examData, intentoId) => {
    // Fondo
    doc.rect(0, 0, doc.page.width, doc.page.height).fill('#f8f9fa');
    
    // Encabezado
    doc.fillColor('#00bfff')
       .fontSize(28)
       .text('CERTIFICADO DE APROBACIÓN', 50, 100, { align: 'center' });
    
    // Línea decorativa
    doc.strokeColor('#00bfff')
       .lineWidth(3)
       .moveTo(100, 150)
       .lineTo(700, 150)
       .stroke();
    
    // Contenido
    doc.fillColor('#333')
       .fontSize(18)
       .text('Se certifica que:', 100, 200);
    
    doc.fontSize(24)
       .text(userData.nombreCompleto, 100, 230, { align: 'center' });
    
    doc.fontSize(16)
       .text(`Ha aprobado satisfactoriamente el examen de: ${examData.quizTitle}`, 100, 280, { align: 'center' });
    
    doc.fontSize(14)
       .text(`Con una calificación de: ${examData.porcentaje}%`, 100, 320, { align: 'center' });
    
    doc.text(`Fecha de examen: ${examData.fecha}`, 100, 350, { align: 'center' });
    
    // Firmas
    const firmaY = 450;
    doc.image('assets/firma-instructor.png', 150, firmaY, { width: 80 })
       .fontSize(12)
       .text('_________________________', 130, firmaY + 90)
       .text('Instructor', 130, firmaY + 110);
    
    doc.image('assets/firma-ceo.png', 450, firmaY, { width: 80 })
       .text('_________________________', 430, firmaY + 90)
       .text('CEO - SkillForge', 430, firmaY + 110);
    
    // Pie de página
    doc.fontSize(10)
       .fillColor('#666')
       .text(`ID de certificado: ${intentoId}`, 50, 600, { align: 'center' });
};