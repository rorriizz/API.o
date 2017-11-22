var express = require('express');
var router = express.Router();

var multer = require('multer');//v1.0.5
var upload = multer();//parsing multipart/form-data

var modelos = require('../models/Platillo');
var modelosRestaurante = require('../models/Restaurante');
var modelosComentario = require('../models/Comentario');
var PlatilloCtrl = require('../controllers/PlatilloCtrl');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'APIo', saludo: 'Bienvenidos' });
});

router.route('/platillos')
	.get(PlatilloCtrl.getplatillos)
	.post(upload.array(),PlatilloCtrl.addplatillo);

router.route('/platillos/:id')
	.get(PlatilloCtrl.getPlatillosById)
	.put(upload.array(),PlatilloCtrl.updatePlatillo)
	.delete(PlatilloCtrl.deletePlatillo);

router.route('/platillos/:id/comentarios')
	.get(PlatilloCtrl.getComentariosByPlatillosId)
	.post(upload.array(),PlatilloCtrl.addComentario);

router.route('/comentarios')
	.get(PlatilloCtrl.getComentarios);

router.route('/comentarios/:id')
	.get(PlatilloCtrl.getComentariosById)
	.delete(PlatilloCtrl.deleteComentario);

router.route('/restaurantes')
	.get(PlatilloCtrl.getRestaurante)
	.post(upload.array(),PlatilloCtrl.addRestaurante);

router.route('/restaurantes/:id')
	.get(PlatilloCtrl.getByRestaurante)
	.put(upload.array(),PlatilloCtrl.updateRestaurante)
	.delete(PlatilloCtrl.deleteRestaurante);

router.route('/restaurantes/:id/platillos')
	.get(PlatilloCtrl.getPlatillosByRestaurante);

module.exports = router;


