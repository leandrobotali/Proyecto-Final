import crypt from "../libs/crypto.js";
import logger from '../libs/logger.js'
import DaoMsj from '../daos/msj.dao.js'
import Msj from '../class/msj.js'

const msjInstance = DaoMsj.getInstance()

//======================================================
//socketIo
export default async function SocketIo (io){
    io.on('connection', async socket => {
        logger.info('se conecto un cliente')
        const allMsjs = await getMsjs()
        socket.emit('messages', allMsjs)           
        socket.on('new_message', async data => {
                logger.info(data)
                const msjs = await saveMsj(data)
                io.sockets.emit('messages', msjs)
         })

    })
}

//======================================================
//guarda un mensaje
const saveMsj = async (msj) => {
    try {
        const id = crypt()
        const newMsj = new Msj(id, msj)
        await msjInstance.save(newMsj)
        return await msjInstance.getAll()
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

//======================================================
//obtiene los mensajes
const getMsjs = async () => {
    try {
        return await msjInstance.getAll()
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}


