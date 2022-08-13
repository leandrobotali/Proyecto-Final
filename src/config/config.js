import 'dotenv/config'

const config = {
    URLmogoAtlas: process.env.MONGO_URI_ATLAS,//url de conexion de mongo atlas
    URLmongoLocal: 'mongodb://localhost:27017',//url de conexion de mongo local
    private_key: process.env.PRIVATE_KEY || "myprivatekey",//key de encriptacion  
    adminEmail: process.env.EMAIL_ADMIN || "admin@admin.com",//email de admin
    entorno: process.env.NODE_ENV || 'dev',//entorno de ejecucion
    ethereal: {//datos de cuenta de ethereal   
        Name: "Nyasia Koelpin",
        Username: "nyasia11@ethereal.email",
        Password: "YBy18gmxSZVkeQrmft"
    }
}

export default config