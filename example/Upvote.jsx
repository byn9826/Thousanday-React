import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Upvote} from 'thousanday-react';

class Rating extends Component{
	constructor(){
	  super();
	  this.state={
	    defaultVote:"100",
	    differ:"true" //make judgement about if users can vote or not (e.g.:can't vote for his own comment)
	  };
	}
	upVote(){
	  let prevState=this.state.defaultVote;
	  this.setState({defaultVote:this.state.defaultVote*1+1});
	  this.setState({differ:"false"});//after users click upvote, they can't click it again
	  //interact with your database here to add total votes
	}
	render(){
		return(
			<div><h6>
				<div>
					<div>
						Simple One:
					</div>
					<Upvote total="100" differ="false" />
				</div>
				<div>
					<div>
						Change something:
					</div>
					<Upvote total="100" differ="false" color="white" font="11px" bg="orange"  />
				</div>
				<div>
					<div>
						Change after click:
					</div>
					<Upvote total={this.state.defaultVote}  upVote={this.upVote.bind(this)} differ={this.state.differ}/>
				</div>
			</h6></div>
		)
	}
};

ReactDOM.render(<Rating/>, document.getElementById('main'));