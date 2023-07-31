import { Router } from "express"; 
import conexion  from "../config/conexion.js";
const appEmpleadoVendedor = Router(); 




appEmpleadoVendedor.get("/:Cargo", (req, res) => {
    const Cargo = req.params.Cargo; 
    conexion.query(
        /*sql*/ `SELECT * FROM Empleado WHERE Cargo = ?`, 
        [Cargo],       

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

export default appEmpleadoVendedor;