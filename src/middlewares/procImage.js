import multer from 'multer'
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

//======================================================
//middlewares de procesamiento de imagenes
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, join(__dirname, "../public/img"))
    },
    filename: function (req, file, cb) {
        const nombre = `${Date.now()}-${file.originalname}`
        const nombreFinal = nombre.replace(/ /g, "")
        cb(null, nombreFinal)
    }
})

const upload = multer({ storage })

export default upload