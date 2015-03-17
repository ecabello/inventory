var React = require('react');

var	LightBox = React.createClass({displayName: "LightBox",
	render : function () {
		return this.props.show ? this.show() : React.createElement("span", null);
	},
	show : function () {
		return (
			React.createElement("div", {className: "lightbox-container"}, 
				React.createElement("i", {className: "fa fa-times-circle close", onClick:  this.props._onClose}), 
				 this.props.children
			)
			);
	}
}); 
module.exports = LightBox;