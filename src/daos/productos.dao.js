import DaoMongo from "./mongo.dao.js"
import productosModel from "../models/productos.model.js"

let instance = null;

export default class DaoProductos extends DaoMongo {

  constructor() {
    super(productosModel)
  }

  async update(data){
    try{
        await this.model.updateOne({id:data.id},{
            $set:{
                "name": data.name,
                "description":  data.description,
                "price": data.price,
                "image": data.image
            }
        })
        return data
    }catch(err){
      throw err
    }
  }

  static getInstance(){
    if(!instance){
        instance = new DaoProductos;
    }
    return instance
  }  
}
  