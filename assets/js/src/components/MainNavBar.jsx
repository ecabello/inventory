var React = require('react');


var MainNavBar = React.createClass({
	render : function () {
		return (
			<nav className="top-bar" data-topbar role="navigation">
			    <ul className="title-area">
			    	<li className="name">
			        	<h1><a href="#">Products Cloud</a></h1>
			    	</li>
				    <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
	    		</ul>
			    <section className="top-bar-section">
			        <ul className="right">
			            <li className="has-form">
			            	<a className='button btn-topbar' href="#login">Login</a>
			            </li>
			        </ul>
    			</section>
			</nav>
		);    
	}
});

module.exports = MainNavBar;