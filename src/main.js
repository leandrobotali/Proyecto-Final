import 'dotenv/config'
import logger from './libs/logger.js'
import cluster from 'cluster'
import os from 'os'

import { conectar } from './server.js'

//======================================================
//el puerto se carga en una variable de entorno o por defecto toma el 8080
let PORT = process.env.PORT ?? 8080

//======================================================
//el servidor se puede levantar en modo cluster o modo fork. por defecto levanta en fork
let MODE = process.argv[2] || "fork"

if (MODE == "cluster"){
    if (cluster.isPrimary) {
        const cantCpus = os.cpus().length
        for (let i = 0; i < cantCpus; i++) {
            cluster.fork()
        }
        cluster.on('exit', worker => {
            logger.info(`se cerro el proceso: '${worker.process.pid}'`)
            cluster.fork()
        })
    } else {
        await conectar({ port: PORT })
    }
}else {
    await conectar({ port: PORT })
}