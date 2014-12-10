var React = require('react');
var TitlePage = require('./titlepage.js');

var Products = React.createClass({
	render : function () {
		return (
			<div className="row">
				<TitlePage title={this.props.title.slice(1,this.props.title.length)} />
			</div>
			);
	}
});
module.exports = Products;