var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var CheckBox = React.createClass({displayName: "CheckBox", 
	getInitialState : function () {
		return {
			checked : false
		};
	},
	render : function () {
		var style = {
			checkboxContainer : {
				width : '100%',
				cursor : 'pointer'
			},
			checkbox : {
				display : 'inline-block',
				width : 25,
				height : 25,
				border : '2px solid #0e74af',
				borderRadius : 5,
				position : 'relative',
				top : 5,
				marginRight : 5,
				backgroundColor : this.state.checked ? '#0e74af' : 'white'

			},
			icon : {
				position : 'absolute !important',
				fontSize : 20,
				color : 'white'
			}	
		}
		return (
			React.createElement("div", {className: "checkboxContainer", style: style.checkboxContainer}, 
				React.createElement("div", {className: "checkbox", style: style.checkbox, onClick: function()   {return this.setState({ checked : !this.state.checked });}.bind(this)}, 
					React.createElement(ReactCSSTransitionGroup, {transitionName: "fade"}, 
						 this.state.checked ? React.createElement("i", {className: "fa fa-check", style:  style.icon}) : null
					)	
				), 
				React.createElement("span", {className: "checkboxLabel", onClick: function()   {return this.setState({ checked : !this.state.checked });}.bind(this)}, 
					 this.props.labelText
				)
			)
			);
	},
	checked : function () {
		return this.state.checked;		
	}
});
module.exports = CheckBox;