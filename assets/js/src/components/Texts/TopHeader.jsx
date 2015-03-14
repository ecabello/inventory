var React = require('react');

var TopHeader = React.createClass({
	render : function () {
		return <h1 className="top-header-text" style={this.props.style}>{this.props.text}</h1>	
	}
}); 
module.exports = TopHeader;