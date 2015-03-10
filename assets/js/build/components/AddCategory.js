var React = require('react');
var Actions = require('./actions.js');

var AddCategory = React.createClass({displayName: "AddCategory",
	render : function () {
		return (
			React.createElement("div", {className: "small-12 columns"}, 
				React.createElement("h1", null, "New category"), 
				React.createElement("div", {className: "row"}, 
			    	React.createElement("div", {className: "large-4 columns"}, 
			      		React.createElement("label", null, "Name:", 
			       			React.createElement("input", {type: "text", placeholder: "Category Name"})
			      		)
			    	)
			  	), 
				React.createElement("div", {className: "row"}, 
			    	React.createElement("div", {className: "large-4 columns"}, 
			      		React.createElement("label", null, "Description:", 
			        		React.createElement("textarea", {rows: "10", placeholder: "Optional:"})
			      		)
			    	)
			  	), 
			  	React.createElement("div", {className: "row"}, 
			    	React.createElement("div", {className: "large-4 columns"}, 
			      		React.createElement("a", {className: "btn-action edit"}, React.createElement("i", {className: "fa fa-plus"}), " Add Category")
			      	)
			  	)
			)	
			);
	}
});
module.exports = AddCategory;