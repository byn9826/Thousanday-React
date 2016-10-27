import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Rate from 'thousanday-react';

class Rating extends Component{
	constructor(){
		super();
		this.state={
			defaultRate:"0"
		};
	}
	rateChange(rateNum){
		let prevState=this.state.defaultRate;
		this.setState({defaultRate:rateNum});
	}
	render(){
		return(
			<div><h6>
				<div>
					<div>
						Defaut size:
					</div>
					<Rate rate="4" length="5"/>
				</div>
				<div>
					<div>
						Change color and size
					</div>
					<Rate rate="3" length="5" font="22px" color="black" />
				</div>
				<div>
					<div>
						Receive rating value from users
					</div>
					<Rate rate={this.state.defaultRate} length="5" change="yes" rateChange={this.rateChange.bind(this)}/>
					<div>
						This is for display only, but the value is bind with the one before.
					</div>
					<Rate rate={this.state.defaultRate} length="5"/>
				</div>
			</h6></div>
		)
	}
};

ReactDOM.render(<Rating/>, document.getElementById('main'));