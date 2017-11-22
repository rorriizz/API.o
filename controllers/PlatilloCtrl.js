var mongoose = require('mongoose');
var Platillo = mongoose.model('Platillo');
var Restaurante = mongoose.model('Restaurante');
var Comentario = mongoose.model('Comentario');

//POST restaurante
exports.addRestaurante=function(req,res,next){
	console.log('POST/restaurantes');
	var restaurante = new Restaurante({
		nombreR : req.body.nombreR,
		telefono: req.body.telefono,
		direccion : req.body.direccion,
		lat: req.body.lat,
		lng: req.body.lng,
		horario : req.body.horario,
		servicioDomicilio: req.body.servicioDomicilio
	});
	restaurante.save(function(err,platillo){
		if(err) return res.send(500,err.message);
		res.status(200).jsonp(restaurante);
	});
};
//GET restaurante
exports.getRestaurante=function(req, res, next){
  	console.log('GET/restaurantes');
  	console.log(req.query.categorias);
  	console.log(req.query.precio);
  	Restaurante.find(req.query,function(err,platillos){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('GET/restaurantes');
  			res.status(200).jsonp(platillos);
  		}		
  	});
};
//POST restaurante
exports.addplatillo=function(req,res,next){
	console.log('POST/platillos');
	var platillo = new Platillo({
		nombreP :req.body.nombreP,
		precio: req.body.precio,
		categoria: req.body.categoria,
		restaurante: req.body.restaurante
	});
	platillo.save(function(err,platillo){
		if(err) return res.send(500,err.message);
		res.status(200).jsonp(platillo);
	});
};
//Get platillos
exports.getplatillos=function(req, res, next){
  console.log('GET/platillos');
  	console.log(req.query.categorias);
  	console.log(req.query.precio);
  	console.log(req.query);
  	Platillo.find(req.query,function(err,platillos){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('GET/platillos');
  			Restaurante.populate(platillos, {path: "restaurante"},function(err, platillos){
        	res.status(200).send(platillos);
        	}); 
  		}		
  	});
};
//Get Platillos by id
exports.getPlatillosById=function(req, res, next){
	console.log('GET/platillos/:id');	
	console.log(req.params.id);
	Platillo.find({_id: req.params.id},function(err,platillos){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('GET/platillos');
  			Restaurante.populate(platillos, {path: "restaurante"},function(err, platillos){
        	res.status(200).jsonp(platillos);
        	}); 
  		}
  	});
};
//PUT platillos/:id
exports.updatePlatillo=function(req, res, next){
	console.log('PUT/platillos/:id');
	console.log(req.params.id);
	Platillo.update({_id: req.params.id},
		{$set:{	nombreP:req.body.nombreP, 
				precio:req.body.precio,
				categoria:req.body.categoria}},function(err,platillos){
		if(err){
			res.send(500,err.message);
			console.log('error');
		}else{
			console.log('correcto');
			Platillo.find({_id: req.params.id},function(err,platillos){
	  			if(err){
		  			res.send(500, err.message);
		  		}else{
		  			console.log('GET/platillos');
		  			Restaurante.populate(platillos, {path: "autor"},function(err, platillos){
		        	res.status(200).jsonp(platillos);
		        	}); 					
	  			}		
			});
		}
	});
};
//DELETE platillo/:id
exports.deletePlatillo=function(req, res, next){
	console.log('DELETE/platillos/:id');
	console.log(req.params.id);
	Platillo.remove({_id: req.params.id},function(err,platillos){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('DELETE/platillos');
  			Restaurante.populate(platillos, {path: "restaurante"},function(err, platillos){
        	res.status(200).jsonp(platillos);
        	}); 
  		}		
  	});
};
//GET /restaurantes/:id
exports.getByRestaurante=function(req,res,next){
	console.log('GET/restaurantes/:id');
	console.log(req.params.id);
	Restaurante.find({_id: req.params.id},function(err,platillos){  		
  		if(err){
  			res.send(500, err.message);
  		}else{
			console.log('GET/restaurantes/:id');
  			res.status(200).jsonp(platillos);
  		}
  	});
};
//PUT /restaurantes/:nombre
exports.updateRestaurante=function(req, res, next){
	console.log('PUT/restaurantes/:id');
	console.log(req.body);
		Restaurante.update({_id: req.params.id},
		{$set:{	nombreR : req.body.nombreR,
				telefono: req.body.telefono,
				direccion : req.body.direccion,
				lat: req.body.lat,
				lng: req.body.lng,
				horario : req.body.horario,
				servicioDomicilio: req.body.servicioDomicilio}},function(err,platillos){
		if(err){
			res.send(500,err.message);
			console.log('error');
		}else{
			console.log('correcto');
			Restaurante.find({_id: req.params.id},function(err,platillos){
	  			if(err){
		  			res.send(500, err.message);
		  		}else{
		  			console.log('GET/platillos');
		  			Restaurante.populate(platillos, {path: "restaurante"},function(err, platillos){
		        	res.status(200).jsonp(platillos);
		        	}); 					
	  			}		
			});
		}
	});
};
//DELETE /restaurantes/:id
exports.deleteRestaurante = function(req,res,next){
	console.log('DELETE/restaurantes/:id');
	console.log(req.params.id);
	Restaurante.find({_id: req.params.id},function(err,platillos){
		if(err){
			res.send(500,err.message);
		}else{
			console.log(req.params.id);
			Platillo.remove({restaurante: req.params.id},function(err,platillos){
  				if(err){
  					res.send(500, err.message);
  				}else{
  					console.log('DELETE/restaurantes/:id');
  					Restaurante.remove({_id: req.params.id},function(err,platillos){
						if(err){
							res.send(500,err.message);
						}else{
							console.log('DELETE/restaurantes/:id');
							res.status(200).jsonp(platillos);
						}
					});
  				}		
  			});
		}
	});
};
//GET /restaurantes/:id/platillos
exports.getPlatillosByRestaurante=function(req,res,next){
	console.log('GET/restaurantes/:id/platillos');
	console.log(req.params.id);
	Restaurante.findById({_id: req.params.id},function(err,platillos){
		if(err){
			res.send(500, err.message);
		}else{
			Platillo.find({restaurante:req.params.id}, function (err, platillo) {
				if(err){
					res.send(500, err.message);
				}else{
					Restaurante.platillos=platillo;
					return res.status(200).jsonp(platillo);
				}
			});
		}
	});
};
//POST comentario
exports.addComentario=function(req,res,next){
	console.log('POST/platillos/:id/comentarios');
	var comentario = new Comentario({
		critica :req.body.critica,
		platillo: req.body.platillo
	});
	comentario.save(function(err,platillo){
		if(err) return res.send(500,err.message);
		res.status(200).jsonp(platillo);
	});
};
//GET /platillos/:id/comentarios
exports.getComentariosByPlatillosId=function(req,res,next){
	console.log('GET/platillos/:id/comentarios');
	console.log(req.params.id);
	Platillo.findById({_id: req.params.id},function(err,platillos){
		if(err){
			res.send(500, err.message);
		}else{
			Comentario.find({platillo:req.params.id}, function (err, comentario) {
				if(err){
					res.send(500, err.message);
				}else{
					Platillo.platillos=comentario;
					return res.status(200).jsonp(comentario);
				}
			});
		}
	});
};
//GET comentarios
exports.getComentarios=function(req,res,next){
	console.log('GET/comentarios');	
	console.log(req.params.id);
	Comentario.find(function(err,comentarios){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('GET/comentarios');
  			//res.status(200).jsonp(comentarios);
  			Comentario.populate(comentarios, {path: "platillo"},function(err, comentarios){
        	res.status(200).jsonp(comentarios);
        	}); 
  		}		
  	});
};
//DELETE comentarios/:id
exports.deleteComentario=function(req, res, next){
	console.log('DELETE/comentarios/:id');
	console.log(req.params.id);
	Comentario.remove({_id: req.params.id},function(err,comentarios){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('DELETE/comentarios');
  			Comentario.populate(comentarios, {path: "platillo"},function(err, comentarios){
        	res.status(200).jsonp(comentarios);
        	}); 
  		}		
  	});
};
//GET comentarios por platillo
exports.getComentariosById=function(req,res,next){
	console.log('GET/comentarios/:id');	
	console.log(req.params.id);
	Comentario.find({_id: req.params.id},function(err,platillos){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('GET/platillos');
  			Comentario.populate(platillos, {path: "platillo"},function(err, platillos){
        	res.status(200).jsonp(platillos);
        	}); 
  		}
  	});
};
//Get Platillos by categoría
exports.getPlatillosByCategoria=function(req, res, next){
	console.log('GET/platillosC/:categoria');	
	console.log(req.params.categoria);
	console.log(Platillo.categoria);
	Platillo.find({categoria: req.params.categoria},function(err,platillos){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('GET/platillos');
  			Restaurante.populate(platillos, {path: "restaurante"},function(err, platillos){
        	res.status(200).jsonp(platillos);
        	}); 
  		}
  	});
};