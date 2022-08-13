import mongoClass from '../database/mongoClass.js';

class DaoMongo{
    constructor(model) {
        this.client = mongoClass.getInstance()
        this.model = model
    }
    
    async getAll(){
        try{
            return await this.model.find({})
            .sort({ date: "desc" })
            .lean();
        }catch(err){
            throw err
        }
    }

    async findById(id){
        try{
            return await this.model.findOne({id:id}).lean()
        }catch(err){
            throw err
        }
    }
    
    async save(data){
        try {
            const newItem = new this.model(data)
            await newItem.save()    
            return newItem
        } catch (err) {
            throw err
        }
    }

    async delete(id){
        try{
            return await this.model.deleteOne({id:id})
        }catch(error){
            throw err
        }
    }
}

export default DaoMongo;