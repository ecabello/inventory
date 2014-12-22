var React = require('react');

var TitlePage = React.createClass({
	render : function () {
		return (
			<div className="large-12 columns">
				<h1>{this.props.title}</h1>
			</div>
			);
	}
});
module.exports = TitlePage;