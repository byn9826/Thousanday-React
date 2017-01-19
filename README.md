# React-Thousanday
This is a npm package of React UI components used in Thousanday Project, will update step by step.


##1. Install
```
npm install thousanday-react --save
```


##2. Components List
[Random](#random)<br />
[Rate](#rate)<br />
[Inputbox](#inputbox)<br />
[Inputarea](#inputarea)<br />
[Vote](#vote)<br />


##<a name="random">Random</a>
Output one random contents from a list of content you provided inside a designated html tag.<br/>
![Random](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/5.JPG)<br/>
[Example](http://www.thousanday.com/react#random)<br/>
```
import {Random} from 'thousanday-react';
```
```
let randomContent = ["Slogan 1", "Slogan 2", "Slogan 3"];
...
<Random random={randomContent} font="h3" />
```
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>content</td>
		<td>Mandatory. Provie list of content you want to show randomly.</td>
		<td>null</td>
		<td>["123", "234", "345"]</td>
	</tr>
	<tr>
		<td>font</td>
		<td>Mandatory. Provide a tag name to hold the output.</td>
		<td>null</td>
		<td>"h3"</td>
	</tr>
	<tr>
		<td>style</td>
		<td>Optional. Define a style name could be used to styling this component.</td>
		<td>null</td>
		<td>"randomStyle"</td>
	</tr>
</table>


##<a name="rate">Rate</a>
Display or Receive rate from users<br/>
![Rating](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/1.PNG)<br/>
[Example](http://www.thousanday.com/react#rate)<br/>
```
import {Rate} from 'thousanday-react';
```
```
<Rate rate="3" max="5" interact="true" rateChange={this.rateChange.bind(this)} />
```
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>rate</td>
		<td>Mandatory. Define the default rates. Define it as 0 for no initial rate.</td>
		<td>null</td>
		<td>"4"</td>
	</tr>
	<tr>
		<td>max</td>
		<td>Mandatory. Define the maximum number of stars</td>
		<td>"5"</td>
		<td>"6"</td>
	</tr>
	<tr>
		<td>interact</td>
		<td>Optinal. If current user are allowed to change the defaut rate</td>
		<td>false</td>
		<td>"true"</td>
	</tr>
	<tr>
		<td>font</td>
		<td>Optional. Adjust size of this component</td>
		<td>"18px"</td>
		<td>"14px"</td>
	</tr>
	<tr>
		<td>color</td>
		<td>Optional. Define color of this component</td>
		<td>"orange"</td>
		<td>"black"</td>
	</tr>
	<tr>
		<td>rateChange</td>
		<td>Optinal. Bind with a function to receive new rate from users</td>
		<td></td>
		<td>{this.rateChange.bind(this)}</td>
	</tr>
</table>
###<b>Get new rate from user</b>
You should bind ratechange params with a function, and define interact params as "true" first:
```
<Rate rate={this.state.currentRate} max="5" interact="true" rateChange={this.rateChange.bind(this)}/>
```
Then you should create a rateChange function to deal with new rate:
```
rateChange(rateNum){
    //rateNum is the new rate from current user
    this.setState({currentRate:rateNum});
}
```


##<a name="inputbox">Inputbox</a>
Create text input with characters counter<br />
![Inputbox](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/12.JPG)<br />
[Simple Example](http://www.thousanday.com/react#inputbox)<br />
```
import {Inputbox} from 'thousanday-react';
```
```
<Inputbox content="Inital content here" max="30" />
```
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>content</td>
		<td>Mandatory. Define the content show in the input. Inital Empty one by ""</td>
		<td>null</td>
		<td>"Initial content"</td>
	</tr>
	<tr>
		<td>max</td>
		<td>Mandatory. Define the maximun number of characters users could input</td>
		<td>Must Define it</td>
		<td>"20"</td>
	</tr>
	<tr>
		<td>hint</td>
		<td>Optional. Define the placehold attribute for input tag</td>
		<td>null</td>
		<td>"Your name here"</td>
	</tr>
	<tr>
		<td>font</td>
		<td>Optional. Define the font size of the input</td>
		<td>"13px"</td>
		<td>"15px"</td>
	</tr>
	<tr>
		<td>width</td>
		<td>Optional. Define the width of this component</td>
		<td>"100%"</td>
		<td>"150px"</td>
	</tr>
	<tr>
		<td>border</td>
		<td>Optional. Define the border style</td>
		<td>"1px solid #1d4077"</td>
		<td>"1px dashed black"</td>
	</tr>
</table>
###<b>Get new input from users</b>
If you want to get the new input from users, you show define the ref params for this component first:
```
<Inputbox ref="newInput" content="" max="150" />
```
Then you could get the new input by use this.refs.newInput.state.content inside functions:
```
submitInput(){
    console.log(this.refs.newInput.state.content);//this is users new input
}
...
<button onClick={this.submitInput.bind(this)} />
```


##<a name="inputarea">Inputarea</a>
Create textarea with characters counter<br />
![Inputbox](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/11.JPG)<br />
[Simple Example](http://www.thousanday.com/react#inputarea)<br />
```
import {Inputarea} from 'thousanday-react';
```
```
<Inputarea content="Inital content here" max="300" />
```
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>content</td>
		<td>Mandatory. Define the content show in the input. Inital Empty one by ""</td>
		<td>null</td>
		<td>"Initial content"</td>
	</tr>
	<tr>
		<td>max</td>
		<td>Mandatory. Define the maximun number of characters users could input</td>
		<td>Must Define it</td>
		<td>"50"</td>
	</tr>
	<tr>
		<td>font</td>
		<td>Optional. Define the font size of the input</td>
		<td>"13px"</td>
		<td>"15px"</td>
	</tr>
	<tr>
		<td>width</td>
		<td>Optional. Define the width of this component</td>
		<td>"100%"</td>
		<td>"150px"</td>
	</tr>
	<tr>
		<td>height</td>
		<td>Optional. Define the height of this component</td>
		<td>"50px"</td>
		<td>"30px"</td>
	</tr>
	<tr>
		<td>border</td>
		<td>Optional. Define the border style</td>
		<td>"1px solid #1d4077"</td>
		<td>"1px dashed black"</td>
	</tr>
</table>
###<b>Get new input from users</b>
If you want to get the new input from users, you show define the ref params for this component first:
```
<Inputarea ref="newInput" content="" max="150" />
```
Then you could get the new input by use this.refs.newInput.state.content inside functions:
```
submitInput(){
    console.log(this.refs.newInput.state.content);//this is users new input
}
...
<button onClick={this.submitInput.bind(this)} />
```


##<a name="vote">Vote</a>
Display or Receive vote from users<br/>
![Vote](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/13.JPG)<br/>
[Example](http://www.thousanday.com/react#vote)<br/>
```
import {Vote} from 'thousanday-react';
```
```
<Vote left = "Agree" right = "Disagree" agree = "100" disagree = "60" />
<Vote left = "Good" right = "Bad" interact = "true" choice = {this.state.choice} newChoice = {this.newChoice.bind(this)} />
```
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>Left</td>
		<td>Mandatory. Words stand for your yes answer, show on left side.</td>
		<td>"Agree"</td>
		<td>"Good"</td>
	</tr>
	<tr>
		<td>Right</td>
		<td>Mandatory. Words stand for your no answer, show on right side.</td>
		<td>"Disagree"</td>
		<td>"Bad"</td>
	</tr>
	<tr>
		<td>agree</td>
		<td>Optinal. Define the number show on left for vote display</td>
		<td>0</td>
		<td>"100"</td>
	</tr>
	<tr>
		<td>disagree</td>
		<td>Optional. Define the number show on the right for vote display</td>
		<td>0</td>
		<td>"60"</td>
	</tr>
	<tr>
		<td>Interact</td>
		<td>Mandatory for collecting vote. No use for display vote</td>
		<td>"true"</td>
		<td>"false"</td>
	</tr>
	<tr>
		<td>Choice</td>
		<td>Mandatory for collecting vote. Initial user's choice. 0 for no, 1 for yes, 2 for no choice before</td>
		<td>"1"</td>
		<td>"2"</td>
	</tr>
	<tr>
		<td>newChoice</td>
		<td>Optinal. Bind with a function to show new choice from users</td>
		<td></td>
		<td>{this.newChoice.bind(this)}</td>
	</tr>
</table>
###<b>Show new vote</b>
If you just want to display a vote, just define left, right, agree, disagree
```
<Vote left = "Agree" right = "Disagree" agree = "100" disagree = "60" />
```
###<b>Receive vote from users</b>
You should define interact, choice, newChoice for receive vote
```
this.state = {choice: "2"};
...
<Vote left = "Good" right = "Bad" interact = "true" choice = {this.state.choice} newChoice = {this.newChoice.bind(this)} />
```
Then you can get user's choice by a newChoice function
```
newChoice(newNum) {
    this.setState({userVote: newNum});
}
//this.state.choice would be 0 if user choose no, 1 for yes, 2 for no choice
```


##License
MIT
