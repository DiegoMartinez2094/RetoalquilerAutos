import { Router } from "express"; 
import conexion  from "../config/conexion.js";
const appAlquilerFI = Router(); 




appAlquilerFI.get("/:Fecha_Inicio", (req, res) => {
    const Fecha_Inicio = req.params.Fecha_Inicio; 
    conexion.query(
        /*sql*/ `SELECT * FROM Alquiler WHERE Fecha_Inicio = ?`, 
        [Fecha_Inicio],       

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


export default appAlquilerFI;