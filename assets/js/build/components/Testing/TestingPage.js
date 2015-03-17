var React = require('react');
var TopHeader = require('./../Texts/TopHeader');

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
				React.createElement(Lightbox, {show: this.state.open, _onClose: function()   {return this.setState({ open : false });}.bind(this)}, 
					"Hola Rey !"
				)
			)
			);
	}
});
module.exports = TestingPage;