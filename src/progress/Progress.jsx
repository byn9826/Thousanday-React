import React, {Component} from 'react';
class Progress extends Component{
    constructor(props){
		super(props);
		this.state = {
            complete:this.props.complete*100 + "%",
            height:this.props.height||"20px",
            width:this.props.width||"100%",
            notice:this.props.notice||""
		};
	}
    componentWillReceiveProps(nextProps){
        if(nextProps.complete>=1){
            this.setState({complete:"100%"});
        }
        else if(nextProps.complete>=0&&nextProps.complete<1)
        {
            let next = nextProps.complete;
            next = parseFloat(next).toFixed(2);
            this.setState({complete:next*100+"%"});//get current users new rate
        }
        
    }
    render(){
        let containerStyle = {
            float:"left",
            width:this.state.width,
            border:"1px solid #b9d17f",
            borderRadius:"5px",
            padding:"0",
            height:this.state.height,
            fontFamily:"Times New Roman",
            fontSize:"9px",
            verticleAlign:"middle",
            lineHeight:this.state.height,
            textAlign:"center",
            overflow:"hidden"
        };
        let backStyle = {
            position:"relative",
            width:this.state.complete,
            borderRadius:"3px",
            backgroundColor:"#b9d17f",
            height:this.state.height,
            top:"-20px",
            zIndex:"-1"
        };
		return(
            <div id={this.props.id} style={containerStyle}>
                {this.state.notice + this.state.complete}
                <div style={backStyle}></div>
            </div>
		)
	}
};
export default Progress;