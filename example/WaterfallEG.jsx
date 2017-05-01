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
            ["/img/pet/1/moment/0.jpg", "I'm a beauty guy with long legs", "#"],
            ["/img/pet/1/moment/1.jpg", "Boring, sleep", "#"],
            ["/img/pet/1/moment/2.jpg", "Unhappy", "#"],
            ["/img/pet/1/moment/3.jpg", "I'm sunflower", "#"],
            ["/img/pet/1/moment/4.jpg", "Love the bed", "#"],
            ["/img/pet/1/moment/5.jpg", "Leave me alone", "#"],
            ["/img/pet/1/moment/0.jpg", "I'm a beauty guy with long legs", "#"]
        ];
        return (
            <section id = "waterfall" className = "example">
                <header className = "example-header">
                    <h2>Waterfall</h2>
                    <h3>Responsive Pinterest Style Image Gallery</h3>
                </header>
                <span className="example-span">
                    {"<Waterfall column='3' image={images} />"}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. Automatically layout all the images based on the “column” param<br/>
                    2. Show related message above each image when mouse hover.<br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                    Show Images by 3 columns.<br/>
                </h4>
                <Waterfall column="3" image={images} fontFamily="'Rubik', sans-serif" />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#waterfall" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default WaterfallEG;