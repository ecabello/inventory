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
var UpdateCategory = require('./components/Category/UpdateCategory');

var Products = require('./components/Product/ProductCollection');
var AddProduct = require('./components/Product/AddProduct');  
var UpdateProduct = require('./components/Product/UpdateProduct');



 
 

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
  React.createElement(Route, {handler: App, path: "/", name: "home"}, 
    React.createElement(DefaultRoute, {handler: Home}), 
    React.createElement(Route, {name: "cpanel", handler: CpanelPage, path: "cpanel"}, 
    	React.createElement(Route, {name: "category", path: "category"}, 
            React.createElement(DefaultRoute, {handler: CategoryList}), 
    		React.createElement(Route, {name: "add-category", path: "add", handler: AddCategory}), 
            React.createElement(Route, {name: "update-category", path: ":id", handler: UpdateCategory})
        ), 
        React.createElement(Route, {name: "product", path: "product"}, 
            React.createElement(DefaultRoute, {handler: Products}), 
    		React.createElement(Route, {name: "add-product", path: "add", handler: AddProduct}), 
            React.createElement(Route, {name: "update-product", path: ":id", handler: UpdateProduct})
        ), 
    	React.createElement(Route, {name: "social", path: "social", handler: UnderConst}), 
    	React.createElement(Route, {name: "locations", path: "locations", handler: UnderConst}), 
    	React.createElement(Route, {name: "contact-info", path: "contact-info", handler: UnderConst}), 
    	React.createElement(NotFoundRoute, {handler: UnderConst})
    )
  ) 
);

$(document).ready(function () {
	Router.run(routes,function (Handler) {
	  React.render(React.createElement(Handler, null), document.getElementById('app'));
	});
});




