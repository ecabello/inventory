var React = require('react');

var underConstructionPage = React.createClass({displayName: "underConstructionPage",
	render : function () {
		return (
			React.createElement("div", {className: "small-12 columns"}, 
		    	React.createElement("h1", null, "Comming SOON"), 
		    	React.createElement("p", null, "We are still working on it.")
		    )	
			);
	}
});
module.exports = underConstructionPage;