import React, {Component} from 'react';
class Upsertlist extends Component{
  constructor(props){
		super(props);
		this.state = {
      width:this.props.width||"100%",
      select:[],
      create:false,
      content:""
		};
	}
  clickList(event){
    let choose = this.state.select;
    let i = event.target.id;
    if(choose[i]==1){
      choose[i]=0;
    }
    else{
      choose[i]=1;
    }
    this.setState({select:choose});
  }
  addNew(){
    this.setState({create:true});
  }
  editContent(event){
    if(event.target.value.length<=this.props.max){
      this.setState({content:event.target.value});
    }
  }
  closeContent(){
    this.setState({create:false});
    this.setState({content:""});
  }
	render(){
    let spanStyle={
      width:this.state.width,
      display:"inline-block",
      borderLeft:"2px solid #1d4077"
    };
    let titleStyle={
      width:"94%",
      marginLeft:"3%",
      marginBottom:"10px",
      textAlign:"left",
      fontFamily:"Times New Roman",
      fontSize:"13px",
      fontWeight:"bold"
    };
    let divStyle={
      width:"94%",
      marginLeft:"3%",
      paddingTop:"5px",
      paddingBottom:"5px",
      backgroundColor:"#1d4077",
      textAlign:"center",
      border:"1px solid white",
      borderRadius:"3px",
      color:"white",
      marginBottom:"5px",
      fontFamily:"Times New Roman",
      fontSize:"11px",
      fontWeight:"normal"
    };
    let chooseStyle={
      width:"94%",
      marginLeft:"3%",
      paddingTop:"4px",
      paddingBottom:"4px",
      backgroundColor:"#912a2a",
      textAlign:"center",
      border:"1px solid white",
      borderRadius:"3px",
      color:"white",
      marginBottom:"5px",
      fontFamily:"Times New Roman",
      fontSize:"11px",
      fontWeight:"normal"
    };
    let addStyle={
      fontFamily:"Times New Roman",
      fontSize:"10px",
      fontWeight:"normal",
      paddingTop:"7px",
      paddingBottom:"7px",
      marginTop:"7px",
      marginBottom:"6px",
      marginLeft:"5%",
      cursor:"pointer"
    };
    let newStyle={
      display:"inline-block",
      fontFamily:"Times New Roman",
      fontSize:"11px",
      fontWeight:"normal",
      width:"94%",
      marginLeft:"3%",
      marginTop:"5px"
    };
    let inputStyle={
      float:"left",
      paddingTop:"5px",
      paddingBottom:"5px",
      paddingLeft:"1%",
      outline:"none",
      width:"80%"
    };
    let delStyle={
      paddingTop:"5px",
      display:"inline-block",
      float:"left",
      marginLeft:"3%",
      width:"8%",
      color:"#af1f1f",
      "cursor":"pointer"
    };
    let title;
    if(this.props.title){
      title = (<div style={titleStyle}>{this.props.title}</div>);
    }
    let options = [];
    for(var i=0;i<this.props.option.length;i++){
      let oneOption = this.props.option[i];
      if(this.state.select[i]==1){
        options.push(<div style={chooseStyle} key={"thisisanoldkey"+i} id={i} onClick={this.clickList.bind(this)}>{oneOption} ✓</div>)
      }
      else{
        options.push(<div style={divStyle} key={"thisisanoldkey"+i} id={i} onClick={this.clickList.bind(this)}>{oneOption}</div>)
      }
    }
    let create;
    if(this.state.create==true){
      let hint = "Max Characters: " + this.props.max;
      create = (
        <div style={newStyle}>
          <input type="text" style={inputStyle} placeholder={hint} value={this.state.content} onChange={this.editContent.bind(this)} />
          <div style={delStyle} onClick={this.closeContent.bind(this)}>✘</div>
        </div>
      )
    }
    else{
      create = (<div style={addStyle} onClick={this.addNew.bind(this)}>+ New</div>);
    }
		return(
		  <span style={spanStyle}>
        {title}
        {options}
        {create}
			</span>
		)
	}
};
export default Upsertlist;
