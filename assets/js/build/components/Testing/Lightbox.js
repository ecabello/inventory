var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup; 


var	LightBox = React.createClass({displayName: "LightBox",
	getDefaultProps :  function () {
		return {
			transition : 'fade'
		}
	},
	render : function () {
		return (
			React.createElement(ReactCSSTransitionGroup, {transitionName:  this.props.transition}, 
				 this.props.show ? this.show() : null
			)
		);	
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