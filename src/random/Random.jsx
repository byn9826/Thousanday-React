import React, {Component} from 'react';
class Random extends Component{
    render(){
        let random = this.props.random;
        let chooseNumber = Math.floor(Math.random() * random.length);
        let chooseRandom = random[chooseNumber];
		return(
            React.createElement(this.props.font,{id:this.props.id}, chooseRandom)
		)
	}
};
export default Random;