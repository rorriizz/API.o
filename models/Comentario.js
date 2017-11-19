var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var comentarioSchema = new Schema({
	critica: {type:String},
	platillo:{type: Schema.ObjectId, ref:"Platillo", require:true}
});

module.exports = mongoose.model('Comentario',comentarioSchema);