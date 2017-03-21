import React, {Component} from 'react';
class Waterfall extends Component {
    constructor(props) {
        super(props);
		this.state = {
            active: "",
            fontFamily: this.props.fontFamily || "Times New Roman",
            link: this.props.link || "false",
            image: this.props.image
		};
	}
    componentDidMount() {
        let self = this;
        let interval = setInterval(() => {
            if(document.readyState === 'complete') {
                clearInterval(interval);
                relayout(self);
            }    
        }, 500);
        function relayout(self) {
            let columnNumber = parseInt(self.props.column);
            if (self.props.image.length > columnNumber) {
                let columnLow = 0;
                let columnHigh = 0;
                let oneColumn = document.getElementsByName("reactWaterfallColumn");
                let exchangeChild;
                let j;
                for (j = 1; j < columnNumber ; j++) {
                    if (oneColumn[j].offsetHeight <= oneColumn[columnLow].offsetHeight) {
                        columnLow = j;
                    } else if (oneColumn[j].offsetHeight > oneColumn[columnHigh].offsetHeight) {
                        columnHigh = j;
                    }
                }
                while ((oneColumn[columnHigh].offsetHeight - oneColumn[columnLow].offsetHeight) > oneColumn[columnHigh].lastChild.offsetHeight ) {
                    exchangeChild = oneColumn[columnHigh].lastChild;
                    oneColumn[columnHigh].removeChild(oneColumn[columnHigh].lastChild);
                    oneColumn[columnLow].appendChild(exchangeChild);
                    for (j = 1; j < columnNumber; j++) {
                        if (oneColumn[j].offsetHeight <= oneColumn[columnLow].offsetHeight) {
                            columnLow = j;
                        } else if (oneColumn[j].offsetHeight > oneColumn[columnHigh].offsetHeight) {
                            columnHigh = j;
                        }
                    }
                }
            }
        }
    }
    componentDidUpdate() {
        let columnNumber = parseInt(this.props.column);
        let oldImage = this.state.image;
        if ((this.props.image.length > columnNumber) && (this.props.image != oldImage)) {
            this.setState({image: this.props.image});
            let columnLow = 0;
            let columnHigh = 0;
            let oneColumn = document.getElementsByName("reactWaterfallColumn");
            let exchangeChild;
            let j;
            for (j = 1; j < columnNumber ; j++) {
                if (oneColumn[j].offsetHeight <= oneColumn[columnLow].offsetHeight) {
                    columnLow = j;
                } else if (oneColumn[j].offsetHeight > oneColumn[columnHigh].offsetHeight) {
                    columnHigh = j;
                }
            }
            while ((oneColumn[columnHigh].offsetHeight - oneColumn[columnLow].offsetHeight) > oneColumn[columnHigh].lastChild.offsetHeight ) {
                exchangeChild = oneColumn[columnHigh].lastChild;
                oneColumn[columnHigh].removeChild(oneColumn[columnHigh].lastChild);
                oneColumn[columnLow].appendChild(exchangeChild);
                for (j = 1; j < columnNumber; j++) {
                    if (oneColumn[j].offsetHeight <= oneColumn[columnLow].offsetHeight) {
                        columnLow = j;
                    } else if (oneColumn[j].offsetHeight > oneColumn[columnHigh].offsetHeight) {
                        columnHigh = j;
                    }
                }
            }
        } else {
            let waterfall = document.getElementById("reactWaterfall");
            if (waterfall) {
                waterfall.style.top = "-" + waterfall.offsetHeight + "px";
                waterfall.style.marginBottom = "-" + waterfall.offsetHeight + "px";
            }
        }
    }
    showContent(event) {
        if (this.state.active !== parseInt(event.target.name)) {
            this.setState({active: parseInt(event.target.name)});
        }
    }
    hideContent() {
        this.setState({active: ""});
    }
    render() {
        let rootStyle = {
            display: "inline-block",
            width: "100%",
            verticalAlign: "top",
            padding: "0",
            margin: "0"
        };
        let rootColumnStyle = {
            display: "inline-block",
            verticalAlign: "top",
            width: (parseInt(100 / this.props.column) -2) + "%",
            padding: "0 1%",
            margin: "5px 0"
        };
        let columnSingleStyle = {
            display: "block",
            width: "100%",
            marginBottom: "15px",
            padding: "0"
        };
        let columnSingleStylePointer = {
            display: "block",
            width: "100%",
            marginBottom: "15px",
            padding: "0",
            cursor: "pointer"
        };
        let singleImgStyle = {
            display: "block",
            width: "100%",
            borderRadius: "5px",
            margin: "0",
            padding: "0"
        };
        let singleContentStyle = {
            position: "relative",
            width: "92%",
            margin: "0",
            padding: "4px 4%",
            backgroundColor: "rgba(0,0,0,0.7)",
            borderRadius: "3px",
            color: "white",
            fontFamily: this.state.fontFamily,
            fontSize: "14px",
            fontWeight: "normal"
        };
        let imageSingle;
        let columns = [];
        let lines = parseInt(this.props.column);
        let i;
        for (i = 0; i < lines; i++) {
            columns[i] = [];
        }
        for (i = 0; i < this.props.image.length; i++) {
            if (this.state.active === i && this.props.clickNumber) {
                imageSingle = (
                    <div key={"reactwaterfallSingle" + i} style={columnSingleStylePointer}>
                        <img style={singleImgStyle} name={i} alt={this.props.image[i][1]} src={this.props.image[i][0]} onMouseLeave={this.hideContent.bind(this)} onClick={this.props.clickNumber.bind(null, this.state.active)} />
                        <div id="reactWaterfall" style={singleContentStyle} onMouseOver={this.showContent.bind(this)} onClick={this.props.clickNumber.bind(null, this.state.active)} >
                            {this.props.image[i][1]}
                        </div>
                    </div>
                );
            } else if (this.state.active === i && !this.props.clickNumber && this.state.link != "true") {
                imageSingle = (
                    <div key={"reactwaterfallSingle" + i} style={columnSingleStyle}>
                        <img style={singleImgStyle} name={i} alt={this.props.image[i][1]} src={this.props.image[i][0]} onMouseLeave={this.hideContent.bind(this)} />
                        <div id="reactWaterfall" style={singleContentStyle} onMouseOver={this.showContent.bind(this)} >
                            {this.props.image[i][1]}
                        </div>
                    </div>
                );
            } else if (this.state.active === i && !this.props.clickNumber && this.state.link == "true") {
                imageSingle = (
                    <div key={"reactwaterfallSingle" + i} style={columnSingleStyle}>
                        <a href={this.props.image[i][2]}>
                            <img style={singleImgStyle} name={i} alt={this.props.image[i][1]} src={this.props.image[i][0]} onMouseLeave={this.hideContent.bind(this)} />
                            <div id="reactWaterfall" style={singleContentStyle} onMouseOver={this.showContent.bind(this)} >
                                {this.props.image[i][1]}
                            </div>
                        </a>
                    </div>
                );
            } else {
                imageSingle = (
                    <div key={"reactwaterfallSingle" + i} style={columnSingleStyle}>
                        <img style={singleImgStyle} name={i} alt={this.props.image[i][1]} src={this.props.image[i][0]} onMouseOver={this.showContent.bind(this)} />
                    </div>
                );
            }
            columns[i % lines].push(imageSingle);
        }
        let allColumn = [];
        for (i = 0; i < lines; i++) {
            allColumn[i] = (
                <div key={"reactWaterfallColumn" + i} name="reactWaterfallColumn" style={rootColumnStyle}>
                    {columns[i]}
                </div>
            );
        }
		return (
            <section style={rootStyle}>
                <div>
                    {allColumn}
                </div>
            </section>
		);
	}
}
export default Waterfall;