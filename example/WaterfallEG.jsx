import React, {Component} from 'react';
import {Waterfall} from "thousanday-react";
class WaterfallEG extends Component {
    constructor(props) {
        super(props);
		this.state = {
            click:""
		};
	}
    clickNumber(index) {
        this.setState({click: index});
    }
    render() {
        let images = [
            ["/img/pet/0/moment/0.jpg", "I'm a beauty guy with long legs"],
            ["/img/pet/0/moment/1.jpg", "Boring, sleep"],
            ["/img/pet/0/moment/2.jpg", "Unhappy"],
            ["/img/pet/0/moment/3.jpg", "I'm sunflower"],
            ["/img/pet/0/moment/4.jpg", "Love the bed"],
            ["/img/pet/0/moment/5.jpg", "Just leave me alone"],
            ["/img/pet/0/moment/0.jpg", "I'm a beauty guy with long legs"],
            ["/img/pet/0/moment/1.jpg", "Boring, sleep"]
        ];
        return (
            <section id = "waterfall" className = "example">
                <header className = "example-header">
                    <h2>Waterfall</h2>
                    <h3>Responsive and interactive Pinterest Image Gallery</h3>
                </header>
                <h4>
                    1. Automatically layout images based on columns you defined.<br />
                    2. Show messages about each image on mouse over<br />
                    3. Images and messages are all responsive based on screen width<br />
                    4. Even the length of each columns automatically <br />
                    5. Return the index of the images when users click on it
                </h4>
                <h4>Show Images by 3 columns. You clicked on the image with index of {this.state.click}</h4>
                <Waterfall column="3" image={images} clickNumber={this.clickNumber.bind(this)} />
                <h4>
                    <a href = "https://github.com/byn9826/Thousanday-React#waterfall" target = "__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default WaterfallEG;