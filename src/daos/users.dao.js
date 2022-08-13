import DaoMongo from "./mongo.dao.js"
import usersModel from "../models/users.model.js"

let instance = null;

export default class DaoUsers extends DaoMongo {

  constructor() {
    super(usersModel)
  }

  async findByEmail(email){
    try{
        return await this.model.findOne({email:email}).lean()
    }catch(err){
        throw err
    }
  }

  static getInstance(){
    if(!instance){
        instance = new DaoUsers;
    }
    return instance
  }  
}
  