var React = require('react');
var Actions = require('./../actions.js');
var TopHeader = require('./../Texts/TopHeader');
var Router = require('react-router');
var Link = Router.Link;
var _ = require('underscore');
var Backbone = require('backbone');



var CategoryList = React.createClass({
	getInitialState :  function () {
		return { collection : new Backbone.Collection() };
	},
	componentDidMount : function () {
		this.state.collection.url = '/category';
		this.state.collection.fetch().done(() => this.forceUpdate());
	},	
	render : function () {
		var categories;
		if (this.state.collection.length) {
			categories = this.state.collection.map(function (category,index) {
				return (
					<tr key={ index }>
				        <th>{ index }</th>
				        <td>{ category.get('name') }</td>
				        <td>{ category.get('description') }</td>
				        <td><Actions id={category.get('id')} removeCb={this.removeOne} /></td>
				    </tr>
					);
			}.bind(this));
		} else {
			categories = (
				<tr>
				    <th colSpan="4">No data entries.</th>
				</tr>
				);
		}	
		return (
			<div className='small-12 columns'>
				<TopHeader text="Category List" />
				<Link className='btn-action edit' to='add-category'><i className="fa fa-plus"></i> New Category</Link>
				<br /><br />
				<table className="table table-condensed">
			      <thead>
			        <tr>
			          <th>No.</th>
			          <th>Category Name</th>
			          <th>Category Description</th>
			          <th>Actions</th>
			        </tr>
			      </thead>
			      <tbody>  
			        { categories }
			      </tbody>
			    </table>
			</div>	
			);
	},
	removeOne : function (id) {
		this.state.collection.findWhere({ id : id }).destroy().done( () => this.forceUpdate());
	}
});
module.exports = CategoryList;