const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');

function authMiddleware(req) {
  const token = req.headers.authorization || '';

  if (!token) throw new AuthenticationError('Authorization token is required');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    throw new AuthenticationError('Invalid or expired token');
  }
}

module.exports = authMiddleware;
