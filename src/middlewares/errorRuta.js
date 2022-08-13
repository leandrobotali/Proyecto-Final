import logger from '../libs/logger.js'

//======================================================
//si se visito una ruta no implementada
export default function rutaNoImplementada (req, res, next) {
    logger.warn(`Se visito la ruta ${req.originalUrl} y metodo ${req.method}`)
    res.status(404).json({error: {descripcion: `Ruta ${req.originalUrl} y metodo ${req.method} no implementados`}})
}