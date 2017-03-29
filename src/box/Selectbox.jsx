import React, {Component} from 'react';
class Selectbox extends Component {
    constructor(props) {
        super(props);
		this.state = {
            width: this.props.width || "100%",
            height: this.props.hegith || "380px",
            max: parseInt(this.props.max) || 1,
            decisions: this.props.decisions? JSON.parse(JSON.stringify(this.props.decisions)):[],
            fontFamily: this.props.fontFamily || "Times new roman",
            scroll: this.props.scroll || "on",
            changed: false
		};
	}
    chooseOption(index) {
        let decisions = this.state.decisions;
        if (this.state.decisions.indexOf(index) === -1 && this.state.decisions.length < this.state.max) {
            decisions.push(index);
            this.setState({decisions: decisions, changed: true});
        } else if (this.state.decisions.indexOf(index) !== -1) {
            decisions.splice(this.state.decisions.indexOf(index), 1);
            this.setState({decisions: decisions, changed: true});
        }
    }
    render() {
        let containerStyle;
        if (this.state.scroll == "on") {
            containerStyle = {
                display: "block",
                width: this.state.width,
                height: this.state.height,
                backgroundColor: "#f7d7b4",
                borderRadius: "8px",
                overflowY: "scroll",
                paddingLeft: "15px",
                paddingRight: "15px",
                paddingBottom: "10px",
                textAlign: "center"
            };
        } else {
            containerStyle = {
                display: "block",
                width: this.state.width,
                height: this.state.height,
                backgroundColor: "#f7d7b4",
                borderRadius: "8px",
                paddingLeft: "15px",
                paddingRight: "15px",
                paddingBottom: "10px",
                textAlign: "center"
            };
        }
        let containerTitleStyle= {
            display: "block",
			width: "auto",
			height: "35px",
			lineHeight: "35px",
			verticalAlign: "middle",
			backgroundColor: "#ef8513",
			borderRadius: "2px",
			marginLeft: "-15px",
			marginRight: "-15px",
			marginBottom: "15px"
        };
        let containerOptionStyle = {
            display: "inline-block",
			backgroundColor: "#f7f9fc",
			verticalAlign: "top",
			margin: "10px 2%",
			borderRadius: "8px",
			padding: "10px 2%",
			textAlign: "center",
			cursor: "pointer"
        };
        let containerSetStyle = {
            display: "inline-block",
			backgroundColor: "#a8b1c1",
			verticalAlign: "top",
			margin: "10px 2%",
			borderRadius: "8px",
			padding: "10px 2%",
			textAlign: "center",
			cursor: "pointer"
        };
        let optionImageStyle = {
            display: "inline-block",
			width: "50px",
			height: "50px",
			borderRadius: "25px",
        };
        let optionNameStyle = {
            display: "block",
			fontWeight: "bold",
			margin: "10px 0",
            fontFamily: this.state.fontFamily,
            fontSize: "14px"
        };
        let optionDescStyle = {
            display: "block",
			margin: "10px 0",
			color: "#052456",
            fontFamily: this.state.fontFamily,
            fontSize: "12px"
        };
        let decisionStyle = {
            float: "left",
			marginLeft: "3%",
			borderRadius: "5px",
			verticalAlign: "middle",
			color: "white",
            fontFamily: this.state.fontFamily,
            fontSize: "14px"
        };
        let closeStyle = {
            float: "right",
			verticalAlign: "middle",
			marginRight: "3%",
			color: "white",
			cursor: "pointer",
			fontWeight: "bold"
        };
        let decisions;
        if (this.state.decisions.length > 0) {
            decisions = this.state.decisions.map((decision, index) =>
                <div key={"thousandaychoic" + index} style={decisionStyle}>{"➲ " + this.props.options[decision][0]}</div>
            );
        }
        let options = [];
        for (let i = 0; i < this.props.options.length; i++) {
            if (this.state.decisions.indexOf(i) === -1) {
                options[i] = (
                    <div key={"thousandayselectbox" + i} style={containerOptionStyle} onClick={this.chooseOption.bind(this, i)}>
                        <img style={optionImageStyle} alt={this.props.options[i][0]} src={this.props.options[i][1]} />
                        <div style={optionNameStyle}>{this.props.options[i][0]}</div>
                        <div style={optionDescStyle}>{this.props.options[i][2]}</div>
                    </div>
                )
            } else {
                options[i] = (
                    <div key={"thousandayselectbox" + i} style={containerSetStyle} onClick={this.chooseOption.bind(this, i)}>
                        <img style={optionImageStyle} alt={this.props.options[i][0]} src={this.props.options[i][1]} />
                        <div style={optionNameStyle}>{this.props.options[i][0]}</div>
                        <div style={optionDescStyle}>{this.props.options[i][2]}</div>
                    </div>
                )
            }
        }
		return (
            <section style={containerStyle}>
                <div style={containerTitleStyle} >
                    {decisions}
                    <div style={closeStyle} onClick={this.props.closeBox.bind(null, this.state.decisions, this.state.changed)}>✗</div>
                </div>
                {options}
            </section>
		);
	}
}
export default Selectbox;