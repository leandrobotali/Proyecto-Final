import mongoose from 'mongoose'

//===========================================
//===========================================

const UserSchema = new mongoose.Schema({    
    id: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true, trim: true },
    image: { type: String, default: "/img/userDefault.jpg", trim: true }
},{
    timestamps: true,
});

//===========================================
//===========================================

const usersModel = mongoose.model("User", UserSchema);

export default usersModel;