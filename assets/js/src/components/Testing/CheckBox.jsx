var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var CheckBox = React.createClass({ 
	getInitialState : function () {
		return {
			checked : false
		};
	},
	render : function () {
		var style = {
			checkboxContainer : {
				width : '100%',
				cursor : 'pointer'
			},
			checkbox : {
				display : 'inline-block',
				width : 25,
				height : 25,
				border : '2px solid #0e74af',
				borderRadius : 5,
				position : 'relative',
				top : 5,
				marginRight : 5,
				backgroundColor : this.state.checked ? '#0e74af' : 'white'

			},
			icon : {
				position : 'absolute !important',
				fontSize : 20,
				color : 'white'
			}	
		}
		return (
			<div className="checkboxContainer" style={style.checkboxContainer}>
				<div className="checkbox" style={style.checkbox} onClick={ () => this.setState({ checked : !this.state.checked })}>
					<ReactCSSTransitionGroup transitionName="fade">
						{ this.state.checked ? <i className="fa fa-check" style={ style.icon }></i> : null }
					</ReactCSSTransitionGroup>	
				</div>
				<span className="checkboxLabel" onClick={ () => this.setState({ checked : !this.state.checked })}>
					{ this.props.labelText }
				</span>
			</div>
			);
	},
	checked : function () {
		return this.state.checked;		
	}
});
module.exports = CheckBox;