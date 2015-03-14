var React = require('react');

var LineSeparator = React.createClass({
	propTypes : {
		text : React.PropTypes.string.isRequired
	},
	render : function () {
		textCss = {
			position: 'absolute',
			top: -20,
			left: '48%',
			fontSize: 20,
			backgroundColor: 'white', 
			padding: '5px 10px',
			color: '#dddddd'
		}
		return <div style={{ position : 'relative'}}>
					<hr />
					<span style={textCss}>{this.props.text}</span>
				</div>	
	}
});
module.exports =  LineSeparator;