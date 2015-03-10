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

var ButtonGroup = React.createClass({
	render : function () {
		var children = this.props.children.map(function (child,index) {
			return (
				<li key={index} style={style.li}>{child}</li>
				);
		});
		return (
			<ul style={style.ul} className='custom-button-group'>
				{children}
			</ul>
			);
			
	}
});
module.exports = ButtonGroup;