import React, {Component} from 'react';
import {Rate} from 'thousanday-react';
class RateEG extends Component {
    constructor(props) {
		super(props);
		this.state = {
			rate: 2,
		};
	};
    changeRate(newRate) {
        this.setState({rate: newRate});
    }
    render() {
        return (
            <section className = "example">
                <header className = "example-header">
                    <h2>Rate</h2>
                    <h3>Component used to display and receive rate from users</h3>
                </header>
                <h4>Rate for display only:</h4>
                <Rate rate = "3" max = "5" />
                <h4>User could change the rate:</h4>
                <Rate rate = {this.state.rate} max = "5" interact = "true" rateChange = {this.changeRate.bind(this)}/>
                <h4>Rate here will follow the rate above: </h4>
                <Rate rate = {this.state.rate} max = "5" color = "black" font = "19px" />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#rate" target="__blank">Check docs</a>
                </h4>
            </section>
        )
    }
}
export default RateEG;