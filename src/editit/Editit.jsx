import React, {Component} from 'react';
class Editit extends Component{
    constructor(props){
		super(props);
		this.state={
            content:this.props.content,
            edit:false,
            change:false
		};
	};
    editIt(){
        if(this.state.edit){
            this.setState({change:false});
            this.setState({edit:false});
            if(this.state.change&&this.props.edit){
                this.props.edit(this.state.content,this.props.name);
            }
        }
        else{
            this.setState({edit:true});
        }
    };
    changeContent(event){
        if(event.target.value.length<=this.props.max){
            this.setState({content:event.target.value});
            if(this.state.change==false){
                this.setState({change:true});
            }
        }
    };
    render(){
        let divStyle={
            display: "inline-block",
            clear: "both",
            width: "96%",
            backgroundColor: "#348964",
            padding:"3px 2%",
            lineHeight:"25px",
            verticleAlign:"center"
        };
        let fStyle={
            fontFamily:"times new roman",
            fontSize:"10px",
            color:"#dcdce8"
        };
        let contentStyle={
            fontFamily:"times new roman",
            fontSize:"14px",
            color: "white"
        };
        let eStyle={
            float:"right",
            textAlign:"right",
            fontFamily:"times new roman",
            fontSize:"10px",
            color:"#dcdce8",
            cursor:"pointer"
        };
        let inputStyle={
            width:"80%",
            paddingLeft:"1%",
            paddingRight:"1%"
        }
        let showMiddle;
        if(this.state.edit){
            showMiddle=(<input type="text" style={inputStyle} value={this.state.content} onChange={this.changeContent.bind(this)} />)
        }
        else{
            showMiddle=(<span style={contentStyle}>{this.state.content}</span>);
        };
        let showEnd;
        if(this.state.edit){
            showEnd = "Save"
        }
        else{
            showEnd = "Edit"
        }
		return(
            <div style={divStyle}>
                <span style={fStyle}>{this.props.front}</span>
                {showMiddle}
                <div style={eStyle} onClick={this.editIt.bind(this)}>{showEnd}</div>
            </div>
		)
	}
};
export default Editit;