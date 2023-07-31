import { Router } from "express"; 
import conexion  from "../config/conexion.js";
const appreservaIdReserva = Router(); 




appreservaIdReserva.get("/:ID_Reserva", (req, res) => {
    const ID_Reserva = req.params.ID_Reserva; 
    conexion.query(
        /*sql*/ `SELECT * FROM Reserva WHERE ID_Reserva = ?`, 
        [ID_Reserva],       

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

export default appreservaIdReserva;