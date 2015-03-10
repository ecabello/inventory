var React = require('react');
var Navigation = require('react-router').Navigation;

var LeftMenu = React.createClass({
	mixins: [Navigation],
	render : function () {
		return (
			<div className='leftMenu'>
			    <h3>Control panel</h3>
			    <ul>
			    	<li onClick={() => this.transitionTo('category')}>Categorias</li>
			    	<li onClick={() => this.transitionTo('product')}>Productos</li>
			    	<li onClick={() => this.transitionTo('social')}>Social</li>
			    	<li onClick={() => this.transitionTo('locations')}>Locations</li>
			    	<li onClick={() => this.transitionTo('contact-info')}>Contact info</li>
			    </ul>
			</div>
			);
	}
});

module.exports = LeftMenu;