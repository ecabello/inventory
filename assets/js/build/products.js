var React = require('react');
var TitlePage = require('./titlepage.js');

var Products = React.createClass({displayName: 'Products',
	render : function () {
		return (
			React.createElement("div", {className: "row"}, 
				React.createElement(TitlePage, {title: this.props.title.slice(1,this.props.title.length)})
			)
			);
	}
});
module.exports = Products;