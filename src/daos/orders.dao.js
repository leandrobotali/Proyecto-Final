import DaoMongo from "./mongo.dao.js"
import ordersModel from "../models/orders.model.js"

let instance = null;

export default class DaoOrders extends DaoMongo {

  constructor() {
    super(ordersModel)
  }

  async findByidClient(id){
    try{
        return await this.model.find({idCliente:id}).lean()
    }catch(err){
        throw err
    }
}

  static getInstance(){
    if(!instance){
        instance = new DaoOrders;
    }
    return instance
  }  
}
  