import React, {Component} from "react";
import google from "./google.png";
class Googlelogin extends Component {
    constructor(props) {
        super(props);
		this.state = {
            width: this.props.width || "100%",
            result: null
		};
	}
    componentWillMount() {
        let header = document.getElementsByTagName("head")[0];
        let script = document.createElement("script");
        script.src = "https://apis.google.com/js/api:client.js";
        header.appendChild(script);
    }   
    componentDidMount() {
        let self = this;
        window.onload = () => {
            gapi.load('auth2', function() {
                let instance = gapi.auth2.init({
                    client_id: self.props.clientId
                });
                instance.then(() => {
                    let user = instance.currentUser.get();
                    let profile = user.getBasicProfile();
                    if (user.isSignedIn()) {
                        let result = {};
                        result.id = profile.getId();
                        result.name = profile.getName();
                        result.firstname = profile.getGivenName();
                        result.lastname = profile.getFamilyName();
                        result.imageUrl = profile.getImageUrl();
                        result.email = profile.getEmail();
                        self.props.gLogin(result);
                        self.setState({result: result});
                    }
                });
            });
        }
    }
    clickButton() {
        if (!this.state.result) {
            let instance = gapi.auth2.getAuthInstance(); 
            instance.signIn().then(() => {
                let user = instance.currentUser.get();
                if (user.isSignedIn()) {
                    let result = {};
                    let profile = user.getBasicProfile();
                    result.id = profile.getId();
                    result.name = profile.getName();
                    result.firstname = profile.getGivenName();
                    result.lastname = profile.getFamilyName();
                    result.imageUrl = profile.getImageUrl();
                    result.email = profile.getEmail();
                    this.props.gLogin(result);
                    this.setState({result: result});
                } else {
                    this.props.gLogin(false);
                }
            });
        } else {
            this.props.gLogin(this.state.result);
        }
    }
    render() {
        let buttonStyle = {
            display: "inline-block",
            verticalAlign: "middle",
            width: this.state.width,
            cursor: "pointer"
        };
		return (
            <img style={buttonStyle} src={google} alt="Log in with Google" onClick={this.clickButton.bind(this)}/>
		);
	}
}
export default Googlelogin;