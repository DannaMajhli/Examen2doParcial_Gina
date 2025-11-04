// utils/tokenManager.js
import crypto from 'crypto';

// Objeto temporal para almacenar tokens activos
const activeTokens = {};

// Generar un nuevo token único
export function generateToken(user) {
  const token = crypto.randomUUID();
  activeTokens[token] = {
    name: user.name,
    created: Date.now()
  };
  console.log(`Aqui está el token: ${token}`);
  return token;
}

// Verificar si un token es válido
export function validateToken(token) {
  return activeTokens[token] || null;
}

// Eliminar un token (opcional, por si haces logout)
export function revokeToken(token) {
  delete activeTokens[token];
}

// (opcional) exportar el objeto activo, si quieres monitorearlo
export { activeTokens };