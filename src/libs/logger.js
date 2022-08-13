import log4js from 'log4js'
import config from '../config/config.js'

log4js.configure({
  appenders: {
    consola: { type: 'console' },
    archivoErrores: { type: 'file', filename: 'error.log' },
    loggerConsola: {
      type: 'logLevelFilter',
      appender: 'consola',
      level: 'info',
    },
    loggerArchivoErrores: {
      type: 'logLevelFilter',
      appender: 'archivoErrores',
      level: 'error',
    },
  },
  categories: {
    default: {
      appenders: ['loggerConsola','loggerArchivoErrores'],
      level: 'all',
    },
    prod: {
      appenders: ['loggerArchivoErrores'],
      level: 'all',
    },
  },
})

let logger = null

//======================================================
//config.entorno depende del valos de la variable de entorno NODE_ENV
if (config.entorno == 'production') {
  logger = log4js.getLogger('prod')
} else {
  logger = log4js.getLogger()
}

export default logger