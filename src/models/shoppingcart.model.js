import mongoose from 'mongoose'

//===========================================
//===========================================


const carritoSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true, trim: true },
    prods: [{
        idProd: { type: String, required: true, trim: true },
        name:{ type: String, required: true},
        description:{type: String, required: true},
        price:{type: Number,required: true},
        image: { type: String, default: "/img/productoDefault.jpg", trim: true },
        cant: {type: Number,required: true}
    }]
},{
    timestamps:true
})

//===========================================
//===========================================

const carritoModel = mongoose.model('carritos', carritoSchema)

export default carritoModel;