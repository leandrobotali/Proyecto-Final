import crypt from "../libs/crypto.js";
import Order from '../class/order.js';
import DaoCarrito from '../daos/shoppingcart.dao.js';
import DaoOrders from '../daos/orders.dao.js';
import logger from '../libs/logger.js'
import enviarEmail from '../libs/nodemailer.js'

const CarritoInstance = DaoCarrito.getInstance()
const OrderInstance = DaoOrders.getInstance()

//======================================================
//devuelve todas las ordenes del usuario
export const getAllOrdersServ = async (data) => {
    try {
        return await OrderInstance.findByidClient(data)
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

//======================================================
//genera una nueva orden
export const addNewOrderServ = async (data) => {
    try {
        const id = crypt()
        const carrito = await CarritoInstance.findById(data.id)
        if(carrito.prods.length >= 1){//valida que el carrito del usuario no este vacio
            const order = new Order(id, data.id, carrito.prods)
            await OrderInstance.save(order)
            await CarritoInstance.empyCart(data.id)
            enviarEmail(data.email, order)
            return order
        }else{
            throw 'Su carrito esta vacio, debe agregar productos antes de generar una orden de compra'
        }        
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}