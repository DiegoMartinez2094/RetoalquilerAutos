import { Router } from "express"; 
import conexion  from "../config/conexion.js";
const appAlquiler = Router(); 



appAlquiler.post("/",  (req, res) => { 
    conexion.query(
        /*sql*/ `INSERT INTO Alquiler SET ?`,
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

appAlquiler.get("/", (req, res) => {
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


appAlquiler.get("/:ID_Alquiler", (req, res) => {
    const ID_Alquiler = req.params.ID_Alquiler; 
    conexion.query(
        /*sql*/ `SELECT * FROM Alquiler WHERE ID_Alquiler = ?`, 
        [ID_Alquiler],       

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

appAlquiler.delete('/:id', (req, res)=>{
    conexion.query(
        `DELETE FROM Alquiler WHERE ?`,
        req.params,
        (err, data, fils)=>{
            console.log(err);
            res.send(data);
        }
    )
})

appAlquiler.put('/:id', (req, res)=>{
    conexion.query(
        `UPDATE Alquiler SET ? WHERE id = ?`,
        [req.body, req.params.id],
        (err, data, fils) =>{
            console.log(err);
            res.send(data);
        }
    )
})
export default appAlquiler;