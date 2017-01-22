import React, {Component} from 'react';
class Vote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			agree: this.props.agree || 0,
			disagree: this.props.disagree || 0,
			interact: (this.props.interact == 'true') || false,
			left: this.props.left || "Agree: ",
			right: this.props.right || "Disagree: ",
			enterLeft: false,
			enterRight: false,
			choice: this.props.choice || 2
		};
	}
	enterLeft() {
		this.setState({enterLeft: true});
	}
	leaveLeft() {
		this.setState({enterLeft: false});
	}
	enterRight() {
		this.setState({enterRight: true});
	}
	leaveRight() {
		this.setState({enterRight: false});
	}
	chooseLeft() {
		if (this.state.choice != 1) {
			this.setState({choice: 1});
			this.props.newChoice(1);
		} else if (this.state.choice == 1) {
			this.setState({choice: 2});
			this.props.newChoice(2);
		}
	}
	chooseRight() {
		if (this.state.choice != "0") {
			this.setState({choice: "0"});
			this.props.newChoice("0");
		} else if (this.state.choice == "0") {
			this.setState({choice: 2});
			this.props.newChoice(2);
		}
	}
	render() {
		let spanStyle = {
			fontFamily: "Times New Roman",
			fontSize: "12px",
			color: "white",
			textAlign: "center"
		};
		let vsStyle = {
			display: "inline-block",
			fontSize: "11px",
			margin: "0 2%",
			color: "black"
		};
		let agreeStyleActive = {
			display: "inline-block",
			borderRadius: "5px",
			border: "1px solid #348964",
			padding: "5px 2%",
			cursor: "pointer",
			color: "black"
		};
		let disagreeStyleActive = {
			display: "inline-block",
			borderRadius: "5px",
			border: "1px solid #5e5c5b",
			padding: "5px 2%",
			cursor: "pointer",
			color: "black"
		};
		let agreeStyleChoose = {
			display: "inline-block",
			borderRadius: "5px",
			backgroundColor: "#348964",
			border: "1px solid #348964",
			padding: "5px 2%",
			cursor: "pointer"
		};
		let disagreeStyleChoose = {
			display: "inline-block",
			borderRadius: "5px",
			backgroundColor: "#5e5c5b",
			border: "1px solid #5e5c5b",
			padding: "5px 2%",
			cursor: "pointer"
		};
		let agreeStylePassive = {
			display: "inline-block",
			borderRadius: "5px",
			backgroundColor: "#348964",
			border: "1px solid #348964",
			padding: "5px 2%"
		};
		let disagreeStylePassive =  {
			display: "inline-block",
			borderRadius: "5px",
			backgroundColor: "#5e5c5b",
			border: "1px solid #5e5c5b",
			padding: "5px 2%"
		};
		let agreeInside, disagreeInside;
		if (this.state.interact) {
			if(this.state.enterLeft) {
				agreeInside = (
					<div style={agreeStyleChoose} onMouseLeave={this.leaveLeft.bind(this)} onClick={this.chooseLeft.bind(this)}>
						{this.state.left}
					</div>
				);
				disagreeInside = (
					<div style={disagreeStyleActive}>
						{this.state.right}
					</div>
				);
			} else if (this.state.enterRight) {
				agreeInside = (
					<div style={agreeStyleActive}>
						{this.state.left}
					</div>
				);
				disagreeInside = (
					<div style={disagreeStyleChoose} onMouseLeave={this.leaveRight.bind(this)} onClick={this.chooseRight.bind(this)}>
						{this.state.right}
					</div>
				);
			} else if (!this.state.enterLeft && !this.state.enterRight) {
				if (this.state.choice == "2") {
					agreeInside = (
						<div style={agreeStyleActive} onMouseEnter={this.enterLeft.bind(this)}>
							{this.state.left}
						</div>
					);
					disagreeInside = (
						<div style={disagreeStyleActive} onMouseEnter={this.enterRight.bind(this)}>
							{this.state.right}
						</div>
					);
				} else if (this.state.choice == "1") {
					agreeInside = (
						<div style={agreeStyleChoose} onMouseEnter={this.enterLeft.bind(this)}>
							{this.state.left}
						</div>
					);
					disagreeInside = (
						<div style={disagreeStyleActive} onMouseEnter={this.enterRight.bind(this)}>
							{this.state.right}
						</div>
					);
				} else if (this.state.choice == "0") {
					agreeInside = (
						<div style={agreeStyleActive} onMouseEnter={this.enterLeft.bind(this)}>
							{this.state.left}
						</div>
					);
					disagreeInside = (
						<div style={disagreeStyleChoose} onMouseEnter={this.enterRight.bind(this)}>
							{this.state.right}
						</div>
					);
				}
			}
		} else {
			agreeInside = (
				<div style={agreeStylePassive}>
					{this.state.left}: {this.state.agree}
				</div>
			);
			disagreeInside = (
				<div style={disagreeStylePassive}>
					{this.state.right}: {this.state.disagree}
				</div>
			);
		}
		return (
			<span style={spanStyle}>
				{agreeInside}
				<div style={vsStyle}>vs</div>
				{disagreeInside}
			</span>
		);
	}
}
export default Vote;