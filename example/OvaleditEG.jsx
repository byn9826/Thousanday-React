import React, {Component} from 'react';
import {Ovaledit} from 'thousanday-react';
class OvaleditEG extends Component {
    clickEdit(value) {
    }
    render() {
        return (
            <section id = "ovaledit" className = "example">
                <header className = "example-header">
                    <h2>Ovaledit</h2>
                    <h3>Component used to display edit button</h3>
                </header>
                <h4>Hover on the edit button:</h4>
                <Ovaledit value="Edit" clickEdit={this.clickEdit.bind(this)} />
                <h4>
                    <a href = "https://github.com/byn9826/Thousanday-React#ovaledit" target = "__blank">Check docs</a>
                </h4>
            </section>
        );
    }
}
export default OvaleditEG;
