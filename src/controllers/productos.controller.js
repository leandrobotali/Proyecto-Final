import logger from '../libs/logger.js'
import { getAllProductServ, getProductServ, createNewProductServ, updateProductServ, deleteProductServ } from '../services/productos.service.js'

//======================================================
//obtiene todas los productos
export const getAllProducts = async (req, res) => {
    try {
        const products = await getAllProductServ()
        logger.info(products)
        res.status(200).json({message: products})
    } catch (error) {
        logger.error(error)
        res.status(400).json({Error: error.message})
    }
}

//======================================================
//obtiene un producto en particular
export const getProduct = async (req, res) => {
    try {
        const product = await getProductServ(req.params.id)
        logger.info(product)
        res.status(200).json({message: product})
    } catch (error) {
        logger.error(error)
        res.status(400).json({Error: error.message})
    }
}

//======================================================
//crea un nuevo producto
export const createNewProduct = async (req, res) => {
    try {
        const product = await createNewProductServ(req.body)
        logger.info(product)
        res.status(200).json({message: product})
    } catch (error) {
        logger.error(error)
        res.status(400).json({Error: error.message})
    }
}

//======================================================
//actualiza un producto existente
export const updateProduct = async (req, res) => {
    try {
        const product = await updateProductServ(req.params.id,req.body)
        logger.info(product)
        res.status(200).json({message: product})
    } catch (error) {
        logger.error(error)
        res.status(400).json({Error: error.message})
    }
}

//======================================================
//elimina un producto
export const deleteProduct = async (req, res) => {
    try {
        const product = await deleteProductServ(req.params.id)
        logger.info(product)
        res.status(200).json({message:product})
    } catch (error) {
        logger.error(error)
        res.status(400).json({Error: error.message})
    }
}