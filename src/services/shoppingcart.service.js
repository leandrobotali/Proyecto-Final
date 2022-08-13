import DaoCarrito from '../daos/shoppingcart.dao.js';
import DaoProductos from "../daos/productos.dao.js";
import { ProductotoCart } from '../class/carrito.js';
import logger from '../libs/logger.js'


const CarritoInstance = DaoCarrito.getInstance()
const ProdInstance = DaoProductos.getInstance()

//======================================================
//devuelve los productos del carrito 
export const getShoppingcartProdServ = async (data) => {
    try {
        return await CarritoInstance.findById(data)
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

//======================================================
//agrega un producto al carrito(si existe, suma cantidad)
export const addProdToShoppingcartServ = async (idCart,data) => {
    try {
        const prod = await ProdInstance.findById(data)
        if(prod){
            const prodIncart = await CarritoInstance.findProdinCart(idCart,data)
            if(prodIncart.prods.length >= 1){//valida si existe el producto en el carrito
                await CarritoInstance.aumentarProdCant(idCart,data)
            }else{
                const pordtoCart = new ProductotoCart(prod)
                await CarritoInstance.addProdtoCart(idCart,pordtoCart)
            }
        }else
            throw 'No existe el producto'
        return true
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

//======================================================
//borra un producto del carrito(si la cantidad es mayor que 1, resta cantidad)
export const deleteProdShoppingcartServ = async (idCart, data) => {
    try {
        const prod = await ProdInstance.findById(data)
        if(prod){
            const prodIncart = await CarritoInstance.findProdinCart(idCart,data)
            if(prodIncart.prods.length >= 1){//valida si existe el producto en el carrito
                if(prodIncart.prods[0].cant == 1){//si la cantidad es 1, elimina el producto
                    CarritoInstance.delProdfromCart(idCart,data)
                }else{
                    CarritoInstance.restarProdCant(idCart,data)
                }
            }else{
                throw 'El producto no se encuentraagregado al carrito'
            }
        }else
            throw 'No existe el producto'
        return true
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}