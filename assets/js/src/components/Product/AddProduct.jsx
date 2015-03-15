var React = require('react');
var Navigation = require('react-router').Navigation;
var TopHeader = require('./../Texts/TopHeader');

var AddProduct = React.createClass({
	mixins : [Navigation],
	render : function () {
		return (
			<div className='small-12 columns'>
				<TopHeader text="New Product" />
				<div className="row">
			    	<div className="large-6 columns">
			    		<div className="row">
				      		<div className="large-12 columns">
					      		<label>Product name:
					       			<input type="text" placeholder="Product name" ref="name"/>
					      		</label>
				    		</div>
				    		<div className="large-12 columns">
					      		<div className="row">
							      	<div className="large-6 columns">
							      		<label>Price:
							       			<input type="text" placeholder="Price" ref="price"/>
							      		</label>
						    		</div>
						    		<div className="large-6 columns">
							      		<label>Unit:
							       			<select ref="unit">
							       				<option>Kgs</option>
							       				<option>Lbs</option>
							       				<option>Boxes</option>
							       			</select>
							      		</label>
						    		</div>
					      		</div>
				    		</div>
				    		<div className="large-12 columns">
				      			<label>Product description:
				        			<textarea rows="10" placeholder="Optional:" ref="description"></textarea>
				      			</label>
				    		</div>
				    		<div className="large-12 columns">
				      			<input type="checkbox" ref="promo" />
				      			<label>Promotional this product?</label>
				    		</div>
				    	</div>	
			    	</div>
			    	<div className="large-6 columns left">
			      		<div className="large-12 columns">
					      	<label>Select image:
					       		<input type="file" placeholder="Image" />
					      	</label> 
				    	</div>
			      		<div className="large-12 columns">
					      	<img  className="galery" src="../images/limon-persa.jpg" />
				    	</div>
			    	</div>
			  	</div>
				<div className="row">
			    	<div className="large-4 columns">
			      		<button className='btn-blue' onClick={this.save}><i className="fa fa-plus"></i> Add Product</button>
			      	</div>
			  	</div>
			</div>	
			);
	},
	save : function () {
		var categoryModel = Backbone.Model.extend({ urlRoot : '/product' });
		var category = new categoryModel({
			name : this.refs.name.getDOMNode().value,
			description : this.refs.description.getDOMNode().value,
			price : this.refs.price.getDOMNode().value,
			unit : this.refs.unit.getDOMNode().value,
			promo : this.refs.promo.getDOMNode().checked

		});
		category.save().done(() => this.transitionTo('product'));
	}
});
module.exports = AddProduct;