import React, {Component} from 'react';
import {AddtoList} from 'thousanday-react';
class AddtolistEG extends Component {
    render() {
        let options = [
            "List A",
            "List B",
            "List C",
            "List D"
        ];
        let choice = [0,1,0,0];
        return (
            <section id="addtolist" className="example">
                <header className="example-header">
                    <h2>AddtoList</h2>
                    <h3>Component used to show a list of options</h3>
                </header>
                <h4>Choose from a list of options:</h4>
                <AddtoList ref="yourChoice" title="Add to your lists:" content={options} choice={choice} />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#random" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
}
export default AddtolistEG;