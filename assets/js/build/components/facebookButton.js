var React = require('react');

var FacebookButton = React.createClass({displayName: "FacebookButton",
	propTypes : {
		text : React.PropTypes.string,
		icon : React.PropTypes.node
	},
	getDefaultProps : function () {
		return {
			text : 'Login with Facebook',
			icon : (React.createElement("i", {className: "fa fa-facebook-square"}))
		}
	},
	render : function () {
		var fStyle = {
			backgroundColor: '#4379b0',
			color: 'white',
			fontSize: 25,
			margin : '10px 0px !important'
		}
		return (
				React.createElement("a", {type: "button", className: "button expand radius", style: fStyle}, 
					 this.props.icon, 
					 ' ' + this.props.text
     			)
			);
	}	
});
module.exports = FacebookButton;