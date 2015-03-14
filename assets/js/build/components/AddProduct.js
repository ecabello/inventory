var React = require('react');
var TopHeader = require('./Texts/TopHeader');

var AddProduct = React.createClass({displayName: "AddProduct",
	render : function () {
		return (
			React.createElement("div", {className: "small-12 columns"}, 
				React.createElement(TopHeader, {text: "New Product"}), 
				React.createElement("div", {className: "row"}, 
			    	React.createElement("div", {className: "large-6 columns"}, 
			    		React.createElement("div", {className: "row"}, 
				      		React.createElement("div", {className: "large-12 columns"}, 
					      		React.createElement("label", null, "Product name:", 
					       			React.createElement("input", {type: "text", placeholder: "Pruct name"})
					      		)
				    		), 
				    		React.createElement("div", {className: "large-12 columns"}, 
					      		React.createElement("div", {className: "row"}, 
							      	React.createElement("div", {className: "large-6 columns"}, 
							      		React.createElement("label", null, "Price:", 
							       			React.createElement("input", {type: "text", placeholder: "Price"})
							      		)
						    		), 
						    		React.createElement("div", {className: "large-6 columns"}, 
							      		React.createElement("label", null, "Unit:", 
							       			React.createElement("select", null, 
							       				React.createElement("option", null, "Kg"), 
							       				React.createElement("option", null, "Lbs")
							       			)
							      		)
						    		)
					      		)
				    		), 
				    		React.createElement("div", {className: "large-12 columns"}, 
				      			React.createElement("label", null, "Product description:", 
				        			React.createElement("textarea", {rows: "10", placeholder: "Optional:"})
				      			)
				    		)
				    	)	
			    	), 
			    	React.createElement("div", {className: "large-4 columns left"}, 
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
			      		React.createElement("a", {className: "btn-action edit"}, React.createElement("i", {className: "fa fa-plus"}), " Add Product")
			      	)
			  	)
			)	
			);
	}
});
module.exports = AddProduct;