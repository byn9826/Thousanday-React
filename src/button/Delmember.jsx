import React, {Component} from 'react';
class Delmember extends Component {
    constructor(props) {
        super(props);
		this.state = {
            width: parseInt(this.props.width) || 100,
            height: parseInt(this.props.height) || 100,
            margin: parseInt(this.props.marginLR) || 10,
            font: this.props.fontFamily || "Times New Roman",
            rotate: 0
		};
	}
    componentDidUpdate() {
        if (this.state.rotate === 1) {
            setTimeout(() => { this.setState({rotate: 2}); }, 50);
        } else if (this.state.rotate ===2) {
            setTimeout(() => { this.setState({rotate: 3}); }, 50);
        } else if (this.state.rotate ===3) {
            setTimeout(() => { this.setState({rotate: 4}); }, 50);
        } else if (this.state.rotate ===4) {
            setTimeout(() => { this.setState({rotate: 5}); }, 50);
        } else if (this.state.rotate ===5) {
            this.props.clickDel(this.props.index);
        }
    }
    delIt() {
        this.setState({rotate: 1});
    }
    render() {
        let containerStyle = {
			display: "inline-block",
			width: this.state.width + "px",
			marginLeft: this.state.margin + "px",
			marginRight: this.state.margin + "px",
            height: this.state.height + "px",
            verticalAlign: "top"
		};
		let containerImgStyle 
        if (this.state.rotate === 1) {
            containerImgStyle = {
                display: "block",
                width: "100%",
                borderRadius: "8px",
                transform: "rotate(-7deg)"
            };
        } else if (this.state.rotate === 0 || this.state.rotate === 2 || this.state.rotate === 4) {
            containerImgStyle = {
                display: "block",
                width: "100%",
                borderRadius: "8px",
                transform: "rotate(0deg)"
            };
        } else if (this.state.rotate === 3) {
            containerImgStyle = {
                display: "block",
                width: "100%",
                borderRadius: "8px",
                transform: "rotate(7deg)"
            };
        }
        let containerDelStyle = {
            position: "relative",
            float: "right",
            fontFamily: this.state.font,
            fontSize: "20px",
            top: "-" + this.state.width + "px",
            color: "black",
            verticalAlign: "middle",
            lineHeight: "14px",
            width: "16px",
            height: "16px",
            marginTop: "4px",
            marginRight: "4px",
            backgroundColor: "#efeaea",
            borderRadius: "8PX",
            textAlign: "center",
            border: "1px solid #e5e5e5",
            cursor: "pointer"
        };
        let compo;
        if (this.state.rotate == 5) {
            compo = null;
        } else {
            compo = <div style={containerStyle}>
                        <img style={containerImgStyle} src={this.props.profile} />
                        <span style={containerDelStyle} onClick={this.delIt.bind(this)}>-</span>
                    </div>
        }
		return compo;
	}
}
export default Delmember;