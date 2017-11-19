var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var platilloSchema = new Schema({
	nombreP: {type:String},
	precio: {type:Number},
	categoria: {type: String},
	restaurante: {type: Schema.ObjectId, ref:"Restaurante", require:true},
	comentario: {type: Schema.ObjectId, ref:"Comentario", require:true}
});

module.exports = mongoose.model('Platillo',platilloSchema);