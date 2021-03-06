var React = require('react');


var MainNavBar = React.createClass({displayName: "MainNavBar",
	render : function () {
		return (
			React.createElement("nav", {className: "top-bar", "data-topbar": true, role: "navigation"}, 
			    React.createElement("ul", {className: "title-area"}, 
			    	React.createElement("li", {className: "name"}, 
			        	React.createElement("h1", null, React.createElement("a", {href: "#"}, "Products Cloud"))
			    	), 
				    React.createElement("li", {className: "toggle-topbar menu-icon"}, React.createElement("a", {href: "#"}, React.createElement("span", null, "Menu")))
	    		), 
			     this.props.actions
			)
		);    
	}
});

module.exports = MainNavBar;