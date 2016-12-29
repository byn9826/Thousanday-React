import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../general/Header';
import {Rate, Upvote, Inputbox, Inputarea, Imagebox, Random, Droplist, Upsertlist} from 'thousanday-react';
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
			["img/react/1.jpg","alt1"],
			["img/react/2.jpg","alt2"],
			["img/react/3.jpg","alt3"]
		];
		//content for random
		let randomContent = ["This is the first random","This is the 2nd random","This is the 3rd random","This is the 4th random"];
		//options for droplist
		let dropOption = ["option1","option2","option3","option4","option5"];
		//options for upsertlist
		let planslist = ["plan A","plan B", "plan C", "plan D"];
		return(
			<div id="container">
				<Header />
				<main id="main">
					<h1>Thousanday-React</h1>
					<div id="main-describe">
						<h3>
							Thousanday-React is a list of UI components used in thousanday.com<br/>
							Examples for these components are displayed here.<br/>
							This project is not finished yet, it will be updated weekly.
						</h3>
						<h3 id="main-describe-install">
							<b>install</b><br />
							npm install thousanday-react --save
						</h3>
					</div>
					<div id="main-components">
						<div>
							<div className="main-components div-container">
								<a href="#rate"><h4>Rating Stars</h4></a>
							</div>
							<div className="main-components div-container">
								<a href="#upvote"><h4>Upvote it</h4></a>
							</div>
							<div className="main-components div-container">
								<a href="#inputbox"><h4>Inputbox</h4></a>
							</div>
							<div className="main-components div-container">
								<a href="#imagebox"><h4>Imagebox</h4></a>
							</div>
						</div>
					</div>
					<div id="main-components">
						<div>
							<div className="main-components div-container">
								<a href="#random"><h4>Random</h4></a>
							</div>
							<div className="main-components div-container">
								<a href="#droplist"><h4>Droplist</h4></a>
							</div>
							<div className="main-components div-container">
								<a href="#upsertlist"><h4>Upsertlist</h4></a>
							</div>
						</div>
					</div>
				</main>
				<section id="rate" className="components">
					<div className="components-title">
						<h2>Rating Stars</h2>
					</div>
					<h3>
						Component used to display and receive ratings from users<br/>
						<a href="https://github.com/byn9826/Thousanday-React#rate">How to use it</a>
					</h3>
					<div className="components-display">
						<h4>Please rate this website</h4>
						<Rate rate={this.state.defaultRate} length="5" change="yes" rateChange={this.rateChange.bind(this)}/>
						<h4>Your rate would also show here.</h4>
						<Rate rate={this.state.defaultRate} length="5"/>
						<h4>This is another rate.</h4>
						<Rate rate="2" length="5" font="20px" color="red" className="exampleRate"/>
					</div>
				</section>
				<section id="upvote" className="components">
					<div className="components-title">
						<h2>Upvote it</h2>
					</div>
					<h3>
						Component used to let usrs upvote some content<br/>
						<a href="https://github.com/byn9826/Thousanday-React#upvote">How to use it</a>
					</h3>
					<div className="components-display">
						<h4>Dislpay upvote</h4>
						<Upvote total="100" differ="false" />
						<h4>You can upvote it</h4>
						<Upvote total={this.state.defaultVote}  upVote={this.upVote.bind(this)} differ={this.state.differ}/>
						<h4>This is another upvote.</h4>
						<Upvote className="exampleUpvote" total="100000" differ="false" color="white" font="11px" bg="orange"  />
					</div>
				</section>
				<section id="inputbox" className="components">
					<div className="components-title">
						<h2>Inputbox character count</h2>
					</div>
					<h3>
						Component used to calculate and control length if users input<br/>
						<a href="https://github.com/byn9826/Thousanday-React#inputbox">How to use it</a>
					</h3>
					<div className="components-display">
						<div id="inputbox-display">
							<div>
								<label htmlFor="inputbox-display-inputbox"><h4><b>Title:</b></h4></label>
								<Inputbox name="inputbox-display-inputbox" content="A title of something" total="50"/>
								<label htmlFor="inputbox-display-inputarea"><h4><b>Content:</b></h4></label>
								<Inputarea name="inputbox-display-inputarea" content="Write something here" height="80px" total="300"/>
							</div>
						</div>
					</div>
				</section>
				<section id="imagebox" className="components">
					<div className="components-title">
						<h2>Imagebox</h2>
					</div>
					<h3>
						Component used to display multi images<br/>
					<a href="https://github.com/byn9826/Thousanday-React#imagebox">How to use it</a>
					</h3>
					<div className="components-display">
						<Imagebox slides={img} width="100%" timer="5000"/>
					</div>
				</section>
				<section id="random" className="components">
					<div className="components-title">
						<h2>Random</h2>
					</div>
					<h3>
						Component used to show random contents<br/>
					<a href="https://github.com/byn9826/Thousanday-React#random">How to use it</a>
					</h3>
					<div className="components-display">
						Random once:<br/>
						<Random random={randomContent} font="h3" id="header-slogan"/>
						Random again:<br/>
						<Random random={randomContent} font="h3" id="header-slogan"/>
					</div>
				</section>
				<section id="droplist" className="components">
					<div className="components-title">
						<h2>Droplist</h2>
					</div>
					<h3>
						Component used to show list of options<br/>
					<a href="https://github.com/byn9826/Thousanday-React#droplist">How to use it</a>
					</h3>
					<div className="components-display">
						<Droplist  title="- Choose an option -" option={dropOption} />
					</div>
				</section>
				<section id="upsertlist" className="components">
					<div className="components-title">
						<h2>Upsertlist</h2>
					</div>
					<h3>
						Component used to let user choose options or create new one<br/>
					<a href="https://github.com/byn9826/Thousanday-React#upsertlist">How to use it</a>
					</h3>
					<div className="components-display">
						<Upsertlist ref="choosePlan" title="Choose plans:" max="15" option={planslist} />
					</div>
				</section>
				<Footer />
			</div>
		)
	}
};
ReactDOM.render(<Reactui />, document.getElementById('root'));
