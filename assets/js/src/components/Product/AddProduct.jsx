var React = require('react');
var Navigation = require('react-router').Navigation;
var TopHeader = require('./../Texts/TopHeader');
var Uploader = require('./Uploader');
var Loader = require('./../Loader');

var AddProduct = React.createClass({
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
						<div className="large-12 columns">
					      	<img  className="galery" src={this.state.imgUrl} />
				    	</div>
			) : this.state.showLoader ? (
				<div className="large-12 columns">
					<Loader />
				</div>	
				) : undefined;
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
							       			<input type="text" placeholder="Price" ref="price" defaultValue={this.props.price} onChange={ this.validateNumber } onBlur={ this.fixed } />
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
					       		<Uploader url="file/upload" done={ this.uploadDone } beforeSend={ this.showLoader } />
					      	</label> 
				    	</div>
			      		{ image }
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
		category.save().done(() => this.transitionTo('product'));
	}
});
module.exports = AddProduct;