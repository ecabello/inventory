var React = require('react');

var VerticalList = React.createClass({
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
				<ul {...this.props} style={style}>
			 		{this.props.children}  
			 	</ul>
			); 
	}
}); 
module.exports = VerticalList; 