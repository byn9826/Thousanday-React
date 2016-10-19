import React, {Component} from 'react';
class Rate extends Component{
	constructor(props:content){
		super(props);
		this.state = {
			rate:parseInt(this.props.rate),
			change:this.props.change||"no",
		};
	}
	mouseOver(event){
		this.setState({rate:parseInt(event.target.id)});
	}
	mouseOut(event){
		this.setState({rate:parseInt(this.props.rate)});
	}
	render(){
		let starStyle={
			color: this.props.color||"orange",
			fontSize:this.props.font||"18px"
		};
		let stars=[];
		for(var i=1;i<=this.state.rate;i++){
			if(this.state.change=="yes"){
				stars.push(<span key={"black"+i} id={i} onMouseOver={this.mouseOver.bind(this)} onClick={this.props.rateChange.bind(null,i)}>★</span>);
			}
			else{
				stars.push(<span key={"black"+i} id={i}>★</span>);
			}
		}
		for(var j=this.state.rate*1+1;j<=this.props.length;j++){
			if(this.state.change=="yes"){
				stars.push(<span key={"white"+j} id={j} onMouseOver={this.mouseOver.bind(this)} onClick={this.props.rateChange.bind(null,i)}>☆</span>);
			}
			else{
				stars.push(<span key={"white"+j} id={j}>☆</span>);
			}
		}
		return(
			<span style={starStyle} onMouseOut={this.mouseOut.bind(this)}>
				{stars}
			</span>
		)
	}
};
export default Rate;