import React, {Component} from 'react';
import {Glogin} from 'thousanday-react';
class GloginEG extends Component {
    constructor(props) {
        super(props);
		this.state = {
            image: null,
            email: null
        };
	}
    googleLogin(user) {
        this.setState({image: user.image, email: user.email});
    }
    render() {
        let imageStyle = {
            display: "block",
            width: "30%"
        };
        return (
            <section id="glogin" className="example">
                <header className="example-header">
                    <h2>Glogin</h2>
                    <h3>Button for Google Login</h3>
                </header>
                <span className="example-span">
                    {"<Glogin clientId={id} />"}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. Show Google Login button<br/>
                    2. Get users information from user after login successfully<br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                </h4>
                <Glogin googleLogin={this.googleLogin.bind(this)} clientId=".......apps.googleusercontent.com" width="50%" />
                <h4>{"Hello, " + this.state.email}</h4>
                <img style={imageStyle} src={this.state.image} />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#glogin" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default GloginEG;