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
			    React.createElement("section", {className: "top-bar-section"}, 
			        React.createElement("ul", {className: "right"}, 
			            React.createElement("li", {className: "has-form"}, 
			            	React.createElement("a", {className: "button btn-topbar", href: "#login"}, "Login")
			            )
			        )
    			)
			)
		);    
	}
});

module.exports = MainNavBar;