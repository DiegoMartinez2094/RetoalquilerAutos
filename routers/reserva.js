import { Router } from "express"; 
import conexion  from "../config/conexion.js";
const appReserva = Router(); 


appReserva.get("/", (req, res) => {
    conexion.query(
        /*sql*/ `SELECT * FROM Reserva`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            console.log(data);
            console.log(fils);
            res.send(data)
        }
    );
})


export default appReserva;