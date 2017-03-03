import React, {Component} from 'react';
import {Delmember} from 'thousanday-react';
class DelmemberEG extends Component {
    constructor(props) {
        super(props);
		this.state = {
            index:null
		};
	}
    clickDel(index) {
        this.setState({index: index});
    }
    render() {
        return (
            <section id="delmember" className="example">
                <header className="example-header">
                    <h2>Delmember</h2>
                    <h3>Disapear image after click with shake effect</h3>
                </header>
                <span className="example-span">
                    {"<Delmember profile={'0.jpg'} index={0} clickDel={this.clickDel.bind(this)} />"}
                </span>
                <h4>You deleted the profile with index: {this.state.index}</h4>
                <Delmember profile={"/img/pet/1/cover/0.png"} index={0} clickDel={this.clickDel.bind(this)} width="80" height="80" fontFamily="'Rubik', sans-serif" />
                <Delmember profile={"/img/pet/2/cover/0.jpg"} index={1} clickDel={this.clickDel.bind(this)} width="80" height="80" fontFamily="'Rubik', sans-serif" />
                <Delmember profile={"/img/pet/3/cover/0.jpg"} index={2} clickDel={this.clickDel.bind(this)} width="80" height="80" fontFamily="'Rubik', sans-serif" />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#random" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default DelmemberEG;