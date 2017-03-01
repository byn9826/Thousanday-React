import React, {Component} from 'react';
import {Getlocation} from 'thousanday-react';
class GetlocationEG extends Component {
    constructor(props) {
        super(props);
		this.state = {
            coordinator: null
		};
	}
    saveLocation(coor) {
        this.setState({coordinator: "success"});
    }
    render() {
        return (
            <section id="getlocation" className="example">
                <header className="example-header">
                    <h2>Getlocation</h2>
                    <h3>Display/get geolocation from user</h3>
                </header>
                <h4>#This component is depend on <a href="http://openlayers.org/" target="__blank">openlayers</a></h4>
                <span className="example-span">
                    {"<Getlocation center={[-79, 43]} />"}
                </span>
                <h4>Update your location: {this.state.coordinator}</h4>
                <Getlocation center={[-79.4293129, 43.8641194]} zoom="1" saveLocation={this.saveLocation.bind(this)} fontFamily="'Rubik', sans-serif" />
                <h4>
                    <a href = "https://github.com/byn9826/Thousanday-React#getlocation" target = "__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default GetlocationEG;