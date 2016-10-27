import React, {Component} from 'react';
class Rate extends Component{
	constructor(props){
		super(props);
		this.state = {
			rate:parseInt(this.props.rate),
			change:this.props.change||"no",
		};
	}
	mouseOver(event){
		this.setState({rate:parseInt(event.target.id)});
	}
	render(){
		let starStyle={
			color: this.props.color||"orange",
			fontSize:this.props.font||"18px",
			cursor :'pointer'
		};
		let stars=[];
		for(var i=1;i<=this.props.rate;i++){
			if(this.state.change=="yes"){
				stars.push(<span key={"black"+i} id={i} onMouseOver={this.mouseOver.bind(this)} onClick={this.props.rateChange.bind(null,this.state.rate)} >★</span>);
			}
			else{
				stars.push(<span key={"black"+i} id={i}>★</span>);
			}
		}
		for(var j=this.props.rate*1+1;j<=this.props.length;j++){
			if(this.state.change=="yes"){
				stars.push(<span key={"white"+j} id={j} onMouseOver={this.mouseOver.bind(this)} onClick={this.props.rateChange.bind(null,this.state.rate)} >☆</span>);
			}
			else{
				stars.push(<span key={"white"+j} id={j}>☆</span>);
			}
		}
		return(
			<span style={starStyle}>
				{stars}
			</span>
		)
	}
};
export default Rate;