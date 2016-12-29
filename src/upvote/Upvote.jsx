import React, {Component} from 'react';
class Upvote extends Component{	
	render(){
		let upvoteStyle={
			color: this.props.color||"#1d4077",
			backgroundColor: this.props.bg||"white",
			fontSize:this.props.font||"11px",
			width:this.props.width||"auto",
			border:this.props.border||"0",
			fontFamily: "Times New Roman",
			textAlign:"center",
			display:"inline-block"
		};
		let upvoteArrow={
			cursor :"pointer",
			display:"inline-block",
			marginTop:"1px",
			marginBottom:"1px"
		};
		let peopleVote;
		if(this.props.differ=="true"){
			peopleVote=(
				<span style={upvoteArrow} onClick={this.props.upVote.bind(null)} >
					▲<br/>
					{this.props.total}
				</span>
			)
		}
		else{
			peopleVote=(
				<span>
					{this.props.total}<br/>
					✓
				</span>
			)
		};
		return(
			<span style={upvoteStyle} className={this.props.className}>
				{peopleVote}
			</span>
		)
	}
};
export default Upvote;