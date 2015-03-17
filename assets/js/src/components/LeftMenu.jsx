var React = require('react');
var Navigation = require('react-router').Navigation;

var LeftMenu = React.createClass({
	mixins: [Navigation],
	render : function () {
		return (
			<div className='leftMenu'>
			    <h3>Control Panel</h3>
			    <ul>
			    	<li onClick={() => this.transitionTo('cpanel')}><i className="fa fa-tachometer"></i> Dashboard</li>
			    	<li onClick={() => this.transitionTo('product')}><i className="fa fa-list-alt"></i> Products</li>
			    	<li onClick={() => this.transitionTo('contact-info')}><i className="fa fa-user"></i> Profile</li>
			    	<li onClick={() => this.transitionTo('testing')}><i className="fa fa-flask"></i> Testing</li>
			    </ul>
			</div>
			); 
	}
});

module.exports = LeftMenu;