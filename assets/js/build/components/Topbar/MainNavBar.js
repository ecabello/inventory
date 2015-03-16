var React = require('react');


var MainNavBar = React.createClass({displayName: "MainNavBar",
	render : function () {
		var Actions = this.props.actions;
		return (
			React.createElement("nav", {className: "top-bar", "data-topbar": true, role: "navigation"}, 
			    React.createElement("ul", {className: "title-area"}, 
			    	React.createElement("li", {className: "name"}, 
			        	React.createElement("h1", null, React.createElement("a", {href: "#"}, "Products Cloud ", React.createElement("i", {className: "fa fa-cloud"})))
			    	), 
				    React.createElement("li", {className: "toggle-topbar menu-icon"}, React.createElement("a", {href: "#"}, React.createElement("span", null, "Menu")))
	    		), 
			    React.createElement(Actions, null)
			)
		);    
	}
});

module.exports = MainNavBar;