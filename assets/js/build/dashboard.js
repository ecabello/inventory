var React = require('react');

var DashBoard = React.createClass({displayName: "DashBoard",
	render : function () {
		return (
			React.createElement("div", {className: "small-12 columns"}, 
				React.createElement("h1", null, "Comming SOON"), 
				React.createElement("h6", null, "Example :"), 
				React.createElement("img", {src: "images/dashboard.jpg"})
			)	
			);
	}
});
module.exports = DashBoard;

