var React = require('react');
var Navigation = require('react-router').Navigation;
var ButtonGroup = require('./ButtonGroup.js');

var Actions = React.createClass({displayName: "Actions",
	mixins : [Navigation],
	render : function () {
		return (
			React.createElement("div", {className: "row"}, 
			    React.createElement(ButtonGroup, null, 
					React.createElement("a", {className: "btn-action remove", onClick: function()   {return this.props.removeCb(this.props.id);}.bind(this)}, React.createElement("i", {className: "fa fa-times"}), " remove"), 
					React.createElement("a", {className: "btn-action edit", onClick: function()   {return this.transitionTo('update-category', {id: this.props.id});}.bind(this)}, React.createElement("i", {className: "fa fa-pencil-square-o"}), " edit")		
				)
			)
			);
	}
});
module.exports = Actions; 