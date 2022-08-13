import mongoose from 'mongoose'

//===========================================
//===========================================

const productoSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true, trim: true },
    name:{ type: String, required: true},
    description:{type: String, required: true},
    price:{type: Number,required: true},
    image: { type: String, default: "/img/productoDefault.jpg", trim: true }
},{
    timestamps:true
});
  
//===========================================
//===========================================
  
const productosModel = mongoose.model('productos', productoSchema)
  
export default productosModel;