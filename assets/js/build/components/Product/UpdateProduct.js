var React = require('react');
var ReactRouter = require('react-router');
var Navigation = ReactRouter.Navigation;
var State = ReactRouter.State;
var Actions = require('./../actions.js');
var TopHeader = require('./../Texts/TopHeader');

var _ = require('underscore');
var Backbone = require('backbone');

var productModel = Backbone.Model.extend({ urlRoot : '/product' });

var updateProduct = React.createClass({displayName: "updateProduct",
	mixins: [Navigation,State],
	getInitialState :  function () {
		return { model :  new productModel({ id  : this.getParams().id }) };
	},
	componentDidMount : function () {
		this.state.model.fetch().done( function()  {return this.forceUpdate();}.bind(this));
	},
	render : function () {
		return (
			React.createElement("div", {className: "small-12 columns"}, 
				React.createElement(TopHeader, {text: "Edit Product"}), 
				React.createElement("div", {className: "row"}, 
			    	React.createElement("div", {className: "large-6 columns"}, 
			    		React.createElement("div", {className: "row"}, 
				      		React.createElement("div", {className: "large-12 columns"}, 
					      		React.createElement("label", null, "Product name:", 
					       			React.createElement("input", {type: "text", placeholder: "Product name", ref: "name"})
					      		)
				    		), 
				    		React.createElement("div", {className: "large-12 columns"}, 
					      		React.createElement("div", {className: "row"}, 
							      	React.createElement("div", {className: "large-6 columns"}, 
							      		React.createElement("label", null, "Price:", 
							       			React.createElement("input", {type: "text", placeholder: "Price", ref: "price"})
							      		)
						    		), 
						    		React.createElement("div", {className: "large-6 columns"}, 
							      		React.createElement("label", null, "Unit:", 
							       			React.createElement("select", {ref: "unit"}, 
							       				React.createElement("option", null, "Kgs"), 
							       				React.createElement("option", null, "Lbs"), 
							       				React.createElement("option", null, "Boxes")
							       			)
							      		)
						    		)
					      		)
				    		), 
				    		React.createElement("div", {className: "large-12 columns"}, 
				      			React.createElement("label", null, "Product description:", 
				        			React.createElement("textarea", {rows: "10", placeholder: "Optional:", ref: "description"})
				      			)
				    		), 
				    		React.createElement("div", {className: "large-12 columns"}, 
				      			React.createElement("input", {type: "checkbox", ref: "promo"}), 
				      			React.createElement("label", null, "Promotional this product?")
				    		)
				    	)	
			    	), 
			    	React.createElement("div", {className: "large-6 columns left"}, 
			      		React.createElement("div", {className: "large-12 columns"}, 
					      	React.createElement("label", null, "Select image:", 
					       		React.createElement("input", {type: "file", placeholder: "Image"})
					      	)
				    	), 
			      		React.createElement("div", {className: "large-12 columns"}, 
					      	React.createElement("img", {className: "galery", src: "../images/limon-persa.jpg"})
				    	)
			    	)
			  	), 
				React.createElement("div", {className: "row"}, 
			    	React.createElement("div", {className: "large-4 columns"}, 
			      		React.createElement("button", {className: "btn-blue", onClick: this.save}, React.createElement("i", {className: "fa fa-plus"}), " Add Product")
			      	)
			  	)
			)	
			);
	},
	updateName : function () {
		this.state.model.set({ name : this.refs.name.getDOMNode().value });
		this.forceUpdate();
	},
	updateDesc : function () {
		this.state.model.set({ description : this.refs.description.getDOMNode().value });
		this.forceUpdate();
	},
	save : function () {
		this.state.model.save().done(function()  {return this.transitionTo('category');}.bind(this));
	}
});
module.exports = updateProduct;