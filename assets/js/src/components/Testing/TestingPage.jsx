var React = require('react');
var TopHeader = require('./../Texts/TopHeader');
var CheckBox = require('./CheckBox');
var RadioButton = require('./RadioButton');


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
				<CheckBox labelText="Label No. 1"/>
				<RadioButton labelText="Radio No. 1" ref="radio1"/>
				<Lightbox show={this.state.open}  _onClose={ () => this.setState({ open : false }) }>
					Hola Rey !
				</Lightbox>
				<br />
				<button onClick={ () => this.refs.radio1.checked = true }>Set Radio</button>
				<button onClick={ () => alert(this.refs.radio1.checked) }>Get Radio</button>
			</div>
			);
	}
});
module.exports = TestingPage;