var React = require('react');
var Navigation = require('react-router').Navigation;

var LeftMenu = React.createClass({displayName: "LeftMenu",
	mixins: [Navigation],
	render : function () {
		return (
			React.createElement("div", {className: "leftMenu"}, 
			    React.createElement("h3", null, "Control Panel"), 
			    React.createElement("ul", null, 
			    	React.createElement("li", {onClick: function()  {return this.transitionTo('cpanel');}.bind(this)}, React.createElement("i", {className: "fa fa-tachometer"}), " Dashboard"), 
			    	React.createElement("li", {onClick: function()  {return this.transitionTo('product');}.bind(this)}, React.createElement("i", {className: "fa fa-list-alt"}), " Products"), 
			    	React.createElement("li", {onClick: function()  {return this.transitionTo('contact-info');}.bind(this)}, React.createElement("i", {className: "fa fa-user"}), " Profile")
			    )
			)
			); 
	}
});

module.exports = LeftMenu;