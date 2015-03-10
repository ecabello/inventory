var React = require('react');

var FacebookButton = React.createClass({
	propTypes : {
		text : React.PropTypes.string,
		icon : React.PropTypes.node
	},
	getDefaultProps : function () {
		return {
			text : 'Login with Facebook',
			icon : (<i className="fa fa-facebook-square"></i>)
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
				<a type="button" className="button expand radius" style={fStyle}>
					{ this.props.icon }
					{ ' ' + this.props.text }
     			</a>
			);
	}	
});
module.exports = FacebookButton;