import empleadoCargo from './routers/empleadoVendedor.js';
import sucursal from './routers/sucursal.js'
 import cliente from './routers/Cliente.js'
 import clienteDNI from './routers/clienteDNI.js'
 import Automovil from './routers/automovil.js'
 import Alquiler from './routers/alquiler.js'
 import Reserva from './routers/reserva.js'
 import AlquilerEstado from './routers/alquilerEstado.js'
 import AlquilerFI from './routers/alquilerFI.js'
 import reservaIdCliente from './routers/reservaIdcliente.js'
 

 import express from 'express'; 
 import dotenv from "dotenv";   
  
  dotenv.config(); /*inicializa las variables de entorno del .env*/
  
  const appExpress = express(); /*variable appExpres que use la función express()*/
  
  appExpress.use(express.json()); /*para que la variable appExpress entienda archivos json*/
  
  let config = JSON.parse(process.env.MY_CONFIG);/*lee la variable de entorno MY_CONFIG y la guarda en archivo Json*/ 
  
  appExpress.listen(config, ()=>{
      console.log(`http://${config.hostname}:${config.port}`); /*mostramos en la consola el enlace del servidor*/
  });

appExpress.use("/cliente",cliente); 

appExpress.use("/clienteDNI",clienteDNI);
appExpress.use("/automovil",Automovil); 
appExpress.use("/alquiler",Alquiler); 
appExpress.use("/reserva",Reserva); 
appExpress.use("/alquilerEstado",AlquilerEstado); 
appExpress.use("/empleadoCargo",empleadoCargo); 
appExpress.use("/CantidadAutosSucursal",sucursal); 
appExpress.use("/alquilerFI",AlquilerFI); 
appExpress.use("/reservaIdCliente",reservaIdCliente); 