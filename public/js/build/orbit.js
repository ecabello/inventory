var React = require('react');  
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ImageOrbit = React.createClass({displayName: 'ImageOrbit',
  propTypes: {
    imageSrc: React.PropTypes.string.isRequired
  },
  render: function() {
    var css = {
    	height          : '400px',
    	width    		: '100%',
    	position 		: 'absolute',
    	top 			: '0px',
    	left 			: '0px',
    	backgroundImage : 'url('+ this.props.imageSrc +')',
    	backgroundPosition : 'center',
    	backgroundSize	: 'cover'
    }
    return (
      React.createElement("div", null, 
        React.createElement(ReactCSSTransitionGroup, {transitionName: "orbit"}, 
          React.createElement("div", {key: this.props.imageSrc, style: css})
        )
      )
    );
  }
});

var Orbit = React.createClass({displayName: 'Orbit',
	getDefaultProps : function () {
		return {
			urls : ["images/orbit/image_1.jpg","images/orbit/image_2.jpg","images/orbit/image_3.jpg","images/orbit/image_4.jpg"]
		};
	},
	getInitialState : function () {
		return { index : 0, over : false };
	},
	render : function () {
		var css = {
			position : 'relative'
		};
		var controlsCss = {
			display : this.state.over ? 'block' : 'none'
		}

		return (
			React.createElement("div", {className: "Orbit", style: css, onMouseEnter: this.mouseEnter, onMouseLeave: this.mouseLeave}, 
				React.createElement(ImageOrbit, {imageSrc: this.props.urls[this.state.index]}), 
				React.createElement("div", {className: "orbitControls", style: controlsCss}, 
		        	React.createElement("div", {className: "prev", onClick: this.prevImg}), 
		        	React.createElement("div", {className: "next", onClick: this.nextImg})
		        )	
	        )	
			);
	},
	nextImg : function () {
		this.setState({ index : this.state.index < this.props.urls.length - 1 ? this.state.index + 1 : 0 });
	},
	prevImg : function () {
		this.setState({ index : this.state.index > 0 ? this.state.index - 1  : this.props.urls.length - 1 });
	},
	mouseEnter : function () {
		console.log('Enter');
		this.setState({ over : true });
	},
	mouseLeave : function () {
		console.log('Leave');
		this.setState({ over : false });
	}
});
module.exports = Orbit;