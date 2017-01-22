import React, {Component} from 'react';
class Inputbox extends Component {
	constructor(props) {
		super(props);
		this.state = {
      		width: this.props.width || "100%",
			border: this.props.border || "1px solid #1d4077",
    		fontSize: this.props.font ||"13px",
      		content: this.props.content,
      		count: parseInt(this.props.max) - this.props.content.length,
      		length: parseInt(this.props.max)
		};
	}
	editInput(event) {
		let changedInput = event.target.value.substr(0, this.state.length);
		this.setState({content: changedInput});
		this.setState({count: this.state.length - changedInput.length});
	}
	render() {
		let spanStyle = {
			width: this.state.width,
			display: "inline-block"
		};
		let inputStyle = {
			width: "100%",
			border: this.state.border,
			fontFamily: "Times New Roman",
			fontSize: this.state.fontSize,
			paddingLeft: "1%",
			paddingTop: "3px",
			paddingBottom: "3px",
			outline: "none"
		};
		let countStyle = {
			display: "inline-block",
			fontFamily: "Times New Roman",
			fontSize: "11px",
			width: "100%"
		};
		return(
			<span style={spanStyle}>
				<input style={inputStyle} value={this.state.content} placeholder={this.props.hint} onChange={this.editInput.bind(this)} />
				<span style={countStyle}>{this.state.count}/{this.state.length}</span>
			</span>
		);
	}
}
export default Inputbox;
