const mongoose = require('mongoose');
const dbConnection = async()=>{
    try{
        mongoose.set("strictQuery", false)
        await mongoose.connect("mongodb+srv://prueba:Fe8X5V9BePPDJIlG@cluster0.klrb50m.mongodb.net/taxis", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        });
        console.log('DB Online');
    }catch(error){
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }
}

module.exports = {
    dbConnection
}