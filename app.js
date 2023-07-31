 import cliente from './routers/Cliente.js'
 import Automovil from './routers/automovil.js'
 import express from 'express'; /*importar la libreria express*/ 
 import dotenv from "dotenv";   /*importar la libreria dotenv que permite cargar variables de entorno*/
  
  dotenv.config(); /*inicializa las variables de entorno del .env*/
  
  const appExpress = express(); /*variable appExpres que use la función express()*/
  
  appExpress.use(express.json()); /*para que la variable appExpress entienda archivos json*/
  
  let config = JSON.parse(process.env.MY_CONFIG);/*lee la variable de entorno MY_CONFIG y la guarda en archivo Json*/ 
  
  appExpress.listen(config, ()=>{
      console.log(`http://${config.hostname}:${config.port}`); /*mostramos en la consola el enlace del servidor*/
  });

appExpress.use("/cliente",cliente); 
appExpress.use("/automovil",Automovil); 
