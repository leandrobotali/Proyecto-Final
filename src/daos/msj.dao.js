import DaoMongo from "./mongo.dao.js"
import msjsModel from "../models/msj.model.js"

let instance = null;

export default class DaoMsj extends DaoMongo {

  constructor() {
    super(msjsModel)
  }

  static getInstance(){
    if(!instance){
        instance = new DaoMsj;
    }
    return instance
  }  
}
  