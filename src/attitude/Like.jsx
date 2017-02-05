import React, {Component} from 'react';
class Like extends Component {
    constructor(props) {
        super(props);
		this.state = {
            liked: this.props.liked || "false",
            hover: false
		};
	}
    clickLike() {
        let total = parseInt(this.state.agree);
        if (this.state.liked == "true") {
            this.props.newTotal(-1);
            this.setState({liked: "false"});
        } else {
            this.props.newTotal(1);
            this.setState({liked: "true"});
        } 
        
    }
    enterHeart() {
        this.setState({hover: "true"});
    }
    leaveHeart() {
        this.setState({hover: "flase"});
    }
    render() {
        let lightHeart = {
            backgroundColor: "#f2aa98",
            borderRadius: "3px",
            padding: "1px 4px",
            color: "white",
            cursor: "pointer",
            fontSize: "14px",
            fontFamily: "Times New Roman"
        };
        let darkHeart = {
            backgroundColor: "#e51010",
            borderRadius: "3px",
            padding: "1px 4px",
            color: "white",
            cursor: "pointer",
            fontSize: "14px",
            fontFamily: "Times New Roman"
        };
        let numStyle = {
            fontFamily: "Times New Roman",
            fontSize: "16px",
            marginLeft: "5px"
        };
        let heart;
        if (this.state.liked == "true" || (this.state.liked == "false" && this.state.hover == "true")) {
            heart = (
                <span style={darkHeart} onClick={this.clickLike.bind(this)} onMouseLeave={this.leaveHeart.bind(this)}>❤</span>
            );
        } else {
            heart = (
                <span style={lightHeart} onClick={this.clickLike.bind(this)} onMouseEnter={this.enterHeart.bind(this)}>❤</span>
            );
           
        }
        let total;
        total = (<span style={numStyle}>{this.props.agree}</span>);
		return (
            <span>
                {heart}
                {total}
            </span>
		);
	}
}
export default Like;