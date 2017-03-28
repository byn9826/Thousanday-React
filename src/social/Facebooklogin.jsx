import React, {Component} from "react";
import facebook from "./facebook.png";
class Facebooklogin extends Component {
    constructor(props) {
        super(props);
		this.state = {
            width: this.props.width || "100%",
            response: null
		};
	}
    componentWillMount() {
        let header = document.getElementsByTagName("head")[0];
        let script = document.createElement("script");
        script.id = "facebook-jssdk";
        script.src = "http://connect.facebook.net/en_US/sdk.js";
        header.appendChild(script);
    }
    componentDidMount() {
        let self = this;
        window.fbAsyncInit = () => {
            FB.init({
                appId      : this.props.clientId,
                xfbml      : true,
                version    : 'v2.8'
            });
            FB.getLoginStatus((response) => {
                if (response.status === 'connected') {
                    FB.api('/me', (response) => {
                        self.setState({response: response});
                        self.props.fLogin(response);
                    });
                } else {
                    self.setState({response: false});
                }
            });
        }
    };
    clickButton() {
        let self = this;
        if (this.state.response) {
            this.props.fLogin(this.state.response);
        } else {
            FB.login((response) => {
                if (response.status === 'connected') {
                    FB.api('/me', (response) => {
                        self.setState({response: response});
                        self.props.fLogin(response);
                    });
                } else {
                    self.setState({response: false});
                }
            });
        }
    }
    render() {
        let buttonStyle = {
            display: "inline-block",
            verticalAlign: "middle",
            width: this.state.width,
            cursor: "pointer",
            borderRadius: "5px"
        };
		return (
            <img style={buttonStyle} src={facebook} alt="Log in with Facebook" onClick={this.clickButton.bind(this)}/>
		);
	}
}
export default Facebooklogin;