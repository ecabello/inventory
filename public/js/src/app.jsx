var $ = require('jquery'); 
var _ = require('underscore');
var React = require('react');
var Backbone = require('backbone');  
    

var TopBar = require('./topbar.js');
var AppContent = require('./appcontent.js');


var workSpace = Backbone.Router.extend({
	routes : {
		'' 			: 'index',
		'home' 		: 'changedUrl',
		'products'	: 'changedUrl',
		'grower'	: 'changedUrl',
		'contact'	: 'changedUrl',
		'*default'  : 'index'
	},
	changedUrl : function (route,params) {
		this.trigger('change','home');
	},
	index : function () {
		this.navigate('home');
	}
});
 

var App = React.createClass({
	getInitialState : function () {
        return { action : '#home' };
	},
	componentDidMount : function () {
		this.props.router.on('change',function(action) {
			console.log(window.location.hash);
			this.setState({ action : window.location.hash });
		}.bind(this))
	},
	render : function () {
	    return (
	    	<div>
		      	<TopBar name="Inventary" />
		      	<AppContent action={this.state.action} />	
		    </div>  	
	    );  	
	}
}); 


$(document).ready(function () {
    
    var routerApp = new workSpace();
    Backbone.history.start();
    
    React.render(
		<App  router={routerApp}/>,
	   	document.getElementById('app') 
	); 

});
