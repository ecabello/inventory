var React = require('react');
var ReactRouter = require('react-router');
var Navigation = ReactRouter.Navigation;
var State = ReactRouter.State;
var Actions = require('./../actions.js');
var TopHeader = require('./../Texts/TopHeader');

var _ = require('underscore');
var Backbone = require('backbone');

var productModel = Backbone.Model.extend({ urlRoot : '/product' });

var updateProduct = React.createClass({
	mixins: [Navigation,State],
	getInitialState :  function () {
		return { model :  new productModel({ id  : this.getParams().id }) };
	},
	componentDidMount : function () {
		this.state.model.fetch().done( () => this.forceUpdate());
	},
	render : function () {
		return (
			<div className='small-12 columns'>
				<TopHeader text="Edit Product" />
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
	updateName : function () {
		this.state.model.set({ name : this.refs.name.getDOMNode().value });
		this.forceUpdate();
	},
	updateDesc : function () {
		this.state.model.set({ description : this.refs.description.getDOMNode().value });
		this.forceUpdate();
	},
	save : function () {
		this.state.model.save().done(() => this.transitionTo('category'));
	}
});
module.exports = updateProduct;