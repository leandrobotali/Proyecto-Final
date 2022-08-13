
import mongoose from 'mongoose';
import config from '../config/config.js'
import logger from '../libs/logger.js'

let instance = null;
let mongoURL = "";

if(config.entorno == 'production'){
    mongoURL = config.URLmogoAtlas
    logger.info('Entorno de productión, se conectará a mongoAtlas')
}else{
    mongoURL = config.URLmongoLocal
    logger.info('Entorno de desarrollo, se conectará a mongo local')
}

class MyMongoClient {
    constructor() {
        this.connected = false
        this.client = mongoose
    }

    async connect() {
        try {
            if(this.connected == false){
                await this.client.connect(mongoURL, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                })
                this.connected = true
                logger.info('database is connected')
            }
        } catch (error) {
            logger.error(error)
            process.exit(1)
        }
    }

    async disconnect() {
        try {
            await this.client.connection.close()
            logger.info('base de datos desconectada')
            this.connected = false
        } catch (error) {
            logger.error(error)
            process.exit(1)
        }
    }

    static getInstance(){
        if(!instance){
            instance = new MyMongoClient;
        }
        return instance
    }
}

export default MyMongoClient