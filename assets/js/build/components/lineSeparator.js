var React = require('react');

var LineSeparator = React.createClass({displayName: "LineSeparator",
	propTypes : {
		text : React.PropTypes.string.isRequired
	},
	render : function () {
		textCss = {
			position: 'absolute',
			top: -20,
			left: '48%',
			fontSize: 20,
			backgroundColor: '#F1F1F1', 
			padding: '5px 10px',
			color: '#dddddd'
		}
		return React.createElement("div", {style: { position : 'relative'}}, 
					React.createElement("hr", null), 
					React.createElement("span", {style: textCss}, this.props.text)
				)	
	}
});
module.exports =  LineSeparator;