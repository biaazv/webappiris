module.exports = function(application){
	application.get('/cadastro', function(req, res){
		application.app.controllers.cadastro.cadastro(application, req, res);
	});

	application.get('/acessar', function(req, res){
		application.app.controllers.cadastro.acessar(application, req, res);
	});

	application.get('/sobre', function(req, res){
		application.app.controllers.cadastro.sobre(application, req, res);
	});
	
	application.get('/como-usar', function(req, res){
		application.app.controllers.cadastro.comousar(application, req, res);
	});

	application.get('/restaurante1', function(req, res){
		application.app.controllers.cadastro.restaurante1(application, req, res);
	});

	application.get('/restaurante2', function(req, res){
		application.app.controllers.cadastro.restaurante2(application, req, res);
	});
	application.get('/restaurante3', function(req, res){
		application.app.controllers.cadastro.restaurante3(application, req, res);
	});

	application.post('/cadastrar', function(req, res){
		application.app.controllers.cadastro.cadastrar(application, req, res);
	});
}