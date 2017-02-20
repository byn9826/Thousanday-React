import React, {Component} from 'react';
import {Progress} from 'thousanday-react';
class ProgressEG extends Component {
    constructor(props) {
        super(props);
		this.state = {
            progress: 20
		};
	}
    changeProgress() {
        let current = this.state.progress + 20;
        this.setState({progress: current});
    }
    render() {
        let buttonStyle = {
            marginTop: "10px"
        };
        return (
            <section id = "progress" className = "example">
                <header className = "example-header">
                    <h2>Progress</h2>
                    <h3>Show and update progress</h3>
                </header>
                <span className="example-span">
                    {"<Progress progress='50' max='100' />"}
                </span>
                <h4>Show progress by value:</h4>
                <Progress progress="50" max="100" percentage="false" width="50%" />
                <h4>Show progress by percentage:</h4>
                <Progress progress={this.state.progress} max="100" width="50%" /> <br/>
                <input style={buttonStyle} type="button" value="Complete 20%" onClick={this.changeProgress.bind(this)} />
                <h4>
                    <a href = "https://github.com/byn9826/Thousanday-React#progress" target = "__blank">Check docs</a>
                </h4>
            </section>
        );
    }
}
export default ProgressEG;