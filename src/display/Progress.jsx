import React, { Component } from 'react';
class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: this.props.width || "100%",
            height: this.props.height ||"18px"
        };
    }
    render() {
        let containerStyle = {
            display: "inline-block",
            width: this.state.width,
            height: this.state.height,
            lineHeight: this.state.height,
            padding: "0",
            textAlign: "center",
            verticleAlign: "middle",
            fontFamily: "Times New Roman",
            fontSize: "9px",
            backgroundColor: "#f7f8f9",
            border: "1px solid #dee2e8",
            borderRadius: "5px",
            overflow: "hidden"
        };
        let hintStyle = {
            position: "relative",
            zIndex: "3"
        };
        let backStyle = {
            position: "relative",
            top: "-" + this.state.height,
            width: this.props.progress / this.props.max * 100 + "%",
            height: this.state.height,
            backgroundColor: "#b9d17f",
            borderRadius: "3px",
            zIndex: "2"
        };
        let showProgress;
        if (this.props.percentage=="false") {
            showProgress = this.props.progress + " / " + this.props.max;
        } else {
            showProgress = parseInt(this.props.progress / this.props.max * 100) + " %";
        }
        return (
            <div id={this.props.id} style={containerStyle}>
                <div style={hintStyle}>{showProgress}</div>
                <div style={backStyle}></div>
            </div>
        );
    }
}
export default Progress;