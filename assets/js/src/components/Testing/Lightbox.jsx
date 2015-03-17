var React = require('react');

var	LightBox = React.createClass({
	render : function () {
		return this.props.show ? this.show() : <span></span>;
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