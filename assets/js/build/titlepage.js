var React = require('react');

var TitlePage = React.createClass({displayName: 'TitlePage',
	render : function () {
		return (
			React.createElement("div", {className: "large-12 columns"}, 
				React.createElement("h1", null, this.props.title)
			)
			);
	}
});
module.exports = TitlePage;