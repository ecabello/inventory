var React = require('react');

var PublicActions = React.createClass({
	render : function () {
		return (
			<section className="top-bar-section">
			    <ul className="right">
			        <li className="has-form">
			          	<a href="#login">Login</a> 
			        </li>
			    </ul>
    		</section>
		);    
	}
});

module.exports = PublicActions;