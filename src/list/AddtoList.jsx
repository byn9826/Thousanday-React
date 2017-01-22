import React, {Component} from 'react';
class AddtoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
    		width: this.props.width || "100%",
      		choice: this.props.choice || []
		};
	}
	clickList(num) {
    	let choose = this.state.choice;
    	let i = num;
    	if(choose[i] == 1) {
    		choose[i] = 0;
		} else {
      		choose[i] = 1;
    	}
    	this.setState({choice: choose});
	}
	render() {
    	let spanStyle = {
      		width: this.state.width,
      		display: "inline-block",
      		borderLeft: "2px solid black"
    	};
		let title;
		let titleStyle = {
			display: "block",
      		width: "94%",
      		marginLeft: "3%",
      		marginBottom: "10px",
      		textAlign: "left",
      		fontFamily: "Times New Roman",
      		fontSize: "13px",
      		fontWeight: "bold"
    	};
    	if (this.props.title) {
      		title = (<div style={titleStyle}>{this.props.title}</div>);
    	}
    	let options = [];
		let optionStyle = {
      		width: "94%",
      		marginLeft: "3%",
      		paddingTop: "5px",
      		paddingBottom: "5px",
      		backgroundColor: "#1d4077",
      		textAlign: "center",
      		borderRadius: "3px",
      		color: "white",
      		marginBottom: "5px",
      		fontFamily: "Times New Roman",
      		fontSize: "12px",
      		cursor: "pointer"
    	};
		let changeStyle = {
			display: "block",
			width: "100%"
		};
		let chooseStyle = {
			display: "inline-block",
      		width: "84%",
      		marginLeft: "3%",
      		paddingTop: "5px",
      		paddingBottom: "5px",
      		backgroundColor: "#912a2a",
      		textAlign: "center",
      		borderRadius: "3px",
      		color: "white",
      		marginBottom: "5px",
      		fontFamily: "Times New Roman",
      		fontSize: "12px",
			cursor: "pointer"
    	};
		let checkStyle = {
			display: "inline-block",
			width: "10%",
			fontFamily: "Times New Roman",
      		fontSize: "12px",
			textAlign: "center"
		};
    	for(var i = 0; i < this.props.content.length; i++) {
      		let oneOption = this.props.content[i];
			if(this.state.choice[i] == 1) {
				options.push(
					<div style={changeStyle} key={"kdupsertlist"+i} onClick={this.clickList.bind(this, i)}>
						<div style={chooseStyle}>{oneOption}</div>
						<span style={checkStyle}>✓</span>
					</div>
				);
			}
			else {
				options.push(<div style={optionStyle} key={"kdupsertlist"+i} onClick={this.clickList.bind(this,i)}>{oneOption}</div>);
			}
    	}
		return (
			<span style={spanStyle}>
        		{title}
        		{options}
			</span>
		);
	}
}
export default AddtoList;