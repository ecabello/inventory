var React = require('react');
var Actions = require('./actions.js');
var Router = require('react-router');
var Link = Router.Link;

var Products = React.createClass({
	render : function () {
		return (
			<div className='small-12 columns'>
				<h1>Products</h1>
				<Link className='btn-action edit' to='add-product'><i className="fa fa-plus"></i> New Product</Link>
				<br /><br />
				<table className="table table-condensed">
			      <thead>
			        <tr>
			          <th>#</th>
			          <th>Product Name</th>
			          <th>Product Description</th>
			          <th>Price</th>
			          <th>Unit</th>
			          <th>Images</th>
			          <th>Actions</th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr>
			          <th>1</th>
			          <td>Tomates</td>
			          <td>bla bla bla</td>
			          <td>1.4</td>
			          <td>Kgs</td>
			          <td>Yes</td>
			          <td><Actions /></td>
			        </tr>
			        <tr>
			          <th>2</th>
			          <td>Pepinos</td>
			          <td>bla bla bla</td>
			          <td>2.8</td>
			          <td>Lbs</td>
			          <td>No</td>
			          <td><Actions /></td>
			        </tr>
			      </tbody>
			    </table>
			</div>	
			);
	}
});
module.exports = Products;