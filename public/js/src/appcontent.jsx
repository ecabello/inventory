var React = require('react');
var HomePage = require('./homepage.js');
var Products = require('./products.js');

var AppContent = React.createClass({
	render : function () {
		switch (this.props.action) {
			case '#home':
			   var Content =  HomePage;
			break;
			case '#products':
				var Content =  Products;
			break;
			default:
				var Content =  HomePage;
			break;
		}
		return (
		    	<Content title={this.props.action}/>
 			);
	}
});
module.exports = AppContent;
