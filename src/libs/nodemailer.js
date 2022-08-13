import nodemailer from 'nodemailer'
import logger from './logger.js'
import config from '../config/config.js'

//======================================================
//solo funciona con cuentas de ethereal(no con gmail)
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: config.ethereal.Username,
        pass: config.ethereal.Password
    }
})

export default async function enviarEmail(email,order){
    //=================================================
    //email al usuario
    const mailOptionUser = {
        from: 'Servidor Proyecto Final',
        to: email,
        subject: 'Nueva Compra:',
        text: 'Nueva compra: ' + '\n Usuario: ' + email + '\n Fecha: ' + order.fecha + '\n Total: ' + order.total,
    }
    //=================================================
    //email al admin
    const mailOptionAdmin = {
        from: 'Servidor Proyecto Final',
        to: config.adminEmail,
        subject: 'Nueva Compra de: ' + email,
        text: 'Nueva compra: ' + '\n Usuario: ' + email + '\n Fecha: ' + order.fecha + '\n Total: ' + order.total,
    }
    
    await transporter.sendMail(mailOptionUser)
    await transporter.sendMail(mailOptionAdmin)
    
    logger.info('Se envio un email por una nueva compra del usuaro ' + email)
}
