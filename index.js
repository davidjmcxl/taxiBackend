require('dotenv').config();
const express = require('express');
const cors = require('cors');

const {dbConnection} = require('./database/config');
const Participante = require('./models/registro');

//Crear el servidor de express
const app = express();

//Configurar CORS
app.use(cors());



//Lectura y parseo del body
app.use(express.json());

//Base de datos
dbConnection();

app.post("/inscription",async(req, res)=>{
    const {correo,nombre,identificacion}=req.body;
    try {
        const existeEmail = await Participante.findOne({correo});
        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya esta registrado'
            });
        }
        const participante = new Participante(req.body);
      
        await participante.save();
      

        res.json({
            ok: true,
            msg: 'Participante regitrado correctamente',
            participante,
            
        });   
    } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Error inesperado'
            });
    }


})
app.listen(process.env.PORT||4001, () => {
    console.log(`Server running on port 3000`);
    })
//rutas
