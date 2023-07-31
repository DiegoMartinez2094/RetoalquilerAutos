import { Router } from "express"; 
import conexion  from "../config/conexion.js";
const appreservaIdCliente = Router(); 




appreservaIdCliente.get("/:ID_Cliente", (req, res) => {
    const ID_Cliente = req.params.ID_Cliente; 
    conexion.query(
        /*sql*/ `SELECT * FROM Reserva WHERE ID_Cliente = ?`, 
        [ID_Cliente],       

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

export default appreservaIdCliente;