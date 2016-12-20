import React, {Component} from 'react';
class Droplist extends Component{
  constructor(props){
		super(props);
		this.state = {
      width:this.props.width||"100%",
      border:this.props.border||"1px solid orange",
      select:"0"
		};
	}
  changeSelect(event){
    this.setState({select:event.target.value});
  }
	render(){
    let spanStyle={
      width:this.state.width,
      display:"inline-block"
    };
    let selectStyle={
      width:"100%",
      paddingTop:"5px",
      paddingBottom:"5px",
      border:this.state.border,
      borderRadius:"2px",
      outline:"none"
    };
    let title;
    if(this.props.title){
      title = (<option disabled key="thisisoptionkey0" value="0">{this.props.title}</option>);
    }
    let options = [];
    for(var i=0;i<this.props.option.length;i++){
      let oneOption = this.props.option[i];
      options.push(<option key={"thisisoptionkey"+i} value={i+1}>{oneOption}</option>)
    }
		return(
			<span style={spanStyle}>
        <select id={this.props.id} style={selectStyle} value={this.state.select} onChange={this.changeSelect.bind(this)}>
          {title}
          {options}
        </select>
			</span>
		)
	}
};
export default Droplist;
