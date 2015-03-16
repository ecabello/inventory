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

var updateProduct = React.createClass({
	mixins: [Navigation,State],
	getInitialState :  function () {
		return { model :  new productModel({ id  : this.getParams().id }) };
	},
	componentDidMount : function () {
		this.state.model.fetch().done( () => this.forceUpdate());
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
				<TopHeader text="Edit Product" />
				<div className="row">
			    	<div className="large-6 columns">
			    		<div className="row">
				      		<div className="large-12 columns">
					      		<label>Product name:
					       			<input type="text" value={this.state.model.get('name')} onChange={ () => this.onChangeHandle('name') } ref="name"/>
					      		</label>
				    		</div>
				    		<div className="large-12 columns">
					      		<div className="row">
							      	<div className="large-6 columns">
							      		<label>Price:
							       			<input type="text" ref="price" value={this.state.model.get('price')} onChange={ () => this.onChangeHandle('price') } />
							      		</label>
						    		</div>
						    		<div className="large-6 columns">
							      		<label>Unit:
							       			<select ref="unit" value={this.state.model.get('unit')} onChange={ () => this.onChangeHandle('unit') }>
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
				        			<textarea rows="10"  ref="description" value={this.state.model.get('description')} onChange={ () => this.onChangeHandle('description') }></textarea>
				      			</label>
				    		</div>
				    	</div>	
			    	</div>
			    	<div className="large-6 columns left">
			      		<div className="large-12 columns">
					      	<label>Select image:
					       		<Uploader url="file/upload" done={ this.uploadDone } beforeSend={ this.showLoader } />
					      	</label> 
				    	</div>
			      		<div className="large-12 columns">
					      	{ image }
				    	</div>
			    	</div>
			  	</div>
			  	<div className="row">
			    	<div className="large-12 columns">
			    		<input type="checkbox" ref="promo" checked={this.state.model.get('promo')} onChange={ () => this.onChangeHandle('promo') }/>
		      			<label>Promotional this product?</label>
			    	</div>
			    </div>
				<div className="row">
			    	<div className="large-4 columns">
			      		<button className='btn-blue' onClick={this.save}><i className="fa fa-pencil-square-o"></i> Update</button>
			      	</div>
			  	</div>
			</div>	
			);
	},
	onChangeHandle : function (field) {
		this.state.model.attributes[field] =  field != 'promo' ? this.refs[field].getDOMNode().value :this.refs[field].getDOMNode().checked;
		this.forceUpdate();
	},
	save : function () {
		this.state.model.save().done(() => this.transitionTo('product'));
	}
});
module.exports = updateProduct;