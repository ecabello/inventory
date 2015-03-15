var React = require('react');
var Actions = require('./../actions.js');
var TopHeader = require('./../Texts/TopHeader');
var Router = require('react-router');
var Link = Router.Link;
var _ = require('underscore');
var Backbone = require('backbone');



var CategoryList = React.createClass({displayName: "CategoryList",
	getInitialState :  function () {
		return { collection : new Backbone.Collection() };
	},
	componentDidMount : function () {
		this.state.collection.url = '/category';
		this.state.collection.fetch().done(function()  {return this.forceUpdate();}.bind(this));
	},	
	render : function () {
		var categories;
		if (this.state.collection.length) {
			categories = this.state.collection.map(function (category,index) {
				return (
					React.createElement("tr", {key: index }, 
				        React.createElement("th", null, index ), 
				        React.createElement("td", null,  category.get('name') ), 
				        React.createElement("td", null,  category.get('description') ), 
				        React.createElement("td", null, React.createElement(Actions, {id: category.get('id'), removeCb: this.removeOne}))
				    )
					);
			}.bind(this));
		} else {
			categories = (
				React.createElement("tr", null, 
				    React.createElement("th", {colSpan: "4"}, "No data entries.")
				)
				);
		}	
		return (
			React.createElement("div", {className: "small-12 columns"}, 
				React.createElement(TopHeader, {text: "Category List"}), 
				React.createElement(Link, {className: "btn-action edit", to: "add-category"}, React.createElement("i", {className: "fa fa-plus"}), " New Category"), 
				React.createElement("br", null), React.createElement("br", null), 
				React.createElement("table", {className: "table table-condensed"}, 
			      React.createElement("thead", null, 
			        React.createElement("tr", null, 
			          React.createElement("th", null, "No."), 
			          React.createElement("th", null, "Category Name"), 
			          React.createElement("th", null, "Category Description"), 
			          React.createElement("th", null, "Actions")
			        )
			      ), 
			      React.createElement("tbody", null, 
			        categories 
			      )
			    )
			)	
			);
	},
	removeOne : function (id) {
		this.state.collection.findWhere({ id : id }).destroy().done( function()  {return this.forceUpdate();}.bind(this));
	}
});
module.exports = CategoryList;