var React = require('react');
var Navigation = require('react-router').Navigation;
var TopHeader = require('./../Texts/TopHeader');
var Uploader = require('./Uploader');
var Loader = require('./../Loader');

var AddProduct = React.createClass({displayName: "AddProduct",
	mixins : [Navigation],
	getInitialState : function () {
		return {
			imgUrl : undefined
		};
	},
	getDefaultProps : function () {
		return {
			price : '0.00'
		}
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
				React.createElement(TopHeader, {text: "New Product"}), 
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
							       			React.createElement("input", {type: "text", placeholder: "Price", ref: "price", defaultValue: this.props.price, onChange:  this.validateNumber, onBlur:  this.fixed})
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
					       		React.createElement(Uploader, {url: "file/upload", done:  this.uploadDone, beforeSend:  this.showLoader})
					      	)
				    	), 
			      		image 
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
	uploadDone : function (imgObj) {
		this.setState({
			imgUrl : imgObj.url,
			imgId  : imgObj.id,
			showLoader : undefined
		});
	},
	showLoader : function () {
		this.setState({ imgUrl : undefined, showLoader : true });
	},
	fixed : function () {
		this.refs.price.getDOMNode().value = Number(this.refs.price.getDOMNode().value).toFixed(2);
		this.props.price = this.refs.price.getDOMNode().value;
	},
	validateNumber : function (e) {
        if (isNaN(this.refs.price.getDOMNode().value))  this.refs.price.getDOMNode().value = this.props.price; 
		this.props.price = this.refs.price.getDOMNode().value;
	},
	save : function () {
		var categoryModel = Backbone.Model.extend({ urlRoot : '/product' });
		var category = new categoryModel({
			name : this.refs.name.getDOMNode().value,
			description : this.refs.description.getDOMNode().value,
			price : this.refs.price.getDOMNode().value,
			unit : this.refs.unit.getDOMNode().value,
			promo : this.refs.promo.getDOMNode().checked,
			images : [this.state.imgId]
		});
		category.save().done(function()  {return this.transitionTo('product');}.bind(this));
	}
});
module.exports = AddProduct;