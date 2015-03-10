var React = require('react');
var ButtonGroup = require('./ButtonGroup.js');

var Actions = React.createClass({
	render : function () {
		return (
			<div className='row'>
				<ButtonGroup>
					<a className='btn-action remove' href='#'><i className="fa fa-times"></i> remove</a>
					<a className='btn-action edit' href='#'><i className="fa fa-pencil-square-o"></i> edit</a>		
				</ButtonGroup>
			</div>
			);
	}
});
module.exports = Actions; 