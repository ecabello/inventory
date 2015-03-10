var React = require('react');
var LeftMenu = require('./components/LeftMenu');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;


var cpanel = React.createClass({
	render : function () {
		return (
			<div className='row content-container'>
				<div className='small-3 columns menu-container'>
					<LeftMenu />
				</div>
				<div className='small-9 columns sub-content-container'>
					<RouteHandler />
				</div>	
			</div>
			);
	}
});
module.exports = cpanel;
