var React = require('react');
var TitlePage = require('./titlepage.js');
var Orbit = require('./orbit.js');
var TodoList = require('./todo.js');

var HomePage = React.createClass({displayName: 'HomePage',
 	render : function () {
 		return (
 			React.createElement("div", {className: "row"}, 
 				React.createElement(TitlePage, {title: "home page"})
 			)
 			);
 	}
});
module.exports = HomePage;