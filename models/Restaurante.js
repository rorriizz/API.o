var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var restauranteSchema = new Schema({
	nombreR: {type:String},
	direccion: {type:String},
	horario: {type:String},
	servicioDomicilio: {type:String},
	platillo:{type: Schema.ObjectId, ref:"Platillo", require:true}
});

module.exports = mongoose.model('Restaurante',restauranteSchema);