var React = require('react');


var MainNavBar = React.createClass({
	render : function () {
		var Actions = this.props.actions;
		return (
			<nav className="top-bar" data-topbar role="navigation">
			    <ul className="title-area">
			    	<li className="name">
			        	<h1><a href="#">Products Cloud <i className="fa fa-cloud"></i></a></h1>
			    	</li>
				    <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
	    		</ul>
			    <Actions />
			</nav>
		);    
	}
});

module.exports = MainNavBar;