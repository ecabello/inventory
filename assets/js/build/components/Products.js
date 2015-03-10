var React = require('react');
var Actions = require('./actions.js');
var Router = require('react-router');
var Link = Router.Link;

var Products = React.createClass({displayName: "Products",
	render : function () {
		return (
			React.createElement("div", {className: "small-12 columns"}, 
				React.createElement("h1", null, "Products"), 
				React.createElement(Link, {className: "btn-action edit", to: "add-product"}, React.createElement("i", {className: "fa fa-plus"}), " New Product"), 
				React.createElement("br", null), React.createElement("br", null), 
				React.createElement("table", {className: "table table-condensed"}, 
			      React.createElement("thead", null, 
			        React.createElement("tr", null, 
			          React.createElement("th", null, "#"), 
			          React.createElement("th", null, "Product Name"), 
			          React.createElement("th", null, "Product Description"), 
			          React.createElement("th", null, "Price"), 
			          React.createElement("th", null, "Unit"), 
			          React.createElement("th", null, "Images"), 
			          React.createElement("th", null, "Actions")
			        )
			      ), 
			      React.createElement("tbody", null, 
			        React.createElement("tr", null, 
			          React.createElement("th", null, "1"), 
			          React.createElement("td", null, "Tomates"), 
			          React.createElement("td", null, "bla bla bla"), 
			          React.createElement("td", null, "1.4"), 
			          React.createElement("td", null, "Kgs"), 
			          React.createElement("td", null, "Yes"), 
			          React.createElement("td", null, React.createElement(Actions, null))
			        ), 
			        React.createElement("tr", null, 
			          React.createElement("th", null, "2"), 
			          React.createElement("td", null, "Pepinos"), 
			          React.createElement("td", null, "bla bla bla"), 
			          React.createElement("td", null, "2.8"), 
			          React.createElement("td", null, "Lbs"), 
			          React.createElement("td", null, "No"), 
			          React.createElement("td", null, React.createElement(Actions, null))
			        )
			      )
			    )
			)	
			);
	}
});
module.exports = Products;