var React = require('react');
var FaceBookButton = require('./components/facebookButton');
var TwitterButton = require('./components/twitterButton');
var LineSeparator = require('./components/lineSeparator');
var LoginLocal = require('./components/loginLocal');

var LoginPage = React.createClass({displayName: "LoginPage",
	render : function () {
		var cssT = {
			lineHeight: 1.6,
			fontFamily: 'Whitney SSm A,Whitney SSm B,Helvetica',
			color: '#202626',
			fontWeight: 100
		}
		return (
			React.createElement("div", {className: "row"}, 
				React.createElement("div", {className: "small-8 columns small-centered"}, 
					React.createElement("h1", {style: cssT}, "Login"), 
					React.createElement(TwitterButton, null), 
					React.createElement(FaceBookButton, null), 
					React.createElement(LineSeparator, {text: "or"}), 
					React.createElement(LoginLocal, null)
				)
			)
			);
	}
});
module.exports = LoginPage;