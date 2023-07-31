import { Router } from "express"; 
import conexion  from "../config/conexion.js";
const appSucursal = Router(); 


appSucursal.get("/", (req, res) => {
    conexion.query(
        /*sql*/ `SELECT * FROM Sucursal_Automovil`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            console.log(data);
            console.log(fils);
            res.send(data)
        }
    );
})


export default appSucursal;