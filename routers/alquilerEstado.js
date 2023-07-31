import { Router } from "express"; 
import conexion  from "../config/conexion.js";
const appAlquilerEstado = Router(); 



appAlquilerEstado.get("/", (req, res) => {
    conexion.query(
        /*sql*/ `SELECT * FROM Alquiler`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            console.log(data);
            console.log(fils);
            res.send(data)
        }
    );
})

appAlquilerEstado.get("/:Estado", (req, res) => {
    const Estado = req.params.Estado; 
    conexion.query(
        /*sql*/ `SELECT * FROM Alquiler WHERE Estado = ?`, 
        [Estado],       

        (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error en el servidor");
            } else {               
console.table(data);
                res.send(data);
            }
        }
    );
});

export default appAlquilerEstado;