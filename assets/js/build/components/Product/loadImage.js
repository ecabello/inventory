var React = require('react');
var Loader = require('./../Loader');
var $ = require('jquery');

var LoadImage = React.createClass({displayName: "LoadImage",
	getInitialState : function () {
		return { value : 0 }; // searching...
	},
	componentDidMount : function () {
		if (!this.props.id) {
			this.setState({	value : 1 });
		} else {
			$.ajax({
				url : 'file/' + this.props.id,
				type : 'GET'
			}).done(function (imgObj) {
				this.setState({
					value : 2,
					url   : imgObj.url
				});
			}.bind(this));
		}
	},
	render : function () {
		var content; 
		switch (this.state.value) {
			case 0:
				content = React.createElement(Loader, null);
				break;
			case 1:
				content = React.createElement("h4", null, "No IMG");
				break;
			case 2 : 
				content =  React.createElement("span", null, React.createElement("img", {src: this.state.url}))	
		}
		return (
			React.createElement("div", {className: ""}, 
			 	content 
			)
			);
	}
});
module.exports = LoadImage;