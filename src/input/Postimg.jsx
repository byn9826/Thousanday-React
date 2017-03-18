import React, {Component} from "react";
import camera from "./glyphicons-camera.png";

class Inputarea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: this.props.width || "100%",
      		border: this.props.border || "2px solid #f7d7b4",
      		fontSize: this.props.fontSize || "14px",
     		content: this.props.content || "",
      		count: parseInt(this.props.max) - this.props.content.length,
      		length: parseInt(this.props.max),
			fontFamily: this.props.fontFamily || "Times New Roman",
			error: "",
			rawUrl: null,
			title: this.props.title || null,
			reset: this.props.reset
		};
	}
	componentDidUpdate() {
		if (this.state.reset != this.props.reset) {
			this.setState({content: "", rawUrl: null, reset: this.props.reset, error: "Success!"});
		}
	}
	editInput(event) {
		let changedInput = event.target.value.substr(0, this.state.length);
		this.setState({content: changedInput});
		if (changedInput.replace(/^\s+/, '').replace(/\s+$/, '') !== "" && this.state.error !== "") {
			this.setState({error: ""});
		}
      	this.setState({count: this.state.length - changedInput.length});
	}
	loadImg(event) {
		event.preventDefault();
		let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = () => {
            this.setState({rawUrl: reader.result});
			if (this.state.error !== "") {
				this.setState({error: ""});
			}
        }
        reader.readAsDataURL(file);
	}
	submitPost() {
		let content = this.state.content.replace(/^\s+/, '').replace(/\s+$/, '');
		if (content === "") {
			this.setState({error: "Please say something"});
		} else if (!this.state.rawUrl) {
			this.setState({error: "Please upload an image"});
		} else {
			let url = this.state.rawUrl;
			let type = url.split(',')[0];
			type = type.split(':')[1];
			type = type.split(';')[0];
			if (type == 'image/jpeg' || type == 'image/png') {
				let src = url.split(',')[1];
				src = window.atob(src);
				let blobSrc = new Uint8Array(src.length);
				for (let i = 0; i < src.length; i++) {
					blobSrc[i] = src.charCodeAt(i);
				};
				let image = new Blob([blobSrc], {type: type});
				let message = this.state.content;
				this.props.submitImg(message, image);
			} else {
				this.setState({error: "File type not support"});
			}
		}
	}
	render() {
		let titleStyle = {
			display: "block",
			fontSize: "15px",
			fontWeight: "bold",
			fontFamily: this.state.fontFamily,
			color: "#ef8513",
			marginBottom: "10px"
		};
		let spanStyle = {
			width: this.state.width,
			display: "inline-block",
			verticalAlign: "top",
			backgroundColor: "#f7f9fc",
			borderRadius: "6px",
			padding: "20px 3%",
			width: "94%"
		};
		let inputStyle = {
			display: "block",
			width: "98%",
			paddingTop: "5px",
			paddingBottom: "5px",
			border: this.state.border,
			height: "50px",
			fontFamily: this.state.fontFamily,
			fontSize: this.state.fontSize,
			paddingLeft: "1%",
			outline: "none",
			borderRadius: "5px",
			resize: "none",
		};
		let lineStyle = {
			display: "block",
			width: "100%",
			marginTop: "5px",
			lineHeight: "20px",
			verticalAlign: "middle",
			overflow: "auto"
		};
		let cameraStyle = {
			float: "left",
			marginLeft: "10px",
			filter: "opacity(50%)",
			width: "20px",
			cursor: "pointer"
		};
		let postStyle = {
			float: "right",
			backgroundColor: "#934c4c",
			borderRadius: "3px",
			textAlign: "center",
			color: "white",
			fontSize: "11px",
			fontFamily: this.state.fontFamily,
			padding: "2px 5px",
			marginRight: "10px",
			cursor: "pointer"
		};
		let errorStyle = {
			float: "right",
			fontFamily: this.state.fontFamily,
			fontSize: "11px",
			marginRight: "15px",
			color: "red"
		};
		let countStyle = {
			float: "left",
			fontFamily: this.state.fontFamily,
			fontSize: "11px",
			marginLeft: "10px"
		};
		let fileStyle = {
			position: "relative",
			width: "20px",
			height: "12px",
			left: "-76px",
			cursor: "pointer",
			opacity: "0"
		};
		let imgStyle = {
			float: "left",
			marginTop: "10px",
			marginBottom: "5px",
			height: "150px",
			borderRadius: "6px",
			marginLeft: "5px"
		};
		let image;
		if (this.state.rawUrl) {
			image = (<img style={imgStyle} src={this.state.rawUrl} alt="upload-image" />);
		}
		return (
			<span style={spanStyle}>
				<span style={titleStyle}>{this.state.title}</span>
				<textarea style={inputStyle} value={this.state.content} onChange={this.editInput.bind(this)} />
				<div style={lineStyle}>
					<img style={cameraStyle} src={camera} />
					<input style={fileStyle} type="file" accept="image/*" onChange={this.loadImg.bind(this)} />
					<span style={countStyle}>{this.state.count}/{this.state.length}</span>
					<div style={postStyle} onClick={this.submitPost.bind(this)}>Post</div>
					<span style={errorStyle}>{this.state.error}</span>
				</div>
				<div style={lineStyle}>
					{image}
				</div>
			</span>
		);
	}
}
export default Inputarea;
