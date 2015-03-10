var React = require('react');

var VerticalItem = React.createClass({
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
				<li {...this.props} style={style}>
			 		{this.props.children}
			 	</li>
			);
	}
}); 
module.exports = VerticalItem;