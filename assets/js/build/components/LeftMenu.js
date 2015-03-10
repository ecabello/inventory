var React = require('react');
var Navigation = require('react-router').Navigation;

var LeftMenu = React.createClass({displayName: "LeftMenu",
	mixins: [Navigation],
	render : function () {
		return (
			React.createElement("div", {className: "leftMenu"}, 
			    React.createElement("h3", null, "Control panel"), 
			    React.createElement("ul", null, 
			    	React.createElement("li", {onClick: function()  {return this.transitionTo('category');}.bind(this)}, "Categorias"), 
			    	React.createElement("li", {onClick: function()  {return this.transitionTo('product');}.bind(this)}, "Productos"), 
			    	React.createElement("li", {onClick: function()  {return this.transitionTo('social');}.bind(this)}, "Social"), 
			    	React.createElement("li", {onClick: function()  {return this.transitionTo('locations');}.bind(this)}, "Locations"), 
			    	React.createElement("li", {onClick: function()  {return this.transitionTo('contact-info');}.bind(this)}, "Contact info")
			    )
			)
			);
	}
});

module.exports = LeftMenu;