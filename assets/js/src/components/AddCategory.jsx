var React = require('react');
var Actions = require('./actions.js');

var AddCategory = React.createClass({
	render : function () {
		return (
			<div className='small-12 columns'>
				<h1>New category</h1>
				<div className="row">
			    	<div className="large-4 columns">
			      		<label>Name:
			       			<input type="text" placeholder="Category Name" />
			      		</label>
			    	</div>
			  	</div>
				<div className="row">
			    	<div className="large-4 columns">
			      		<label>Description:
			        		<textarea rows="10" placeholder="Optional:"></textarea>
			      		</label>
			    	</div>
			  	</div>
			  	<div className="row">
			    	<div className="large-4 columns">
			      		<a className='btn-action edit'><i className="fa fa-plus"></i> Add Category</a>
			      	</div>
			  	</div>
			</div>	
			);
	}
});
module.exports = AddCategory;