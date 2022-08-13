import logger from '../libs/logger.js'
import { getShoppingcartProdServ, addProdToShoppingcartServ, deleteProdShoppingcartServ } from '../services/shoppingcart.service.js'

//======================================================
//obtiene todos los productos de un carrito
export const getShoppingcartProd = async (req, res) => {
    try {
        const Cart = await getShoppingcartProdServ(req.user.id)
        logger.info(Cart)
        res.status(200).json({ Shoppingcart: Cart })
    } catch (error) {
        logger.error(error)
        res.status(400).json({Error: error.message})
    }
}

//======================================================
//agrega un producto a un carrito
export const addProdToShoppingcart = async (req, res) => {
    try {
        await addProdToShoppingcartServ(req.user.id, req.body.productId)
        logger.info('Producto agregado a carrito')
        res.status(200).json({message:'Producto agregado a carrito'})
    } catch (error) {
        logger.error(error)
        res.status(400).json({Error: error.message})
    }
}

//======================================================
//borra un producto del carrito(suma y resta cantidad)
export const deleteProdShoppingcart = async (req, res) => {
    try {
        await deleteProdShoppingcartServ(req.user.id, req.params.id)
        logger.info('Producto eliminado de carrito')
        res.status(200).json({message:'Producto eliminado de carrito'})
    } catch (error) {
        logger.error(error)
        res.status(400).json({Error: error.message})
    }
}
