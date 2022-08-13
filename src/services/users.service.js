import DaoUsers from "../daos/users.dao.js";
import DaoCarrito from '../daos/shoppingcart.dao.js';
import { User, UserLogin} from '../class/user.js';
import { Carrito } from '../class/carrito.js';
import logger from '../libs/logger.js'
import { encryptPassword, matchPassword } from '../libs/bycript.js'
import { generateAuthToken } from '../libs/jwt.js';
import exist from "../libs/fs.js"
import crypt from "../libs/crypto.js";

const UserInstance = DaoUsers.getInstance()
const CarritoInstance = DaoCarrito.getInstance()

//======================================================
//loggin de usuario
export const loginUserServ = async (data) => {
    try {
        new UserLogin(data)        
        const user = await UserInstance.findByEmail(data.email);
        if(user){
            const userPass = await matchPassword(data.password, user.password)
            if (userPass) {//si la contraseña es correcta
                return generateAuthToken(user)
            }else
                throw 'Contraseña incorrecta'
        }else
            throw 'El usuario no existe'
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

//======================================================
//registro de usuario
export const registerUserServ = async (data) => {
    try {
        const userEmail = await UserInstance.findByEmail(data.email);
        if(!userEmail){
            if (await exist(data.image) == true){//valida que la imagen este subida en el servidor  
                const id = crypt()
                const newUser = new User(id, data)
                newUser.password = await encryptPassword(newUser.password)//encripta password
                const newCarrito = new Carrito(id)
                await UserInstance.save(newUser)
                await CarritoInstance.save(newCarrito)
                return newUser
            }else
                throw ('Debe subir una imagen antes de poder registrarse')
        }else
            throw 'El email ya esta en uso'
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}