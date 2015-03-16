var React = require('react');
var $ = require('jquery');

var Uploader = React.createClass({
	getInitialState : function () {
		return {
			msg : '',
			msgClass  : 'hide'
		};
	},
	render : function () {
		return (
			<form encType="multipart/form-data" method="POST" ref="form">
				<input type="file" onChange={this.uploadFile} name="uploadFile" ref="file" />
				<span className={this.state.msgClass}>{ this.state.msg }</span>
			</form>
			);
	},
	uploadFile : function () {
		var data = new FormData(this.refs.form.getDOMNode());
	    $.ajax({
			url : this.props.url,
			data : data,
			type : 'POST',
			cache: false,
	        dataType: 'json',
	        processData: false, 
	        contentType: false,
	        beforeSend : function () {
	        	this.setState({
					msgClass : 'success-text',
					msg : 'Uploading...'
				});
				if (this.props.beforeSend)
					this.props.beforeSend();
	        }.bind(this)
		}).done(function (data) {
			console.log(data);
			this.setState({
				msgClass : 'success-text',
				msg : 'Done'
			});
			if (this.props.done)
			setTimeout(this.props.done.bind(undefined,data.files[0]),3000);
		}.bind(this)).fail(function () {
			this.setState({
				msgClass : 'alert-text',
				msg : 'Error : The file can not send properly'
			});
			if (this.props.fail)
					this.props.fail();
		}.bind(this));
	}
});
module.exports = Uploader;