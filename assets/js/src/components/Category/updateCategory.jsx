var React = require('react');
var ReactRouter = require('react-router');
var Navigation = ReactRouter.Navigation;
var State = ReactRouter.State;
var Actions = require('./../actions.js');
var TopHeader = require('./../Texts/TopHeader');

var _ = require('underscore');
var Backbone = require('backbone');

var categoryModel = Backbone.Model.extend({ urlRoot : '/category' });
var updateCategory = React.createClass({
	mixins: [Navigation,State],
	getInitialState :  function () {
		return { model :  new categoryModel({ id  : this.getParams().id }) };
	},
	componentDidMount : function () {
		this.state.model.fetch().done( () => this.forceUpdate());
	},
	render : function () {
		return (
			<div className='small-12 columns'>
				<TopHeader text="Edit Category" />
				<div className="row">
			    	<div className="large-12 columns">
			      		<label>Name:
			       			<input type="text" onChange={this.updateName} ref="name" value={this.state.model.get('name')}/>
			      		</label>
			    	</div>
			  	</div>
				<div className="row">
			    	<div className="large-12 columns">
			      		<label>Description:
			        		<textarea rows="10" onChange={this.updateDesc} ref="description" value={this.state.model.get('description')}></textarea>
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
module.exports = updateCategory;