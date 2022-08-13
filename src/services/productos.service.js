import DaoProductos from "../daos/productos.dao.js";
import Producto from '../class/producto.js';
import logger from '../libs/logger.js'
import exist from "../libs/fs.js"
import crypt from "../libs/crypto.js";

const ProdInstance = DaoProductos.getInstance()

//======================================================
//devuelve todos los productos
export const getAllProductServ = async () => {
    try {
        return await ProdInstance.getAll();
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

//======================================================
//devuelve el producto con ese id
export const getProductServ = async (id) => {
    try {
        const prod = await ProdInstance.findById(id);
        if(prod){
            return prod
        }else
            throw 'El producto no existe'
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

//======================================================
//crea un nuevo producto
export const createNewProductServ = async (data) => {
    try {  
        if (await exist(data.image) == true){//valida que la imagen este subida en el servidor      
            const id = crypt()
            const newProduct = new Producto(id, data)
            return ProdInstance.save(newProduct)
        }else
            throw ('Debe subir una imagen antes de poder registrar el producto')
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

//======================================================
//actualiza un producto
export const updateProductServ = async (id, data) => {
    try {
        if (await exist(data.image) == true){//valida que la imagen este subida en el servidor 
            const upProduct = new Producto(id, data)
            const prod = await ProdInstance.findById(id);
            if(prod){
                return ProdInstance.update(upProduct)
            }else
                throw 'El producto no existe'
        }else
            throw ('Debe subir una imagen antes de poder actualizar la imagen')
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

export const deleteProductServ = async (id) => {
    try {
        const prod = await ProdInstance.findById(id);
        if(prod){
            await ProdInstance.delete(id);
            return prod
        }else
            throw 'El producto no existe'        
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}