import React, {Component} from 'react';
class Ovaledit extends Component {
    constructor(props) {
        super(props);
		this.state = {
            hoverEdit: false,
            color: this.props.color || "#ef8513",
            font: this.props.fontFamily || "Times New Roman"
		};
	}
    mouseinEdit () {
        this.setState({hoverEdit: true});
    }
    mouseoutEdit() {
        this.setState({hoverEdit: false});
    }
    render() {
        let containerStyle;
        if (this.state.hoverEdit) {
            containerStyle = {
                float: "right",
                color: this.state.color,
                borderBottom: "1px solid " + this.state.color,
                width: "36px",
                height: "16px",
                textAlign: "center",
                borderRadius: "50%",
                cursor: "pointer",
                fontFamily: this.state.font,
	            fontSize: "12px",
	            fontWeight: "normal",
	            margin: "0",
	            padding: "0",
                verticalAlign: "top"
            };
        } else {
            containerStyle = {
                float: "right",
                color: this.state.color,
                cursor: "pointer",
                width: "36px",
                height: "16px",
                textAlign: "center",
                fontFamily: this.state.font,
	            fontSize: "12px",
	            fontWeight: "normal",
	            margin: "0",
	            padding: "0"
            };
        }
        let ovalButton;
        if (this.props.href) {
            ovalButton = 
                <div style={containerStyle} onMouseEnter={this.mouseinEdit.bind(this)} onMouseLeave={this.mouseoutEdit.bind(this)} >
                    <a href={this.props.href}>{this.props.value}</a>
                </div>
        } else {
            ovalButton = 
                <div style={containerStyle} onMouseEnter={this.mouseinEdit.bind(this)} onMouseLeave={this.mouseoutEdit.bind(this)} onClick={this.props.clickEdit.bind(null, 1)}>
                    {this.props.value}
                </div>
        }
		return ovalButton;
	}
}
export default Ovaledit;