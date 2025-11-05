// certificaciones.js - Manejo de certificados
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si el usuario aprobó recientemente
    const urlParams = new URLSearchParams(window.location.search);
    const aprobado = urlParams.get('aprobado');
    const intentoId = urlParams.get('intentoId');
    
    if (aprobado === 'true' && intentoId) {
        mostrarSeccionCertificado(intentoId);
    }
    
    // Configurar botón de descarga
    const btnDescargar = document.getElementById('btn-descargar-certificado');
    if (btnDescargar) {
        btnDescargar.addEventListener('click', function() {
            const intentoId = this.getAttribute('data-intento-id');
            if (intentoId) {
                descargarCertificado(intentoId);
            }
        });
    }
});

function mostrarSeccionCertificado(intentoId) {
    const seccionCertificado = document.getElementById('descargar-certificado');
    if (seccionCertificado) {
        seccionCertificado.style.display = 'block';
        
        // Scroll automático a la sección
        seccionCertificado.scrollIntoView({ behavior: 'smooth' });
        
        // Llenar información del certificado
        const usuario = localStorage.getItem('usuario');
        const fecha = new Date().toLocaleDateString('es-MX');
        
        document.getElementById('certificado-usuario').textContent = usuario;
        document.getElementById('certificado-fecha').textContent = fecha;
        
        // Configurar botón de descarga
        const btnDescargar = document.getElementById('btn-descargar-certificado');
        btnDescargar.setAttribute('data-intento-id', intentoId);
        
        // Guardar intentoId para uso futuro
        localStorage.setItem('ultimoIntentoAprobado', intentoId);
    }
}

async function descargarCertificado(intentoId) {
    const token = localStorage.getItem('token');
    
    if (!token) {
        alert('Debes iniciar sesión para descargar el certificado.');
        window.location.href = 'login.html';
        return;
    }
    
    const btnDescargar = document.getElementById('btn-descargar-certificado');
    const textoOriginal = btnDescargar.textContent;
    
    try {
        btnDescargar.textContent = '⏳ Generando certificado...';
        btnDescargar.disabled = true;
        
        console.log('Solicitando certificado para intento:', intentoId);
        
        const response = await fetch(`http://localhost:3000/api/cert/${intentoId}/pdf`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        console.log('Respuesta del servidor:', response.status);
        
        if (response.ok) {
            // Crear blob y descargar
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = `certificado-javascript-${intentoId}.pdf`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            
            alert('✅ Certificado descargado exitosamente');
        } else {
            const errorData = await response.json().catch(() => ({ message: 'Error desconocido' }));
            throw new Error(errorData.message || `Error ${response.status}`);
        }
    } catch (error) {
        console.error('Error descargando certificado:', error);
        alert('❌ Error al descargar el certificado: ' + error.message);
    } finally {
        btnDescargar.textContent = textoOriginal;
        btnDescargar.disabled = false;
    }
}

// Función para verificar si el usuario tiene certificados pendientes
function verificarCertificadosPendientes() {
    const intentoId = localStorage.getItem('ultimoIntentoAprobado');
    const examenRealizado = localStorage.getItem('examenRealizado');
    
    if (examenRealizado === 'true' && intentoId) {
        mostrarSeccionCertificado(intentoId);
    }
}

// Verificar al cargar la página
verificarCertificadosPendientes();