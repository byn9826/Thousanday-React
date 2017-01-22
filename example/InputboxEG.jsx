import React, {Component} from 'react';
import {Inputbox} from 'thousanday-react';
class InputboxEG extends Component {
    render() {
        return (
            <section id = "inputbox" className = "example">
                <header className = "example-header">
                    <h2>Inputbox</h2>
                    <h3>Component used to receive input and show character limits</h3>
                </header>
                <h4>Show an Inputbox:</h4>
                <Inputbox content = "" max = "30" font = "15px" hint = "Try to use it" />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#inputbox" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default InputboxEG;