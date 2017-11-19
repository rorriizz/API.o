var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var restauranteSchema = new Schema({
	nombreR: {type:String},
	telefono: {type: Number},
	direccion: {type:String}, //{type: [Number], required: true}, // [Long, Lat]
	lat: {type: Number},
	lng: {type: Number},
	horario: {type:String},
	servicioDomicilio: {type:String},
	platillo:{type: Schema.ObjectId, ref:"Platillo", require:true}
});

module.exports = mongoose.model('Restaurante',restauranteSchema);