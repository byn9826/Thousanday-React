import React, {Component} from 'react';
import reqwest from "reqwest";
import AvatarEditor from "react-avatar-editor";
class Updateprofile extends Component {
    constructor(props) {
        super(props);
		this.state = {
            src: this.props.src,
            rawUrl: null,
            scale: 1,
            fontFamily: this.props.fontFamily || "Times New Roman"
		};
	}
    handleScale(event) {
        let scale = parseFloat(event.target.value);
        this.setState({scale: scale});
    }
    clickUpload(event) {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onload = () => {
            this.setState({rawUrl: reader.result});
        }
        reader.readAsDataURL(file);
    }
    setEditorRef(editor) {
        if (editor) this.editor = editor;
    }
    cancelUpdate() {
        this.setState({rawUrl: null});
    }
    saveProfile() {
        let rawUrl = this.editor.getImageScaledToCanvas().toDataURL();
        this.setState({src: rawUrl, rawUrl: null});
        let newUrl = rawUrl.split(',')[1];
        newUrl = window.atob(newUrl);
        let blobUrl = new Uint8Array(newUrl.length);
        for (var i = 0; i < newUrl.length; i++) {
            blobUrl[i] = newUrl.charCodeAt(i);
        };
        let finalUrl = new Blob([blobUrl], {type: "image/png"});
        this.props.saveProfile(finalUrl);
    }
    render() {
        let containerStyle = {
            display: "inline-block",
            verticalAlign: "top",
            width: (parseInt(this.props.width) + 40) + "px"
        };
        let containerImgStyle = {
            display: "block",
            width: this.props.width + "px",
            margin: "20px 20px"
        };
        let containerButtonStyle = {
            display: "block",
            width: this.props.width + "px",
            height: "20px",
            padding: "1px 0",
            margin: "0 20px",
            fontFamily: this.state.fontFamily,
            border: "1px solid #052456",
            color: "black",
            backgroundColor: "white",
            borderRadius: "3px",
            outline: "none"
        };
        let containerFileStyle = {
            position: "relative",
            width: (parseInt(this.props.width) + 40) + "px",
            margin: "0 20px",
            height: "20px",
            top: "-20px",
            opacity: "0"
        };
        let containerLineStyle = {
            display: "block",
            width: this.props.width + "px",
            margin: "0 0"
        };
        let lineZoomStyle = {
            display: "inline-block",
            verticalAlign: "middle",
            height: "20px",
            width: "100px",
            marginRight: "10px"
        };
        let lineFontStyle = {
            display: "inline-block",
            verticalAlign: "middle",
            fontSize: "12px",
            fontFamily: this.state.fontFamily,
            margin: "0 5px",
            fontWeight: "bold",
            color: "black",
            cursor: "pointer"
        };
        let profile;
        if (!this.state.rawUrl) {
            profile = (
                <div style={containerStyle}>
                    <img style={containerImgStyle} src={this.state.src} alt="profile" />
                    <input style={containerButtonStyle}  type="button" value="Upload New" />
                    <input style={containerFileStyle} type="file" onChange={this.clickUpload.bind(this)} />
                </div>
            );
        } else {
            profile = (
                <div style={containerStyle}>
                    <AvatarEditor
                        ref={this.setEditorRef.bind(this)}
                        image={this.state.rawUrl}
                        width={parseInt(this.props.width)}
                        height={parseInt(this.props.width)}
                        border={20}
                        color={[255, 255, 255, 0.6]}
                        scale={parseFloat(this.state.scale)}
                    />
                    <div style={containerLineStyle}>
                        <input style={lineZoomStyle} type="range" onChange={this.handleScale.bind(this)} min="1" max="2" step="0.01" defaultValue="1" />
                        <div style={lineFontStyle} onClick={this.saveProfile.bind(this)}>Save</div>
                        <div style={lineFontStyle} onClick={this.cancelUpdate.bind(this)}>Cancel</div>
                    </div>
                </div>
            );
        }
		return profile;
	}
}
export default Updateprofile;