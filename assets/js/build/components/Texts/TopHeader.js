var React = require('react');

var TopHeader = React.createClass({displayName: "TopHeader",
	render : function () {
		return React.createElement("h1", {className: "top-header-text", style: this.props.style}, this.props.text)	
	}
}); 
module.exports = TopHeader;