var React = require('react');
var Navigation = require('react-router').Navigation;
var Actions = require('./../actions.js');
var TopHeader = require('./../Texts/TopHeader');

var _ = require('underscore');
var Backbone = require('backbone');

var updateCategory = React.createClass({
	mixins: [Navigation],
	render : function () {
		return (
			<div className='small-12 columns'>
				<TopHeader text="Edit Category" />
				<div className="row">
			    	<div className="large-12 columns">
			      		<label>Name:
			       			<input type="text" placeholder="Category Name" ref="name" value={this.props.model.get('name')}/>
			      		</label>
			    	</div>
			  	</div>
				<div className="row">
			    	<div className="large-12 columns">
			      		<label>Description:
			        		<textarea rows="10" placeholder="Optional:" ref="description" value={this.props.model.get('description')}></textarea>
			      		</label>
			    	</div>
			  	</div>
			  	<div className="row">
			    	<div className="large-4 columns">
			      		<a className='btn-action edit' onClick={this.save}><i className="fa fa-plus"></i> Submit</a>
			      	</div>
			  	</div>
			</div>	
			);
	},
	save : function () {
		var categoryModel = Backbone.Model.extend({ urlRoot : '/category' });
		var category = new categoryModel({
			name : this.refs.name.getDOMNode().value,
			description : this.refs.description.getDOMNode().value,

		});
		category.save().done(() => this.transitionTo('category'));
	}
});
module.exports = updateCategory;