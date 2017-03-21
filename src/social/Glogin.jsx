import React, {Component} from "react";
import "./gapi.js";
class Glogin extends Component {
    constructor(props) {
        super(props);
		this.state = {
            width: this.props.width || 100
		};
	}
    componentDidMount() {
        let header = document.getElementsByTagName("head")[0];
        let meta = document.createElement("meta");
        meta.name = "google-signin-client_id";
        meta.content = this.props.clientId;
        header.appendChild(meta);
        window.gapi.signin2.render("my-signin2", {
            "scope": "profile email",
            "width": this.state.width,
            "onsuccess": (googleUser) => {
                let profile = {};
                profile.id = googleUser.getBasicProfile().getId();
                profile.name = googleUser.getBasicProfile().getName();
                profile.fname = googleUser.getBasicProfile().getGivenName();
                profile.lname = googleUser.getBasicProfile().getFamilyName();
                profile.image = googleUser.getBasicProfile().getImageUrl();
                profile.email = googleUser.getBasicProfile().getEmail();
                profile.token = googleUser.getAuthResponse().id_token;
                this.props.googleLogin(profile);
            },
            "onfailure": (error) => {
                this.props.googleLogin(error);
            }
        });
    }
    render() {
        let buttonStyle = {
            display: "inline-block",
            verticalAlign: "middle",
            width: "100%",
            lineHeight: "36px"
        };
		return (
            <div className="my-signin2" id="my-signin2" style={buttonStyle} data-onsuccess="onSignIn" data-theme="dark"></div>
		);
	}
}
export default Glogin;