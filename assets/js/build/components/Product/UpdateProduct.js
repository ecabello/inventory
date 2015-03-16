var React = require('react');
var ReactRouter = require('react-router');
var Navigation = ReactRouter.Navigation;
var State = ReactRouter.State;
var Actions = require('./../actions.js');
var TopHeader = require('./../Texts/TopHeader');
var Uploader = require('./Uploader');
var Loader = require('./../Loader');

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
		var image = this.state.imgUrl ? (
						React.createElement("div", {className: "large-12 columns"}, 
					      	React.createElement("img", {className: "galery", src: this.state.imgUrl})
				    	)
			) : this.state.showLoader ? (
				React.createElement("div", {className: "large-12 columns"}, 
					React.createElement(Loader, null)
				)	
				) : undefined;
		return (
			React.createElement("div", {className: "small-12 columns"}, 
				React.createElement(TopHeader, {text: "Edit Product"}), 
				React.createElement("div", {className: "row"}, 
			    	React.createElement("div", {className: "large-6 columns"}, 
			    		React.createElement("div", {className: "row"}, 
				      		React.createElement("div", {className: "large-12 columns"}, 
					      		React.createElement("label", null, "Product name:", 
					       			React.createElement("input", {type: "text", value: this.state.model.get('name'), onChange: function()   {return this.onChangeHandle('name');}.bind(this), ref: "name"})
					      		)
				    		), 
				    		React.createElement("div", {className: "large-12 columns"}, 
					      		React.createElement("div", {className: "row"}, 
							      	React.createElement("div", {className: "large-6 columns"}, 
							      		React.createElement("label", null, "Price:", 
							       			React.createElement("input", {type: "text", ref: "price", value: this.state.model.get('price'), onChange: function()   {return this.onChangeHandle('price');}.bind(this)})
							      		)
						    		), 
						    		React.createElement("div", {className: "large-6 columns"}, 
							      		React.createElement("label", null, "Unit:", 
							       			React.createElement("select", {ref: "unit", value: this.state.model.get('unit'), onChange: function()   {return this.onChangeHandle('unit');}.bind(this)}, 
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
				        			React.createElement("textarea", {rows: "10", ref: "description", value: this.state.model.get('description'), onChange: function()   {return this.onChangeHandle('description');}.bind(this)})
				      			)
				    		)
				    	)	
			    	), 
			    	React.createElement("div", {className: "large-6 columns left"}, 
			      		React.createElement("div", {className: "large-12 columns"}, 
					      	React.createElement("label", null, "Select image:", 
					       		React.createElement(Uploader, {url: "file/upload", done:  this.uploadDone, beforeSend:  this.showLoader})
					      	)
				    	), 
			      		React.createElement("div", {className: "large-12 columns"}, 
					      	image 
				    	)
			    	)
			  	), 
			  	React.createElement("div", {className: "row"}, 
			    	React.createElement("div", {className: "large-12 columns"}, 
			    		React.createElement("input", {type: "checkbox", ref: "promo", checked: this.state.model.get('promo'), onChange: function()   {return this.onChangeHandle('promo');}.bind(this)}), 
		      			React.createElement("label", null, "Promotional this product?")
			    	)
			    ), 
				React.createElement("div", {className: "row"}, 
			    	React.createElement("div", {className: "large-4 columns"}, 
			      		React.createElement("button", {className: "btn-blue", onClick: this.save}, React.createElement("i", {className: "fa fa-pencil-square-o"}), " Update")
			      	)
			  	)
			)	
			);
	},
	onChangeHandle : function (field) {
		this.state.model.attributes[field] =  field != 'promo' ? this.refs[field].getDOMNode().value :this.refs[field].getDOMNode().checked;
		this.forceUpdate();
	},
	save : function () {
		this.state.model.save().done(function()  {return this.transitionTo('product');}.bind(this));
	}
});
module.exports = updateProduct;