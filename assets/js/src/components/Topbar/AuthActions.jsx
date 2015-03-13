var React = require('react');

var AuthActions = React.createClass({
	render : function () {
		return (
			<section className="top-bar-section">
			    <ul className="right">
			        <li className="has-form">
			          	<a href="/logout">Logout</a> 
			        </li>
			    </ul>
    		</section>  
		);    
	}
});

module.exports = AuthActions;