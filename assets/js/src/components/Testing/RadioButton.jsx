var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var RadioButton = React.createClass({ 
	componentDidMount : function () {
		Object.defineProperty(this,'checked',{
			set : function (value) {
				this.setState({ checked : !!value });
			},
			get : function () {
				return this.state.checked;
			}
		});
	},
	getInitialState : function () {
		return {
			checked : false
		};
	},
	render : function () {
		var style = {
			RadioContainer : {
				width : '100%',
				cursor : 'pointer'
			},
			Radio : {
				display : 'inline-block',
				width : 25,
				height : 25,
				border : '2px solid #0e74af',
				borderRadius : '50%',
				position : 'relative',
				top : 5,
				marginRight : 5,

			},
			icon : {
				position : 'absolute !important',
				fontSize : 15,
				color : '#0e74af',
				top: 3,
  				left: 4
			}	
		}
		return (
			<div className="checkboxContainer" style={style.RadioContainer}>
				<div className="checkbox" style={style.Radio} onClick={ () => this.setState({ checked : !this.state.checked })}>
					<ReactCSSTransitionGroup transitionName="fade">
						{ this.state.checked ? <i className="fa fa-circle" style={ style.icon }></i> : null }
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
module.exports = RadioButton;