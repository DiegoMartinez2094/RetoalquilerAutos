import { Router } from "express"; 
import conexion  from "../config/conexion.js";
const appClienteDNI = Router(); 


appClienteDNI.get("/:DNI", (req, res) => {
    const DNI = req.params.DNI; 
    conexion.query(
        /*sql*/ `SELECT * FROM Cliente WHERE DNI = ?`, 
        [DNI],       

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

export default appClienteDNI;