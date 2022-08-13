import jwt  from 'jsonwebtoken'
import config from '../config/config.js';

const PRIVATE_KEY = config.private_key;

//======================================================
//genera token
export function generateAuthToken(user) {
    const token = jwt.sign({
        id: user.id,
        email: user.email
    },
    PRIVATE_KEY,
    { expiresIn: '600s' });
    return token;
}

//======================================================
//verifica token
export function verifyAuthToken(token) {
    try {
        const objetoOriginal = jwt.verify(token, PRIVATE_KEY);
        return objetoOriginal
      } catch (error) {
        throw new Error('token invalido')
      }
}
