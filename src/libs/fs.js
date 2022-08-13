import fs from 'fs';

//======================================================
//comprueba si existe una imagen con el nombre dado en directorio publico
export default async function exist(name){
    const ruta = "./src/public/img/" + name
    if(fs.existsSync(ruta))
        return true
    else
        return false
}