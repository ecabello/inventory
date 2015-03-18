var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup; 


var	LightBox = React.createClass({
	getDefaultProps :  function () {
		return {
			transition : 'fade'
		}
	},
	render : function () {
		return (
			<ReactCSSTransitionGroup transitionName={ this.props.transition }>
				{ this.props.show ? this.show() : null }
			</ReactCSSTransitionGroup>
		);	
	},
	show : function () {
		return (
			<div className="lightbox-container">
				<i className="fa fa-times-circle close" onClick={ this.props._onClose }></i>
				{ this.props.children }
			</div>
			);
	}
}); 
module.exports = LightBox;