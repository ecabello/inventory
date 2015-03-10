module.exports = {
	renderApp : function (req,res) {
		res.render('index', { mainJS : 'main'});
	}
}