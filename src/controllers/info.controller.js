import logger from '../libs/logger.js'
import { getInfoServ } from '../services/info.service.js'

//======================================================
//devuelve la info del servidor
export const getInfo = async (req, res) => {
    try {
        const info = await getInfoServ()
        logger.info('Se conecto un nuevo cliente')
        res.render("index", {info: info});
    } catch (error) {
        logger.error(error)
        res.status(400).json(error)
    }
}
