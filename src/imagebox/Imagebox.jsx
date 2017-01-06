import React, {Component} from 'react';
class Imagebox extends Component{
  constructor(props){
	  super(props);
		this.state = {
      current:0,
      timer:null
		};
	}
  componentDidMount(){
    if (this.props.timer){
      let timer = setInterval(this.changeImage.bind(this),this.props.timer);
      this.setState({timer:timer});
    }
  }
  componentWillUnmount(){
    if (this.props.timer){
      clearInterval(this.state.time);
    }
  }
  changeImage(){
    if(this.state.current===(this.props.slides.length-1)){
      this.setState({current:0});
    }
    else {
      this.setState({current:this.state.current+1});
    }
  }
  clickIcon(i){
    this.setState({current:i});
  }
	render(){
    let spanStyle = {
      display:"block",
      width:this.props.width||"100%",
      margin:"10px auto",
      borderBottom:"5px solid orange"
    };
    let idname = this.props.id;
    let imageStyle = {
      display:"block",
      width: "100%"
    };
    let containerStyle = {
      display:"block",
      width:"100%",
      height:"15%",
      borderTop:"2px dashed orange",
      textAlign:"center"
    };
    let mainStyle = {
      display:"inline-block",
      width:"15%",
      margin:"5px 1%"
    };
    let iconStyle = {
      display:"inline-block",
      width:"13%",
      margin:"5px 1%"
    };
    let banner = this.props.slides[this.state.current];
    let mainImage;
    if (banner[2]){
      mainImage = <a href={banner[2]}><img src={banner[0]} alt={banner[1]} style={imageStyle} /></a>;
    }
    else{
      mainImage = <img src={banner[0]} alt={banner[1]} style={imageStyle} />;
    }
    let icons = [];
    for(var i=0; i<=4; i++){
      if (i<=(this.props.slides.length-1)){
        let thisSrc = this.props.slides[i][0];
        let thisAlt = this.props.slides[i][1];
        if(i==this.state.current){
          icons.push(<img key={thisAlt} src={thisSrc} alt={thisAlt} style={mainStyle} onClick={this.clickIcon.bind(this,i)} />);
        }
        else {
          icons.push(<img key={thisAlt} src={thisSrc} alt={thisAlt} style={iconStyle} onClick={this.clickIcon.bind(this,i)} />);
        }
      }
    }
		return(
			<span id={idname} style={spanStyle}>
        {mainImage}
        <div style={containerStyle}>
          {icons}
        </div>
			</span>
		)
	}
};
export default Imagebox;
