import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

// The verifyToken function is a middleware that verifies the token sent by the client(browser). It uses the jwt.verify method to verify the token and extract the user information. If the token is valid, it calls the next middleware function. If the token is invalid or missing, it returns an error response with status code 401 (Unauthorized). 

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized'));
    }
    req.user = user;
    next();
  });
};
