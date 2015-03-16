var React = require('react');
var Loader = require('./../Loader');
var $ = require('jquery');

var LoadImage = React.createClass({
	getInitialState : function () {
		return { value : 0 }; // searching...
	},
	componentDidMount : function () {
		if (!this.props.id) {
			this.setState({	value : 1 });
		} else {
			$.ajax({
				url : 'file/' + this.props.id,
				type : 'GET'
			}).done(function (imgObj) {
				this.setState({
					value : 2,
					url   : imgObj.url
				});
			}.bind(this));
		}
	},
	render : function () {
		var content; 
		switch (this.state.value) {
			case 0:
				content = <Loader />;
				break;
			case 1:
				content = <h4>No IMG</h4>;
				break;
			case 2 : 
				content =  <span><img src={this.state.url} /></span>	
		}
		return (
			<div className="">
			 	{ content }
			</div>
			);
	}
});
module.exports = LoadImage;