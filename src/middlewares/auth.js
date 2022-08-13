import logger from '../libs/logger.js'
import { verifyAuthToken } from "../libs/jwt.js";
import config from '../config/config.js';

//======================================================
//comprueba si esta autenticado
export const isAuthenticated = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"] || req.headers["Authorization"] || ''
        if(authHeader) {
            const token = authHeader.split(' ')[1]
            req.user = verifyAuthToken(token)
            return next();            
        } else {
            throw new Error('No existe el token')
        }
    } catch (error) {
        logger.error(error)
        res.status(401).json({Error: error.message})        
    }
};

//======================================================
//comprueba si el usuario es admin
export const isAdmin = (req, res, next) => {
    try {
        if (req.user) {
            if (req.user.email == config.adminEmail) {
                return next()        
            }else{
                logger.error(req.user.email + ' no esta autorizado')
                throw new Error(req.user.email + ' no esta autorizado') 
            }            
        }else{
            throw new Error('No esta logeado')
        }
    } catch (error) {
        logger.error(error)
        res.status(403).json({Error: error.message})
    }
};