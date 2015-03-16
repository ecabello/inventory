var React = require('react');

var Loader = React.createClass({
	render : function () {
		return (
			<div className="loader">
				<i className="fa fa-cog fa-spin"></i>
			</div>
			);
	}
});
module.exports = Loader;