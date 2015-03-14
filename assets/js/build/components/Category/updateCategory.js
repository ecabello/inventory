var React = require('react');
var Navigation = require('react-router').Navigation;
var Actions = require('./../actions.js');
var TopHeader = require('./../Texts/TopHeader');

var _ = require('underscore');
var Backbone = require('backbone');

var updateCategory = React.createClass({displayName: "updateCategory",
	mixins: [Navigation],
	render : function () {
		return (
			React.createElement("div", {className: "small-12 columns"}, 
				React.createElement(TopHeader, {text: "Edit Category"}), 
				React.createElement("div", {className: "row"}, 
			    	React.createElement("div", {className: "large-12 columns"}, 
			      		React.createElement("label", null, "Name:", 
			       			React.createElement("input", {type: "text", placeholder: "Category Name", ref: "name", value: this.props.model.get('name')})
			      		)
			    	)
			  	), 
				React.createElement("div", {className: "row"}, 
			    	React.createElement("div", {className: "large-12 columns"}, 
			      		React.createElement("label", null, "Description:", 
			        		React.createElement("textarea", {rows: "10", placeholder: "Optional:", ref: "description", value: this.props.model.get('description')})
			      		)
			    	)
			  	), 
			  	React.createElement("div", {className: "row"}, 
			    	React.createElement("div", {className: "large-4 columns"}, 
			      		React.createElement("a", {className: "btn-action edit", onClick: this.save}, React.createElement("i", {className: "fa fa-plus"}), " Submit")
			      	)
			  	)
			)	
			);
	},
	save : function () {
		var categoryModel = Backbone.Model.extend({ urlRoot : '/category' });
		var category = new categoryModel({
			name : this.refs.name.getDOMNode().value,
			description : this.refs.description.getDOMNode().value,

		});
		category.save().done(function()  {return this.transitionTo('category');}.bind(this));
	}
});
module.exports = updateCategory;