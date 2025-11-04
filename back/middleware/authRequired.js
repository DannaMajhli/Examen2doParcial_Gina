import { validateToken } from '../utils/tokenManager.js';

export function authRequired(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token inválido o expirado.' });
  }

  const userData = validateToken(token);
  if (!userData) {
    return res.status(401).json({ error: 'Token inválido o expirado.' });
  }

  req.user = userData;
  next();
}