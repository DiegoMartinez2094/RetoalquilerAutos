import { Router } from "express"; //importamos la libreria ROUTER de express 
import conexion  from "../config/conexion.js";
const appCliente = Router(); /** guardamos la configuracion Router() en la constante appUsuario */
// import verificaToken from "../tokens/valideToken.js";


appCliente.post("/",  (req, res) => { //el appValidate es el middleware que importamos anteriormente
    conexion.query(
        /*sql*/ `INSERT INTO Cliente SET ?`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            console.table(data);
            console.log(fils);
            data.affectedRows+=200;
            let result = req.body;
            result.id= data.insertId;
            res.status(data.affectedRows).send(result);
        }
    );
})

appCliente.get("/", (req, res) => {
    conexion.query(
        /*sql*/ `SELECT * FROM Cliente`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            console.log(data);
            console.log(fils);
            res.send(data)
        }
    );
})

appCliente.get("/:id", (req, res) => {
    const clientId = req.params.id; // Obtenemos el ID del cliente de los parámetros de la URL
    conexion.query(
        /*sql*/ `SELECT * FROM Cliente WHERE id = ?`, // Utilizamos un placeholder '?' para el valor del ID
        [clientId],       
// El valor del ID se proporciona como un arreglo, que se reemplazará en el placeholder
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

appCliente.delete('/:id', (req, res)=>{
    conexion.query(
        `DELETE FROM Cliente WHERE ?`,
        req.params,
        (err, data, fils)=>{
            console.log(err);
            res.send(data);
        }
    )
})

appCliente.put('/:id', (req, res)=>{
    conexion.query(
        `UPDATE Cliente SET ? WHERE id = ?`,
        [req.body, req.params.id],
        (err, data, fils) =>{
            console.log(err);
            res.send(data);
        }
    )
})
export default appCliente;