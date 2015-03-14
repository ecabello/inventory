var $ = require('jquery');
var React = require('react');
var Router = require('react-router');       
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute; 
var Redirect = Router.Redirect;
var RouteHandler = Router.RouteHandler;  
  
var MainNavBar = require('./components/Topbar/MainNavBar');
var AuthActions = require('./components/Topbar/AuthActions');

var Home = require('./homePage');
var UnderConst = require('./components/underConst');
var CpanelPage = require('./cpanel');

var CategoryList = require('./components/Category/CategoryCollection');  
var AddCategory = require('./components/Category/AddCategory');

var Products = require('./components/Products');
var AddProduct = require('./components/AddProduct');            


 
 

var App = React.createClass({displayName: "App", 
	mixins: [Router.State],
	render : function () {
	    return (
	    	React.createElement("div", null, 
				React.createElement(MainNavBar, {actions: AuthActions}), 
				React.createElement(RouteHandler, null)
			)	
	    );  	
	}
}); 

var routes = (
  React.createElement(Route, {handler: App, path: "/"}, 
    React.createElement(DefaultRoute, {handler: Home}), 
    React.createElement(Route, {handler: CpanelPage, path: "cpanel", name: "cpanel"}, 
    	React.createElement(Route, {name: "category", path: "category", handler: CategoryList}), 
    		React.createElement(Route, {name: "add-category", path: "category/add", handler: AddCategory}), 
        React.createElement(Route, {name: "product", path: "product", handler: Products}), 
    		React.createElement(Route, {name: "add-product", path: "product/add", handler: AddProduct}), 
    	React.createElement(Route, {name: "social", path: "social", handler: UnderConst}), 
    	React.createElement(Route, {name: "locations", path: "locations", handler: UnderConst}), 
    	React.createElement(Route, {name: "contact-info", path: "contact-info", handler: UnderConst}), 
    	React.createElement(NotFoundRoute, {handler: UnderConst})
    )
  ) 
);

$(document).ready(function () {
	Router.run(routes, function (Handler) {
	  React.render(React.createElement(Handler, null), document.getElementById('app'));
	});
});




