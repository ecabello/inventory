var React = require('react');

var TwitterButton = React.createClass({
	propTypes : {
		text : React.PropTypes.string,
		icon : React.PropTypes.node
	},
	getDefaultProps : function () {
		return {
			text : 'Login with Twitter',
			icon : (<i className="fa fa-twitter"></i>)
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
				<a type="button" className="button expand radius" style={tStyle}>
					{ this.props.icon }
					{ ' ' + this.props.text }
     			</a>
			);
	}	
});
module.exports = TwitterButton;