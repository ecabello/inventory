var React = require('react');
var Actions = require('./actions.js');
var Router = require('react-router');
var Link = Router.Link;

var CategoryBox = React.createClass({
	render : function () {
		return (
			<div className='small-12 columns'>
				<h1>Categories</h1>
				<Link className='btn-action edit' to='add-category'><i className="fa fa-plus"></i> New Category</Link>
				<br /><br />
				<table className="table table-condensed">
			      <thead>
			        <tr>
			          <th>#</th>
			          <th>Category Name</th>
			          <th>Category Description</th>
			          <th>Actions</th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr>
			          <th>1</th>
			          <td>Verduras frias</td>
			          <td>bla bla bla</td>
			          <td><Actions /></td>
			        </tr>
			        <tr>
			          <th>2</th>
			          <td>Jacob</td>
			          <td>Thornton</td>
			          <td><Actions /></td>
			        </tr>
			      </tbody>
			    </table>
			</div>	
			);
	}
});
module.exports = CategoryBox;