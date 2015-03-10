var React = require('react');
var LeftMenu = require('./components/LeftMenu');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;


var cpanel = React.createClass({displayName: "cpanel",
	render : function () {
		return (
			React.createElement("div", {className: "row content-container"}, 
				React.createElement("div", {className: "small-3 columns menu-container"}, 
					React.createElement(LeftMenu, null)
				), 
				React.createElement("div", {className: "small-9 columns sub-content-container"}, 
					React.createElement(RouteHandler, null)
				)	
			)
			);
	}
});
module.exports = cpanel;
