var React = require('react');

var LoginLocal =  React.createClass({displayName: "LoginLocal",
	render : function () {
		return (
			React.createElement("form", {style: { margin : '5px 0px'}}, 
				React.createElement("div", {className: "form-group"}, 
				    React.createElement("label", {htmlFor: "exampleInputEmail1"}, "Email address"), 
				    React.createElement("input", {type: "email", className: "form-control large", id: "exampleInputEmail1", placeholder: "Enter email"})
				), 
				React.createElement("div", {className: "form-group"}, 
				    React.createElement("label", {htmlFor: "exampleInputPassword1"}, "Password"), 
				    React.createElement("input", {type: "password", className: "form-control large", id: "exampleInputPassword1", placeholder: "Password"})
				), 
				React.createElement("input", {type: "submit", className: "button right w-mid btn-login", value: "Login"})
			)	
			);
	}
});
module.exports = LoginLocal;

