var React = require('react');
var TitlePage = require('./titlepage.js');
var Orbit = require('./orbit.js');
var TodoList = require('./todo.js');

var HomePage = React.createClass({
 	render : function () {
 		return (
 			<div className="row">
 				<TitlePage title="home page" />
 			</div>
 			);
 	}
});
module.exports = HomePage;