const {Schema,model} = require('mongoose');

const RegistroSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
   
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio']
    },
  
    identificacion: {
        type: String
    }
});


RegistroSchema.method('toJSON',function(){
    
    const {__v,...object}=this.toObject();
    
    return object;
})

module.exports = model('Participante', RegistroSchema);
