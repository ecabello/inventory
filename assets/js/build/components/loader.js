var React = require('react');

var Loader = React.createClass({displayName: "Loader",
	render : function () {
		return (
			React.createElement("div", {className: "loader"}, 
				React.createElement("i", {className: "fa fa-cog fa-spin"})
			)
			);
	}
});
module.exports = Loader;