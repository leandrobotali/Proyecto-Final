import mongoose from 'mongoose'

//===========================================
//===========================================

const msjSchema = new mongoose.Schema({    
    id: { type: String, required:true, unique: true, trim: true },
    fecha: { type: Date, default: new Date() },
    email: { type: String, required: true, trim: true },
    texto: { type: String, required: true},
},{
    timestamps: true,
});

//===========================================
//===========================================

const msjsModel = mongoose.model("Mensaje", msjSchema);

export default msjsModel;