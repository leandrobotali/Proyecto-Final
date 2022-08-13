//======================================================
//imports libs
import express from "express";
import exphbs from "express-handlebars";
import methodOverride from "method-override";
import Handlebars from 'handlebars';
import logger from './libs/logger.js'
import cors from "cors";
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createServer } from 'http';
import { Server } from "socket.io";

//======================================================
//imports routers y middlewares
import infoRoutes from "./routers/info.routes.js";
import productosRoutes from "./routers/products.routes.js";
import usersRoutes from "./routers/users.routes.js";
import shoppingcartRoutes from "./routers/shoppingcart.routes.js";
import ordersRoutes from "./routers/orders.routes.js";
import upImgRoutes from './routers/upImgs.routes.js'
import rutaNoImplementada from "./middlewares/errorRuta.js";
import SocketIo from "./services/io.service.js";


//======================================================
//app Initializations
const app = express();
const httpServer = createServer(app); 
const io = new Server(httpServer);

const __dirname = dirname(fileURLToPath(import.meta.url));
const corsConfig = {credentials: true, origin: true};

//======================================================
//static files
app.use(express.static(join(__dirname, "public")));

//======================================================
//settings views
app.set("views", join(__dirname, "views"));

//======================================================
//config view engine
const hbs = exphbs.create({
  handlebars: allowInsecurePrototypeAccess(Handlebars),
  defaultLayout: "main",
  layoutsDir: join(app.get("views"), "layouts"),
  partialsDir: join(app.get("views"), "partials"),
  extname: ".hbs",
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

//======================================================
//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
// app.use(cors(corsConfig));

//======================================================
//routes
app.use(infoRoutes);
app.use(usersRoutes);
app.use('/api/', upImgRoutes);
app.use('/api/', productosRoutes);
app.use('/api/', shoppingcartRoutes);
app.use('/api/', ordersRoutes);
app.use(rutaNoImplementada);

//======================================================
//socket.io init
SocketIo(io)

//======================================================
//server
let server

export async function conectar({ port = 8080 }) {
  try {
    return new Promise((resolve, reject) => {
        server = httpServer.listen(port, () => {
            logger.info(`proceso '${process.pid}' escuchando en ${server.address().port}`)
            resolve()
        })
    })    
  } catch (error) {
    logger.error(error)
  }
}

export async function desconectar() {
    return new Promise((resolve, reject) => {
        server.close(() => {
            resolve()
        })
    })
}
