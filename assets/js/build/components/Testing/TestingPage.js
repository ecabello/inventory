var React = require('react');
var TopHeader = require('./../Texts/TopHeader');
var CheckBox = require('./CheckBox');
var RadioButton = require('./RadioButton');


/* Component Testing !! */
var Lightbox = require('./Lightbox');

var TestingPage = React.createClass({displayName: "TestingPage",
	getInitialState :  function () {
		return {
			open : false
		}
	},
	render : function () {
		return (
			React.createElement("div", {className: "small-12 columns"}, 
				React.createElement(TopHeader, {text: "Testing Side"}), 
				React.createElement("button", {onClick: function()   {return this.setState({ open : true });}.bind(this)}, "Open Lightbox"), 
				React.createElement(CheckBox, {labelText: "Label No. 1"}), 
				React.createElement(RadioButton, {labelText: "Radio No. 1", ref: "radio1"}), 
				React.createElement(Lightbox, {show: this.state.open, _onClose: function()   {return this.setState({ open : false });}.bind(this)}, 
					"Hola Rey !"
				), 
				React.createElement("br", null), 
				React.createElement("button", {onClick: function()   {return this.refs.radio1.checked = true;}.bind(this)}, "Set Radio"), 
				React.createElement("button", {onClick: function()   {return alert(this.refs.radio1.checked);}.bind(this)}, "Get Radio")
			)
			);
	}
});
module.exports = TestingPage;