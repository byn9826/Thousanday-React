import React, {Component} from 'react';
class Inputbox extends Component{
  constructor(props){
		super(props);
		this.state = {
      width:this.props.width||"100%",
      border:this.props.border||"1px solid orange",
      height:this.props.height||"20px",
      fontSize:this.props.fontSize||"13px",
      content:this.props.content,
      count:parseInt(this.props.total)-this.props.content.length,
      length:parseInt(this.props.total),
      restrict:this.props.restrict||"on"
		};
	}
  editInput(event){
    if (this.state.restrict=="off"){
      this.setState({content:event.target.value});
      this.setState({count:this.state.length-event.target.value.length});
    }
    else {
      let changedInput = event.target.value.substr(0,this.state.length);
      this.setState({content:changedInput});
      this.setState({count:this.state.length-changedInput.length});
    }
  }
	render(){
    let spanStyle={
      width:this.state.width,
      display:"inline-block"
    }
    let inputStyle={
      float:"left",
      marginBottom:"10px",
      width:"100%",
      border:this.state.border,
      height:this.state.height,
      fontFamily:"Arial",
      fontSize:this.state.fontSize,
      paddingLeft:"1%",
      outline:"none"
    };
    let countStyle={
      float:"left",
      fontFamily:"Arial",
      fontSize:"11px",
      width:"100%"
    }
		return(
			<span style={spanStyle}>
				<input style={inputStyle} value={this.state.content} placeholder={this.props.hint} onChange={this.editInput.bind(this)} />
        <span style={countStyle}>{this.state.count}/{this.state.length}</span>
			</span>
		)
	}
};
export default Inputbox;
