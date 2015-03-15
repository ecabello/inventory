var React = require('react');
var Navigation = require('react-router').Navigation;
var ButtonGroup = require('./ButtonGroup.js');

var Actions = React.createClass({
	mixins : [Navigation],
	render : function () {
		return (
			<div className='row'>
			    <ButtonGroup>
					<a className='btn-action remove' onClick={ () => this.props.removeCb(this.props.id) }><i className="fa fa-times"></i> remove</a>
					<a className='btn-action edit' onClick={ () => this.transitionTo('update-category', {id: this.props.id}) }><i className="fa fa-pencil-square-o"></i> edit</a>		
				</ButtonGroup>
			</div>
			);
	}
});
module.exports = Actions; 