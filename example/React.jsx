import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../general/Header';
import {Rate, Upvote, Inputbox, Inputarea, Imagebox} from 'thousanday-react';
import Footer from '../general/Footer';
class Reactui extends Component{
	constructor(){
		super();
		this.state={
			defaultRate:"0",//this is for rating star
			defaultVote:"100",//this is for upvote it
	    differ:"true"//this is for upvote it
		};
	}
	//this is for rating star
	rateChange(rateNum){
		let prevState=this.state.defaultRate;
		this.setState({defaultRate:rateNum});
	}
	//this is for upvote it
	upVote(){
	  let prevState=this.state.defaultVote;
	  this.setState({defaultVote:this.state.defaultVote*1+1});
	  this.setState({differ:"false"});
	}
	render(){
		{/*this is for image box*/}
		let img = [
			["/img/react/1.jpg","alt1"],
			["/img/react/2.jpg","alt2"],
			["/img/react/3.jpg","alt3"]
		];
		return(
			<div id="container">
				<Header />
				<main id="main">
					<h1>Thousanday-React</h1>
					<div id="main-describe">
						<h5>
							Thousanday-React is a list of UI components used in thousanday.com<br/>
							Examples for these components are displayed here.<br/>
							This project is not finished yet, it will be updated weekly.
						</h5>
						<h5 id="main-describe-install">
							<b>install</b><br />
							npm install thousanday-react --save
						</h5>
					</div>
					<div id="main-components">
						<div className="div-container">
							<a href="#rate"><h5>Rating Stars</h5></a>
						</div>
						<div className="div-container">
							<a href="#upvote"><h5>Upvote it</h5></a>
						</div>
						<div className="div-container">
							<a href="#inputbox"><h5>Inputbox character count</h5></a>
						</div>
						<div className="div-container">
							<a href="#imagebox"><h5>Imagebox</h5></a>
						</div>
					</div>
				</main>
				<section id="rate" className="components">
					<div className="components-title">
						<h2>Rating Stars</h2>
					</div>
					<h4>
						Component used to display and receive ratings from users<br/>
						<a href="https://github.com/byn9826/Thousanday-React#rate">How to use it</a>
					</h4>
					<div className="components-display">
						<h5>Please rate this website</h5>
						<Rate rate={this.state.defaultRate} length="5" change="yes" rateChange={this.rateChange.bind(this)}/>
						<h5>Your rate would also show here.</h5>
						<Rate rate={this.state.defaultRate} length="5"/>
						<h5>This is another rate.</h5>
						<Rate rate="2" length="5" font="20px" color="red" className="exampleRate"/>
					</div>
				</section>
				<section id="upvote" className="components">
					<div className="components-title">
						<h2>Upvote it</h2>
					</div>
					<h4>
						Component used to let usrs upvote some content<br/>
						<a href="https://github.com/byn9826/Thousanday-React#upvote">How to use it</a>
					</h4>
					<div className="components-display">
						<h5>Dislpay upvote</h5>
						<Upvote total="100" differ="false" />
						<h5>You can upvote it</h5>
						<Upvote total={this.state.defaultVote}  upVote={this.upVote.bind(this)} differ={this.state.differ}/>
						<h5>This is another upvote.</h5>
						<Upvote className="exampleUpvote" total="100000" differ="false" color="white" font="11px" bg="orange"  />
					</div>
				</section>
				<section id="inputbox" className="components">
					<div className="components-title">
						<h2>Inputbox character count</h2>
					</div>
					<h4>
						Component used to calculate and control length if users input<br/>
						<a href="https://github.com/byn9826/Thousanday-React#inputbox">How to use it</a>
					</h4>
					<div className="components-display">
						<div id="inputbox-display">
							<div>
								<label htmlFor="inputbox-display-inputbox"><h5><b>Title:</b></h5></label>
								<Inputbox name="inputbox-display-inputbox" content="A title of something" total="50"/>
								<label htmlFor="inputbox-display-inputarea"><h5><b>Content:</b></h5></label>
								<Inputarea name="inputbox-display-inputarea" content="Write something here" height="80px" total="300"/>
							</div>
						</div>
					</div>
				</section>
				<section id="imagebox" className="components">
					<div className="components-title">
						<h2>Imagebox</h2>
					</div>
					<h4>
						Component used to display multi images<br/>
					<a href="https://github.com/byn9826/Thousanday-React#imagebox">How to use it</a>
					</h4>
					<div className="components-display">
						<Imagebox slides={img} width="100%" timer="5000"/>
					</div>
				</section>
				<Footer />
			</div>
		)
	}
};
ReactDOM.render(<Reactui />, document.getElementById('root'));
