var React = require('react');
var ReactRouter = require('react-router');
var Navigation = ReactRouter.Navigation;
var State = ReactRouter.State;
var Actions = require('./../actions.js');
var TopHeader = require('./../Texts/TopHeader');

var _ = require('underscore');
var Backbone = require('backbone');

var categoryModel = Backbone.Model.extend({ urlRoot : '/category' });
var updateCategory = React.createClass({displayName: "updateCategory",
	mixins: [Navigation,State],
	getInitialState :  function () {
		return { model :  new categoryModel({ id  : this.getParams().id }) };
	},
	componentDidMount : function () {
		this.state.model.fetch().done( function()  {return this.forceUpdate();}.bind(this));
	},
	render : function () {
		return (
			React.createElement("div", {className: "small-12 columns"}, 
				React.createElement(TopHeader, {text: "Edit Category"}), 
				React.createElement("div", {className: "row"}, 
			    	React.createElement("div", {className: "large-12 columns"}, 
			      		React.createElement("label", null, "Name:", 
			       			React.createElement("input", {type: "text", onChange: this.updateName, ref: "name", value: this.state.model.get('name')})
			      		)
			    	)
			  	), 
				React.createElement("div", {className: "row"}, 
			    	React.createElement("div", {className: "large-12 columns"}, 
			      		React.createElement("label", null, "Description:", 
			        		React.createElement("textarea", {rows: "10", onChange: this.updateDesc, ref: "description", value: this.state.model.get('description')})
			      		)
			    	)
			  	), 
			  	React.createElement("div", {className: "row"}, 
			    	React.createElement("div", {className: "large-4 columns"}, 
			      		React.createElement("a", {className: "btn-action edit", onClick: this.save}, React.createElement("i", {className: "fa fa-plus"}), " Submit")
			      	)
			  	)
			)	
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
		this.state.model.save().done(function()  {return this.transitionTo('category');}.bind(this));
	}
});
module.exports = updateCategory;