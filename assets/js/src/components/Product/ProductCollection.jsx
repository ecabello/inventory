var React = require('react');
var Navigation = require('react-router').Navigation;
var Actions = require('./../actions.js');
var TopHeader = require('./../Texts/TopHeader');
var Router = require('react-router');
var Link = Router.Link;
var LoadImage = require('./loadImage');

var Products = React.createClass({
	mixins : [Navigation],
	getInitialState :  function () {
		return { 
			collection : new Backbone.Collection(),
			detail	   : false 
		};
	},
	componentDidMount : function () {
		this.state.collection.url = '/product';
		this.state.collection.fetch().done(() => this.forceUpdate());
	},	
	render : function () {
		var products;
		if (this.state.collection.length) {
			products = this.state.collection.map(function (product,index) {
				return (
					<div className="small-12 columns table-row" key={index}>
					    { this.product(product,index) }	
						{ this.productDetails(product.get('id')) }
					</div>
					);
			}.bind(this));
		} else {
			products = (
				<div className="small-12 columns table-row">
				    No data entries.
				</div>
				);
		}	
		return (
			<div className='small-12 columns'>
				<TopHeader text="Product List" />
				<div className="row">
					<div className="small-4 columns">
						<button className='btn-blue' onClick={ () => this.transitionTo('add-product')}><i className="fa fa-plus"></i> New Product</button>
					</div>	
				</div>
				<div className="small-12 columns">
					<div className="row table-header">
						<div className="small-1 columns">
							No.
						</div>
						<div className="small-3 columns">
							Product name
						</div>
						<div className="small-7 columns">
							Product description
						</div>
						<div className="small-1 columns">
							Action
						</div>
					</div>
					<div className="row">
						{ products }
					</div>	
				</div>	
			</div>	
			);
	},
	removeOne : function (id) {
		this.state.collection.findWhere({ id : id }).destroy().done( () => this.forceUpdate());
	},
	productDetails : function (id) {
		if (this.state.detail == id) {
			product = this.state.collection.findWhere({ id : id });
			return (
				<div className="small-12 columns">
					<div className="small-5 columns">
						<h6>Product name : <span className='text-p'>{ product.get('name') }</span></h6>
						<h6>Price : <span className='text-p price'>{ product.get('price') }</span></h6>
						<h6>Unit : <span className='text-p'>{ product.get('unit') }</span></h6>
						<h6>Promotional : <span className='text-p'>{ String(product.get('promo')) }</span></h6>
					</div>
					<div className="small-3 columns">
						<LoadImage id={ product.get('images') ? product.get('images')[0] : undefined } />
					</div>
					<div className="small-4 columns">
						<div className="small-10 columns right">
							<button className="btn-blue" onClick={ () => this.transitionTo('update-product',{ id : product.get('id') }) }><i className="fa fa-pencil-square-o"></i> Update</button>
							<button className="btn-red" onClick={ () => this.removeOne(product.get('id')) }><i className="fa fa-times"></i> Delete</button>
						</div>
				    </div>
				    <div className="small-12 columns">
				    	<h6>Product description :</h6>
						<p className="text-p">{ product.get('description') }</p>
				    </div>
				    <div className="small-1 columns right">
						<a className="btn-close" onClick={ () => this.setState({ detail : false })}><i className="fa fa-arrow-circle-up"></i></a>
					</div>
				</div>
				);
		}
	},
	product : function (product,index) {
		if (this.state.detail != product.get('id')) {
			return (
					<div className="row {}">
						<div className="small-1 columns text-p">
							{ index }
						</div>
						<div className="small-3 columns text-p">
							{ product.get('name') }
						</div>
						<div className="small-7 columns text-p">
							{ product.get('description') }
						</div>
						<div className="small-1 columns text-p">
							<a className="btn-open" onClick={ () => this.setState({ detail : product.get('id')}) }><i className="fa fa-arrow-circle-down"></i></a>
						</div>
					</div>
				);
		}	
		
	}
});
module.exports = Products;