var React = require('react');
var FaceBookButton = require('./components/facebookButton');
var TwitterButton = require('./components/twitterButton');
var LineSeparator = require('./components/lineSeparator');
var LoginLocal = require('./components/loginLocal');

var LoginPage = React.createClass({
	render : function () {
		var cssT = {
			lineHeight: 1.6,
			fontFamily: 'Whitney SSm A,Whitney SSm B,Helvetica',
			color: '#202626',
			fontWeight: 100
		}
		return (
			<div className='row'>
				<div className='small-8 columns small-centered'>
					<h1 style={cssT}>Login</h1>
					<TwitterButton />
					<FaceBookButton />
					<LineSeparator text='or'/>
					<LoginLocal />
				</div>
			</div>
			);
	}
});
module.exports = LoginPage;