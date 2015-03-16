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
var DashBoard = require('./dashboard');

var CategoryList = require('./components/Category/CategoryCollection');  
var AddCategory = require('./components/Category/AddCategory');
var UpdateCategory = require('./components/Category/UpdateCategory');

var Products = require('./components/Product/ProductCollection');
var AddProduct = require('./components/Product/AddProduct');  
var UpdateProduct = require('./components/Product/UpdateProduct');



 
 

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
  <Route handler={App} path="/" name="home">  
    <DefaultRoute handler={Home} />
    <Route name="cpanel" handler={CpanelPage} path="cpanel">
    	<DefaultRoute name="dashboard" handler={DashBoard} />
        <Route name='category' path='category'>
            <DefaultRoute handler={CategoryList} /> 
    		<Route name='add-category' path='add' handler={AddCategory} />
            <Route name='update-category' path=':id' handler={UpdateCategory} />
        </Route>    
        <Route name='product' path='product'>
            <DefaultRoute handler={Products} />
    		<Route name='add-product' path='add' handler={AddProduct} />
            <Route name='update-product' path=':id' handler={UpdateProduct} />
        </Route>    
    	<Route name='social' path='social' handler={UnderConst} />
    	<Route name='locations' path='locations' handler={UnderConst} />
    	<Route name='contact-info' path='contact-info' handler={UnderConst} />
    	<NotFoundRoute handler={UnderConst} />  
    </Route>
  </Route> 
);

$(document).ready(function () {
	Router.run(routes,function (Handler) {
	  React.render(<Handler/>, document.getElementById('app'));
	});
});




