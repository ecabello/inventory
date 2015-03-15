module.exports = {
	renderApp : function (req,res) {
		var jsfile = !req.user ? 'public' : 'auth';
		res.render('index', { mainJS : jsfile });
	}
}
