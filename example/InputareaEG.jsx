import React, {Component} from 'react';
import {Inputarea} from 'thousanday-react';
class InputareaEG extends Component {
    render() {
        return (
            <section  id = "inputarea" className = "example">
                <header className = "example-header">
                    <h2>Inputarea</h2>
                    <h3>Show textarea and show character limits</h3>
                </header>
                <span className="example-span">
                    {"<Inputarea content='' max='150' />"}
                </span>
                <h4>Show an Inputarea:</h4>
                <Inputarea content = "Let's count the content" max = "150" />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#inputarea" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default InputareaEG;