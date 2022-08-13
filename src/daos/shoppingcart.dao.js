import DaoMongo from "./mongo.dao.js"
import carritoModel from "../models/shoppingcart.model.js"

let instance = null;

export default class DaoCarrito extends DaoMongo {

  constructor() {
    super(carritoModel)
  }

  async findProdinCart(idCart,idProd){
    try{
        const prod = await this.model.findOne({id:idCart}, { prods: {$elemMatch: { idProd : idProd }}})
        return prod
    }catch(err){
        throw err
    }
  }

  async aumentarProdCant(idCart,idProd){
    try{      
        return await this.model.updateOne({id:idCart,"prods.idProd":idProd},{
          $inc: {
            "prods.$.cant": 1
          }
        }).lean()
    }catch(err){
        throw err
    }
  }

  async restarProdCant(idCart,idProd){
    try{
        return await this.model.updateOne({id:idCart,'prods.idProd':idProd},{
          $inc: {
            "prods.$.cant": -1
          }
        }).lean()
    }catch(err){
        throw err
    }
  }

  async addProdtoCart(idCart,Prod){
    try{
      const newProd = Prod
        return await this.model.updateOne({ id: idCart },{ 
          '$push': { prods: newProd } 
        }).lean()
    }catch(err){
        throw err
    }
  }

  async delProdfromCart(idCart,idProd){
    try{
        return await this.model.updateOne({ id: idCart },{ 
           '$pull': { prods: { "idProd" : idProd } } 
        }).lean()
    }catch(err){
        throw err
    }
  }

  async empyCart(idCart,idProd){
    try{
        return await this.model.updateOne({ id: idCart },{ 
          $set: { prods: [] } 
        }).lean()
    }catch(err){
        throw err
    }
  }

  static getInstance(){
    if(!instance){
        instance = new DaoCarrito;
    }
    return instance
  }  
}
  