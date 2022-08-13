import os from 'os'

//======================================================
//devuelve la info del servidor
export const getInfoServ = async () => {
    const info = {
        cpus: os.cpus().length,
        path: process.execPath,
        folder: process.argv[1],
        argv: process.argv.slice(2),
        platform: process.platform,
        node_version: process.version,
        pid: process.pid,
        memory_usage: process.memoryUsage().rss
    }
    return info
}