import React, {Component} from 'react';
import {Ovaledit} from 'thousanday-react';
class OvaleditEG extends Component {
    clickEdit(value) {
    }
    render() {
        let lineBreak = {
            display: "block",
            width: "40%",
            height: "50px"
        };
        return (
            <section id = "ovaledit" className = "example">
                <header className = "example-header">
                    <h2>Ovaledit</h2>
                    <h3>Display edit button</h3>
                </header>
                <span className="example-span">
                    {" <Ovaledit value='Edit' />"}
                </span>
                <h4>Hover on the edit button:</h4>
                <span style={lineBreak}>
                    <Ovaledit value="Edit" clickEdit={this.clickEdit.bind(this)} fontFamily="'Rubik', sans-serif" />
                </span>
                <h4>
                    <a href = "https://github.com/byn9826/Thousanday-React#ovaledit" target = "__blank">Check docs</a>
                </h4>
            </section>
        );
    }
}
export default OvaleditEG;
