import React, {Component} from 'react';
class Rate extends Component{
	constructor(props){
		super(props);
		this.state = {
			rate:parseInt(this.props.rate),
			change:this.props.change||"no",
			length:this.props.length||5,
			className:this.props.className
		};
	}
	mouseOver(event){
		this.setState({rate:parseInt(event.target.id)});
	}
	render(){
		let spanStyle;
		if(this.state.change=="yes"){
			spanStyle={
				color: this.props.color||"orange",
				fontSize:this.props.font||"18px",
				cursor :"pointer",
				fontFamily:"Times New Roman"
			};
		}
		else{
			spanStyle={
				color: this.props.color||"orange",
				fontSize:this.props.font||"18px",
				fontFamily:"Times New Roman"
			};
		}
		let stars=[];
		for(var i=1;i<=this.props.rate;i++){
			if(this.state.change=="yes"){
				stars.push(<span key={"black"+i} id={i} onMouseOver={this.mouseOver.bind(this)} onClick={this.props.rateChange.bind(null,this.state.rate)} >★</span>);
			}
			else{
				stars.push(<span key={"black"+i} id={i}>★</span>);
			}
		}
		for(var j=this.props.rate*1+1;j<=this.state.length;j++){
			if(this.state.change=="yes"){
				stars.push(<span key={"white"+j} id={j} onMouseOver={this.mouseOver.bind(this)} onClick={this.props.rateChange.bind(null,this.state.rate)} >☆</span>);
			}
			else{
				stars.push(<span key={"white"+j} id={j}>☆</span>);
			}
		}
		return(
			<span className={this.props.className} style={spanStyle}>
				{stars}
			</span>
		)
	}
};
export default Rate;
