import logger from '../libs/logger.js'
import { registerUserServ, loginUserServ } from '../services/users.service.js'

//======================================================
//login de usuario
export const loginUser = async (req, res) => {
    try {
        const token = await loginUserServ(req.body)
        logger.info('logeado, token = ' + token)
        res.status(201).json({token: token})
    } catch (error) {
        logger.error(error)
        res.status(401).json({Error: error.message})
    }
}

//======================================================
//registra un nuevo usuario(antes tiene que haber subido la imagen)
export const registerUser = async (req, res) => {
    try {
        const user = await registerUserServ(req.body)
        logger.info('Usuario Registrado ' + user.email)
        res.status(201).json({message:'Usuario Registrado: Email ' + user.email})
    } catch (error) {
        logger.error(error)
        res.status(400).json({Error: error.message})
    }
}