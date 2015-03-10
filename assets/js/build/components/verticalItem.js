var React = require('react');

var VerticalItem = React.createClass({displayName: "VerticalItem",
	getDefaultProps : function () {
		return {
		}
	},
	render : function () {
		var style = {
			display : 'inline',
			margin : '0px 5px',
		};
		return (
				React.createElement("li", React.__spread({},  this.props, {style: style}), 
			 		this.props.children
			 	)
			);
	}
}); 
module.exports = VerticalItem;