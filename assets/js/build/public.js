var $ = require('jquery');
var React = require('react');
var Router = require('react-router');       
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;   
var Redirect = Router.Redirect;
var RouteHandler = Router.RouteHandler;  
  
var MainNavBar = require('./components/Topbar/MainNavBar'); 
var PublicActions = require('./components/Topbar/PublicActions');
var Home = require('./homePage');
var Login = require('./loginPage');
var UnderConst = require('./components/underConst');
         

var App = React.createClass({displayName: "App",
	mixins: [Router.State],
	render : function () {
	    return (
	    	React.createElement("div", null, 
				React.createElement(MainNavBar, {actions: PublicActions}), 
				React.createElement(RouteHandler, null)
			)	
	    );  	
	}
}); 

var routes = (
  	React.createElement(Route, {handler: App, path: "/"}, 
    	React.createElement(DefaultRoute, {handler: Home}), 
    	React.createElement(Route, {handler: Login, path: "login"}), 
    	React.createElement(NotFoundRoute, {handler: UnderConst})
 	)
);

$(document).ready(function () {
	Router.run(routes, function (Handler) {
	  React.render(React.createElement(Handler, null), document.getElementById('app'));
	});
});
