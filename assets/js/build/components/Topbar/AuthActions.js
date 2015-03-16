var React = require('react');

var AuthActions = React.createClass({displayName: "AuthActions",
	render : function () {
		return (
			React.createElement("section", {className: "top-bar-section"}, 
			    React.createElement("ul", {className: "right"}, 
			        React.createElement("li", {className: "has-form"}, 
			          	React.createElement("a", {href: "/logout"}, "Log Out ", React.createElement("i", {className: "fa fa-sign-out"}))
			        )
			    )
    		)  
		);    
	}
});

module.exports = AuthActions;