var $ = require('jquery');
var React = require('react');
var Router = require('react-router');       
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute; 
var Redirect = Router.Redirect;
var RouteHandler = Router.RouteHandler;  
  
var MainNavBar = require('./components/MainNavBar'); 
var Home = require('./homePage');
var Login = require('./loginPage');
var UnderConst = require('./components/underConst');
var CpanelPage = require('./cpanel');

var CategoryList = require('./components/CategoryBox');  
var AddCategory = require('./components/AddCategory');

var Products = require('./components/Products');
var AddProduct = require('./components/AddProduct');            



 

var App = React.createClass({
	mixins: [Router.State],
	getInitialState : function () {
        return { action : '#home' };     
	},
	componentDidMount : function () {
		
	},
	render : function () {
	    return (
	    	<div onClick={this.onClick}>
				<MainNavBar />
				<RouteHandler />   
			</div>	
	    );  	
	},
	onClick : function () {
		alert('OK');   
	}
}); 

var routes = (
  <Route handler={App} path="/"> 
    <DefaultRoute handler={Home} />
    <Route handler={Login} path="login" />
    <Route handler={UnderConst} path="signup" />
    <Route handler={CpanelPage} path="cpanel">
    	<Route name='category' path='category' handler={CategoryList} />
    		<Route name='add-category' path='category/add' handler={AddCategory} />
    	<Route name='product' path='product' handler={Products} />
    		<Route name='add-product' path='product/add' handler={AddProduct} />
    	<Route name='social' path='social' handler={UnderConst} />
    	<Route name='locations' path='locations' handler={UnderConst} />
    	<Route name='contact-info' path='contact-info' handler={UnderConst} />
    	<NotFoundRoute handler={UnderConst}/>  
    </Route>
  </Route>
);

$(document).ready(function () {
	Router.run(routes, function (Handler) {
	  React.render(<Handler/>, document.getElementById('app'));
	});
});




