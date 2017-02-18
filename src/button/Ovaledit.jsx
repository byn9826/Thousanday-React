import React, {Component} from 'react';
class Ovaledit extends Component {
    constructor(props) {
        super(props);
		this.state = {
            hoverEdit: false,
            color: this.props.color || "#ef8513"
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
                fontFamily: "Times New Roman",
	            fontSize: "12px",
	            fontWeight: "normal",
	            margin: "0",
	            padding: "0"
            };
        } else {
            containerStyle = {
                float: "right",
                color: this.state.color,
                cursor: "pointer",
                width: "36px",
                height: "16px",
                textAlign: "center",
                fontFamily: "Times New Roman",
	            fontSize: "12px",
	            fontWeight: "normal",
	            margin: "0",
	            padding: "0"
            };
        }
		return (
            <div style={containerStyle} onMouseEnter={this.mouseinEdit.bind(this)} onMouseLeave={this.mouseoutEdit.bind(this)} onClick={this.props.clickEdit.bind(null, 1)}>
                {this.props.value}
            </div>
		);
	}
}
export default Ovaledit;