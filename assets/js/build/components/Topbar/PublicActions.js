var React = require('react');

var PublicActions = React.createClass({displayName: "PublicActions",
	render : function () {
		return (
			React.createElement("section", {className: "top-bar-section"}, 
			    React.createElement("ul", {className: "right"}, 
			        React.createElement("li", {className: "has-form"}, 
			          	React.createElement("a", {href: "#login"}, "Log In ", React.createElement("i", {className: "fa fa-sign-in"}))
			        )
			    )
    		)
		);    
	}
});

module.exports = PublicActions;