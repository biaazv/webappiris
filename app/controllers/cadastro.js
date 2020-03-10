module.exports.cadastro = function (application, req, res){
	res.render('cadastro', {validacao: {}, dadosForm: {}});
}

module.exports.acessar = function (application, req, res){
	res.render('acessar', {validacao: {}, dadosForm: {}});
}


module.exports.sobre= function (application, req, res){
	res.render('sobre', {validacao: {}, dadosForm: {}});
}

module.exports.comousar= function (application, req, res){
	res.render('como-usar', {validacao: {}, dadosForm: {}});
}
module.exports.restaurante1= function (application, req, res){
	res.render('restaurante1', {validacao: {}, dadosForm: {}});
}

module.exports.restaurante2= function (application, req, res){
	res.render('restaurante2', {validacao: {}, dadosForm: {}});
}

module.exports.restaurante3= function (application, req, res){
	res.render('restaurante3', {validacao: {}, dadosForm: {}});
}

module.exports.cadastrar = function(application, req, res){

	var dadosForm = req.body;

	req.assert('nome', 'Nome não pode ser vazio').notEmpty();
	req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
	req.assert('senha', 'Senha não pode ser vazio').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render('cadastro', {validacao: erros, dadosForm: dadosForm});
		return;
	}

	var connection = application.config.dbConnection;
	var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
	var JogoDAO = new application.app.models.JogoDAO(connection);

	UsuariosDAO.inserirUsuario(dadosForm);
	JogoDAO.gerarParametros(dadosForm.usuario);
	//geração dos parametros

	res.send('Cadastro efetuado, retornar a home');
}