import React, {Component} from 'react';
import {Vote} from 'thousanday-react';
class VoteEG extends Component {
    constructor(props) {
		super(props);
		this.state = {
			choice: 2,
		};
	};
    newChoice(newNum) {
        this.setState({choice: newNum});
    }
    render() {
        return (
            <section id = "vote" className = "example">
                <header className = "example-header">
                    <h2>Vote</h2>
                    <h3>Component used to show or collect users' vote</h3>
                </header>
                <h4>Vote for display only:</h4>
                <Vote left = "Agree" right = "Disagree" agree = "100" disagree = "60" />
                <h4>Try to vote here:</h4>
                <Vote left = "Good" right = "Bad" interact = "true" choice = {this.state.choice} newChoice = {this.newChoice.bind(this)} />
                <h4>Code stand for your choice above: </h4>
                {this.state.choice}
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#vote" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default VoteEG;