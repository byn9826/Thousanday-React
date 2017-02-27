import React, {Component} from 'react';
class Inputbox extends Component {
	constructor(props) {
		super(props);
		this.state = {
      		width: this.props.width || "100%",
			border: this.props.border || "2px solid #f7d7b4",
    		fontSize: this.props.font ||"15px",
      		content: this.props.content,
      		count: parseInt(this.props.max) - this.props.content.length,
      		length: parseInt(this.props.max),
			id: this.props.id || null
		};
	}
	editInput(event) {
		let changedInput = event.target.value.substr(0, this.state.length);
		this.setState({content: changedInput, count: this.state.length - changedInput.length});
	}
	render() {
		let spanStyle = {
			width: this.state.width,
			display: "inline-block",
			verticalAlign: "middle"
		};
		let inputStyle = {
			display: "block",
			width: "96%",
			border: this.state.border,
			borderRadius: "5px",
			fontFamily: "Times New Roman",
			fontSize: this.state.fontSize,
			paddingLeft: "2%",
			paddingTop: "3px",
			paddingBottom: "3px",
			outline: "none"
		};
		let countStyle = {
			display: "block",
			marginTop: "3px",
			fontFamily: "Times New Roman",
			fontSize: "11px",
			width: "98%",
			paddingLeft: "2%"
		};
		return(
			<span style={spanStyle}>
				<input id={this.state.id} style={inputStyle} value={this.state.content} placeholder={this.props.hint} onChange={this.editInput.bind(this)} />
				<span style={countStyle}>{this.state.count} / {this.state.length}</span>
			</span>
		);
	}
}
export default Inputbox;
