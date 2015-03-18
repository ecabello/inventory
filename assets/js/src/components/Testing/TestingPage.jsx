var React = require('react');
var TopHeader = require('./../Texts/TopHeader');


/* Component Testing !! */
var Lightbox = require('./Lightbox');

var TestingPage = React.createClass({
	getInitialState :  function () {
		return {
			open : false
		}
	},
	render : function () {
		return (
			<div className="small-12 columns">
				<TopHeader text="Testing Side" />
				<button onClick={ () => this.setState({ open : true }) }>Open Lightbox</button>
				<Lightbox show={this.state.open}  _onClose={ () => this.setState({ open : false }) }>
					Hola Rey !
				</Lightbox>
			</div>
			);
	}
});
module.exports = TestingPage;