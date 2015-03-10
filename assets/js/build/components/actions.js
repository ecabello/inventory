var React = require('react');
var ButtonGroup = require('./ButtonGroup.js');

var Actions = React.createClass({displayName: "Actions",
	render : function () {
		return (
			React.createElement("div", {className: "row"}, 
				React.createElement(ButtonGroup, null, 
					React.createElement("a", {className: "btn-action remove", href: "#"}, React.createElement("i", {className: "fa fa-times"}), " remove"), 
					React.createElement("a", {className: "btn-action edit", href: "#"}, React.createElement("i", {className: "fa fa-pencil-square-o"}), " edit")		
				)
			)
			);
	}
});
module.exports = Actions; 