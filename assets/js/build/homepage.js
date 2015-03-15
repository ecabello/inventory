var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({displayName: "Home",
	render : function () {
		return (
			React.createElement("div", {className: "small-8 columns small-centered"}, 
		    	React.createElement("h1", null, "Hello, here the best invetory system!"), 
		    	React.createElement("p", null, "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."), 
 		    	React.createElement("p", null, React.createElement("a", {href: "#cpanel"}, "Control Panel"))
		    )	
			);
	}
});
module.exports = Home;