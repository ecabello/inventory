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
         

var App = React.createClass({
	mixins: [Router.State],
	render : function () {
	    return (
	    	<div>
				<MainNavBar actions={PublicActions}/>
				<RouteHandler />   
			</div>	
	    );  	
	}
}); 

var routes = (
  	<Route handler={App} path="/">  
    	<DefaultRoute handler={Home} />
    	<Route handler={Login} path="login" />
    	<NotFoundRoute handler={UnderConst} />
 	</Route>
);

$(document).ready(function () {
	Router.run(routes, function (Handler) {
	  React.render(<Handler/>, document.getElementById('app'));
	});
});
