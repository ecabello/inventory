var React = require('react');
var HomePage = require('./homepage.js');
var Products = require('./products.js');

var AppContent = React.createClass({displayName: 'AppContent',
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
		    	React.createElement(Content, {title: this.props.action})
 			);
	}
});
module.exports = AppContent;
