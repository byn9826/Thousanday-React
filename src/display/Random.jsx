import React, {Component} from 'react';
class Random extends Component {
    render () {
        let content = this.props.content;
        let randomNumber = Math.floor(Math.random() * content.length);
        let randomContent = content[randomNumber];
		return(
            React.createElement(
                this.props.font, 
                {style:this.props.style}, 
                randomContent
            )
		);
	};
};
export default Random;