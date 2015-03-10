var React = require('react');

var TwitterButton = React.createClass({displayName: "TwitterButton",
	propTypes : {
		text : React.PropTypes.string,
		icon : React.PropTypes.node
	},
	getDefaultProps : function () {
		return {
			text : 'Login with Twitter',
			icon : (React.createElement("i", {className: "fa fa-twitter"}))
		}
	},
	render : function () {
		var tStyle = {
			backgroundColor: '#00aced',
			color: 'white',
			fontSize: 25,
			margin : '10px 0px !important'
		}
		return (
				React.createElement("a", {type: "button", className: "button expand radius", style: tStyle}, 
					 this.props.icon, 
					 ' ' + this.props.text
     			)
			);
	}	
});
module.exports = TwitterButton;