import logger from '../libs/logger.js'
import { getAllOrdersServ, addNewOrderServ } from '../services/orders.service.js'

//======================================================
//obtiene todas las ordenes generadas por el usuario
export const getAllOrders = async (req, res) => {
    try {
        const orders = await getAllOrdersServ(req.user.id)
        logger.info(orders)
        res.status(200).json({Ordenes: orders})
    } catch (error) {
        logger.error(error)
        res.status(400).json({Error: error.message})
    }
}

//======================================================
//genera una nueva orden
export const addNewOrder = async (req, res) => {
    try {
        const order = await addNewOrderServ(req.user)
        logger.info(order)
        res.status(200).json({Orden: order})
    } catch (error) {
        logger.error(error)
        res.status(400).json({Error: error.message})
    }
}
