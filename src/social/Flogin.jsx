import React, {Component} from "react";
class Flogin extends Component {
    componentDidMount() {
        let header = document.getElementsByTagName("head")[0];
        let script = document.createElement("script");
        script.id = "facebook-jssdk";
        script.src = "//connect.facebook.net/en_US/sdk.js";
        header.appendChild(script);
        window.fbAsyncInit = () => {
            FB.init({
                appId      : this.props.client_id,
                xfbml      : true,
                version    : 'v2.8'
            });
            FB.AppEvents.logPageView();
        };
    };
    clickButton() {
        
    }
    render() {
        let buttonStyle = {
            display: "inline-block",
            verticalAlign: "middle",
            width: "100%"
        };
		return (
            <div style={buttonStyle} id="fb-root">
                <div className="fb-login-button" data-max-rows="1" data-size="large" data-show-faces="false" data-auto-logout-link="false" onClick={this.clickButton.bind(this)}></div>
            </div>
		);
	}
}
export default Flogin;