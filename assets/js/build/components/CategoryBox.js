var React = require('react');
var Actions = require('./actions.js');
var Router = require('react-router');
var Link = Router.Link;

var CategoryBox = React.createClass({displayName: "CategoryBox",
	render : function () {
		return (
			React.createElement("div", {className: "small-12 columns"}, 
				React.createElement("h1", null, "Categories"), 
				React.createElement(Link, {className: "btn-action edit", to: "add-category"}, React.createElement("i", {className: "fa fa-plus"}), " New Category"), 
				React.createElement("br", null), React.createElement("br", null), 
				React.createElement("table", {className: "table table-condensed"}, 
			      React.createElement("thead", null, 
			        React.createElement("tr", null, 
			          React.createElement("th", null, "#"), 
			          React.createElement("th", null, "Category Name"), 
			          React.createElement("th", null, "Category Description"), 
			          React.createElement("th", null, "Actions")
			        )
			      ), 
			      React.createElement("tbody", null, 
			        React.createElement("tr", null, 
			          React.createElement("th", null, "1"), 
			          React.createElement("td", null, "Verduras frias"), 
			          React.createElement("td", null, "bla bla bla"), 
			          React.createElement("td", null, React.createElement(Actions, null))
			        ), 
			        React.createElement("tr", null, 
			          React.createElement("th", null, "2"), 
			          React.createElement("td", null, "Jacob"), 
			          React.createElement("td", null, "Thornton"), 
			          React.createElement("td", null, React.createElement(Actions, null))
			        )
			      )
			    )
			)	
			);
	}
});
module.exports = CategoryBox;