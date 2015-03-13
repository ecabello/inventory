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

var CategoryList = require('./components/CategoryBox');  
var AddCategory = require('./components/AddCategory');

var Products = require('./components/Products');
var AddProduct = require('./components/AddProduct');            


 
 

var App = React.createClass({ 
	mixins: [Router.State],
	render : function () {
	    return (
	    	<div>
				<MainNavBar actions={AuthActions}/>
				<RouteHandler />   
			</div>	
	    );  	
	}
}); 

var routes = (
  <Route handler={App} path="/">  
    <DefaultRoute handler={Home} />
    <Route handler={CpanelPage} path="cpanel" name="cpanel">
    	<Route name='category' path='category' handler={CategoryList} />
    		<Route name='add-category' path='category/add' handler={AddCategory} />
    	<Route name='product' path='product' handler={Products} />
    		<Route name='add-product' path='product/add' handler={AddProduct} />
    	<Route name='social' path='social' handler={UnderConst} />
    	<Route name='locations' path='locations' handler={UnderConst} />
    	<Route name='contact-info' path='contact-info' handler={UnderConst} />
    	<NotFoundRoute handler={UnderConst} />  
    </Route>
  </Route> 
);

$(document).ready(function () {
	Router.run(routes, function (Handler) {
	  React.render(<Handler/>, document.getElementById('app'));
	});
});




