var React = require('react');

var style = {
	ul : {
		listStyle : 'none',
		margin : 0,
		padding : 0
	},
	li : {
		display : 'inline'
	}
}

var ButtonGroup = React.createClass({displayName: "ButtonGroup",
	render : function () {
		var children = this.props.children.map(function (child,index) {
			return (
				React.createElement("li", {key: index, style: style.li}, child)
				);
		});
		return (
			React.createElement("ul", {style: style.ul, className: "custom-button-group"}, 
				children
			)
			);
			
	}
});
module.exports = ButtonGroup;