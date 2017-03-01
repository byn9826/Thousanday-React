import React, {Component} from 'react';
import {Inputbox} from 'thousanday-react';
class InputboxEG extends Component {
    render() {
        return (
            <section id = "inputbox" className = "example">
                <header className = "example-header">
                    <h2>Inputbox</h2>
                    <h3>Receive input and show character limits</h3>
                </header>
                <span className="example-span">
                    {"<Inputbox content='' max='30' font='15px' hint='Show hint' />"}
                </span>
                <h4>Show an Inputbox:</h4>
                <Inputbox content="" max="30" font="15px" hint="Try to use it" fontFamily="'Rubik', sans-serif" />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#inputbox" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default InputboxEG;