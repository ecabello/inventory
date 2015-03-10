var React = require('react');

var LoginLocal =  React.createClass({
	render : function () {
		return (
			<form style={{ margin : '5px 0px'}}>
				<div className="form-group">
				    <label htmlFor="exampleInputEmail1">Email address</label>
				    <input type="email" className="form-control large" id="exampleInputEmail1" placeholder="Enter email" />
				</div>
				<div className="form-group">
				    <label htmlFor="exampleInputPassword1">Password</label>
				    <input type="password" className="form-control large" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<input type="submit" className="button right w-mid btn-login" value="Login" />
			</form>	
			);
	}
});
module.exports = LoginLocal;

