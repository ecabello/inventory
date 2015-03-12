var React = require('react');
var $ = require('jquery');

var loginState = [
		{
			class : 'hide',
			text : undefined
		},
		{
			class : 'success-text',
			text  : 'Authenticating...'
		},
		{
			class : 'alert-text',
			text : 'The password you entered is incorrect. Please try again (make sure your caps lock is off).'
		},
		{
			class : 'success-text',
			text  : 'Login success.'
		}
		];

var LoginLocal =  React.createClass({displayName: "LoginLocal",
	getInitialState :  function () {
		return { index : 0 };
	},
	render : function () {
		return (
			React.createElement("form", {style: { margin : '5px 0px'}}, 
				React.createElement("h5", {className: loginState[this.state.index].class}, loginState[this.state.index].text), 
				React.createElement("div", {className: "form-group"}, 
				    React.createElement("label", {htmlFor: "username"}, "Email address"), 
				    React.createElement("input", {type: "text", className: "form-control large", name: "username", id: "username", ref: "user", placeholder: "Enter email"})
				), 
				React.createElement("div", {className: "form-group"}, 
				    React.createElement("label", {htmlFor: "password"}, "Password"), 
				    React.createElement("input", {type: "password", className: "form-control large", name: "password", id: "password", ref: "pass", placeholder: "Password"})
				), 
				React.createElement("input", {type: "submit", className: "button right w-mid btn-login", value: "Login", onClick: this.login})
			)	
			);
	},
	login : function (e) {
		e.preventDefault();
		var username = this.refs.user.getDOMNode().value;
		var password = this.refs.pass.getDOMNode().value;
		$.ajax({
			url : '/login',
			type : 'POST',
			data : { username : username, password : password },
			beforeSend : function () {
				this.setState({ index : 1 });
			}.bind(this)
		}).done(function (data) {
			if (data.success) {
				this.setState({ index : 3 });
				location.href = location.origin;
			} else this.setState({ index : 2 });
		}.bind(this));
	}
});
module.exports = LoginLocal;

