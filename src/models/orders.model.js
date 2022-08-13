import mongoose from 'mongoose'

//===========================================
//===========================================

const orderSchema = new mongoose.Schema({    
    id: { type: String, required:true, unique: true, trim: true },
    fecha: { type: Date, default: new Date() },
    idCliente: { type: String, required: true, trim: true },
    total:{type: Number,required: true},
    prods: [{
        idProd: { type: String, required: true, trim: true },
        name:{ type: String, required: true},
        description:{type: String, required: true},
        price:{type: Number,required: true},
        image: { type: String, default: "/img/productoDefault.jpg", trim: true },
        cant: {type: Number,required: true}
    }]
},{
    timestamps: true,
});

//===========================================
//===========================================

const ordersModel = mongoose.model("Order", orderSchema);

export default ordersModel;