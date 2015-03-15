var React = require('react');
var Navigation = require('react-router').Navigation;
var Actions = require('./../actions.js');
var TopHeader = require('./../Texts/TopHeader');
var Router = require('react-router');
var Link = Router.Link;

var Products = React.createClass({displayName: "Products",
	mixins : [Navigation],
	getInitialState :  function () {
		return { 
			collection : new Backbone.Collection(),
			detail	   : false 
		};
	},
	componentDidMount : function () {
		this.state.collection.url = '/product';
		this.state.collection.fetch().done(function()  {return this.forceUpdate();}.bind(this));
	},	
	render : function () {
		var products;
		if (this.state.collection.length) {
			products = this.state.collection.map(function (product,index) {
				return (
					React.createElement("div", {className: "small-12 columns table-row", key: index}, 
					     this.product(product,index), 	
						 this.productDetails(product.get('id')) 
					)
					);
			}.bind(this));
		} else {
			products = (
				React.createElement("div", {className: "small-12 columns"}, 
				    "No data entries."
				)
				);
		}	
		return (
			React.createElement("div", {className: "small-12 columns"}, 
				React.createElement(TopHeader, {text: "Product List"}), 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "small-4 columns"}, 
						React.createElement("button", {className: "btn-blue", onClick: function()   {return this.transitionTo('add-product');}.bind(this)}, React.createElement("i", {className: "fa fa-plus"}), " New Product")
					)	
				), 
				React.createElement("div", {className: "small-12 columns"}, 
					React.createElement("div", {className: "row table-header"}, 
						React.createElement("div", {className: "small-1 columns"}, 
							"No."
						), 
						React.createElement("div", {className: "small-3 columns"}, 
							"Product name"
						), 
						React.createElement("div", {className: "small-7 columns"}, 
							"Product description"
						), 
						React.createElement("div", {className: "small-1 columns"}, 
							"Action"
						)
					), 
					React.createElement("div", {className: "row"}, 
						products 
					)	
				)	
			)	
			);
	},
	removeOne : function (id) {
		this.state.collection.findWhere({ id : id }).destroy().done( function()  {return this.forceUpdate();}.bind(this));
	},
	productDetails : function (id) {
		if (this.state.detail == id) {
			product = this.state.collection.findWhere({ id : id });
			return (
				React.createElement("div", {className: "small-12 columns"}, 
					React.createElement("div", {className: "small-8 columns"}, 
						React.createElement("h6", null, "Product name : ", React.createElement("span", {className: "text-p"},  product.get('name') )), 
						React.createElement("h6", null, "Price : ", React.createElement("span", {className: "text-p"},  product.get('price') )), 
						React.createElement("h6", null, "Unit : ", React.createElement("span", {className: "text-p"},  product.get('unit') )), 
						React.createElement("h6", null, "Promotional : ", React.createElement("span", {className: "text-p"},  String(product.get('promo')) ))
					), 
					React.createElement("div", {className: "small-4 columns"}, 
						React.createElement("div", {className: "small-10 columns right"}, 
							React.createElement("button", {className: "btn-blue", onClick: function()   {return this.transitionTo('update-product',{ id : product.get('id') });}.bind(this)}, React.createElement("i", {className: "fa fa-pencil-square-o"}), " Update"), 
							React.createElement("button", {className: "btn-red", onClick: function()   {return this.removeOne(product.get('id'));}.bind(this)}, React.createElement("i", {className: "fa fa-times"}), " Delete"), 
							React.createElement("a", {className: "btn-cancel", onClick: function()   {return this.setState({ detail : false });}.bind(this)}, "Cancel")
						)
				    ), 
				    React.createElement("div", {className: "small-12 columns"}, 
				    	React.createElement("h6", null, "Product description :"), 
						React.createElement("p", null,  product.get('description') )
				    )
				)
				);
		}
	},
	product : function (product,index) {
		if (this.state.detail != product.get('id')) {
			return (
					React.createElement("div", {className: "row {}"}, 
						React.createElement("div", {className: "small-1 columns"}, 
							index 
						), 
						React.createElement("div", {className: "small-3 columns"}, 
							 product.get('name') 
						), 
						React.createElement("div", {className: "small-7 columns"}, 
							 product.get('description') 
						), 
						React.createElement("div", {className: "small-1 columns"}, 
							React.createElement("a", {onClick: function()   {return this.setState({ detail : product.get('id')});}.bind(this)}, "View")
						)
					)
				);
		}	
		
	}
});
module.exports = Products;