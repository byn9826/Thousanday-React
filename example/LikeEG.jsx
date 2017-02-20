import React, {Component} from 'react';
import {Like} from 'thousanday-react';
class LikeEG extends Component {
    constructor(props) {
        super(props);
		this.state = {
            like: 20
		};
	}
    updateLike(change) {
        let like = this.state.like;
        this.setState({like: like + change});
    }
    render() {
        return (
            <section id = "like" className = "example">
                <header className = "example-header">
                    <h2>Like</h2>
                    <h3>Display and Collect likes from users</h3>
                </header>
                <span className="example-span">
                    {"<Like agree='100' /> "}
                </span>
                <h4>If you like this components:</h4>
                <Like agree={this.state.like} newTotal={this.updateLike.bind(this)}/>
                <h4>
                    <a href = "https://github.com/byn9826/Thousanday-React#like" target = "__blank">Check docs</a>
                </h4>
            </section>
        );
    }
}
export default LikeEG;
