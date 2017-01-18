import React, {Component} from 'react';
class Rate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rate: parseInt(this.props.rate),
			max: this.props.max || 5,
			interact: (this.props.interact=='true') || false,
			color: this.props.color || "orange",
			font: this.props.font || "18px"
		};
	}
	mouseOver(num){
		this.setState({rate: parseInt(num)});
	}
	render() {
		let containerStyle;
		if(this.state.interact) {
			containerStyle = {
				color: this.state.color,
				fontSize: this.state.font,
				cursor :"pointer",
				fontFamily:"Times New Roman"
			};
		}
		else {
			containerStyle = {
				color: this.state.color,
				fontSize: this.state.font,
				fontFamily:"Times New Roman"
			};
		};
		let stars = [];
		let initRate = parseInt(this.props.rate);
		for (var i = 1; i <= initRate; i++){
			if (this.state.interact) {
				stars.push(<span key={i} id={i} onMouseOver={this.mouseOver.bind(this, i)} onClick={this.props.rateChange.bind(null, this.state.rate)} >★</span>);
			}
			else {
				stars.push(<span key={i}>★</span>);
			}
		}
		for(var j = initRate + 1; j <= this.state.max; j++){
			if(this.state.interact) {
				stars.push(<span key={j} id={j} onMouseOver={this.mouseOver.bind(this, j)} onClick={this.props.rateChange.bind(null, this.state.rate)} >☆</span>);
			}
			else {
				stars.push(<span key={j}>☆</span>);
			}
		}
		return(
			<span style={containerStyle}>
				{stars}
			</span>
		)
	}
};
export default Rate;
