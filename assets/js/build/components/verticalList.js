var React = require('react');

var VerticalList = React.createClass({displayName: "VerticalList",
	getDefaultProps : function () {
		return {
		}
	},
	render : function () {
		var style = {
			listStyle : 'none',
			margin : 0,
		};
		return (
				React.createElement("ul", React.__spread({},  this.props, {style: style}), 
			 		this.props.children
			 	)
			); 
	}
}); 
module.exports = VerticalList; 