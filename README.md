# React-Thousanday
A list of React UI components, will update step by step.

##1. Install
```
npm install thousanday-react --save
```


##2. Components List
[Random](#random): show random content from an array<br />
[Rate](#rate): collect rating form users by stars<br />
[Waterfall](#waterfall): responsive Pinterest Image Gallery<br/>
[Inputbox](#inputbox): text input with characters couting<br />
[Inputarea](#inputarea): textarea with characters couting<br />
[Vote](#vote): display/collect agree or disagree<br />
[AddtoList](#addtolist): choose an option from a list<br />
[Like](#like): show/collect like from users<br />
[Progress](#progress): show/update the progress of something<br />


##<a name="random">Random</a>
Output one random contents from a list of content you provided inside a designated html tag.<br/>
![Random](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/random.JPG)<br/>
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
![Rating](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/rate.PNG)<br/>
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

##<a name="waterfall">Waterfall</a>
Responsive and Interactive Pinterest Like Image Gallery by React.<br/>
![Waterfall](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/waterfall.JPG)<br/>
[Example](http://www.thousanday.com/react#waterfall)<br/>
```
import {Waterfall} from 'thousanday-react';
```
```
let images = [
    ["url/0.jpg", "message0"],
    ["url/1.jpg", "message1"],
    ["url/2.jpg", "message2"],
    ["url/3.jpg", "message3"],
    ["url/4.jpg", "message4"],
    ["url/5.jpg", "message5"],
    ...
];
...
clickNumber(index) {
    console.log(index);//index is the index number (in images array) of the image which has been clicked by user
}
...
<Waterfall column="3" image={images} />// if you don't need a return when users click on images
<Waterfall column="5" image={images} clickNumber={this.clickNumber.bind(this)} />
```

<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>image</td>
		<td>Mandatory. Provie an array contains url and message of all the images you want to show.</td>
		<td>null</td>
		<td>[
				["url/0.jpg", "message0"],
				["url/1.jpg", "message1"],
				["url/2.jpg", "message2"],
				...
			]
		</td>
	</tr>
	<tr>
		<td>column</td>
		<td>Mandatory. Decide how many columns you want to images to display.</td>
		<td>null</td>
		<td>"3"</td>
	</tr>
	<tr>
		<td>clickNumber</td>
		<td>Optional. Create a function to get the index of the image has been clicked by users.</td>
		<td>null</td>
		<td>clickNumber={this.clickNumber.bind(this)}</td>
	</tr>
</table>
###<b>All the features of this component</b>
1. Passing all the image urls and messages you want to show above the image by an array, will automatically layout all the images by the number of columns you defined.
2. Show messages above images when mouse over.
3. All the images is responsive according to screen width and the messages above images is responsive too.
4. Automatically balance the height of each column. Make all the columns balanced.
5. Return the index number of the image in the image array if users click on it.


##<a name="inputbox">Inputbox</a>
Create text input with characters counter<br />
![Inputbox](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/inputbox.JPG)<br />
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
![Inputbox](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/inputarea.JPG)<br />
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
![Vote](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/vote.JPG)<br/>
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
		<td>Mandatory for collecting vote. Initial user's choice. "0" for no, 1 for yes, 2 for no choice before. "0" must be string</td>
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


##<a name="addtolist">AddtoList</a>
Show a list of options for users to select(multi).<br/>
![AddtoList](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/addtolist.JPG)<br/>
[Example](http://www.thousanday.com/react#addtolist)<br/>
```
import {AddtoList} from 'thousanday-react';
```
```
let options = ["list 1", "list 2", "list 3"];
let choice = [0, 1, 0];
...
<AddtoList content={options} choice={choice} />
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
		<td>Mandatory. Provie a list of options.</td>
		<td>null</td>
		<td>["option 1", "option 2", "option 3"]</td>
	</tr>
	<tr>
		<td>title</td>
		<td>Optional. Provie a title for all the options.</td>
		<td>null</td>
		<td>"Please choose some options:</td>
	</tr>
	<tr>
		<td>choice</td>
		<td>Optional. Use a list to stand for inital choice status. 0,null for not selected. 1 for selected</td>
		<td>all not selected</td>
		<td>[0,1,1,0]</td>
	</tr>
	<tr>
		<td>width</td>
		<td>Optional. Define the width of the component.</td>
		<td>"100%"</td>
		<td>"200px"</td>
	</tr>
</table>
### Receive users choices
If users have selected several options, you could know the result by refs inside function
```
submitPlan() {
  console.log(this.refs.planChoice.state.choice);
}
<AddtoList ref="planChoice" title="Add to your plans:" content={this.state.plan} />
<button onClick={this.submitPlan.bind(this)}>submit</button>
```
You will get an array like [0,1,1,0] or similar to [null,null,1,0], null and 0 means options in the same order has not been selected. 1 means options in the same order has been selected.


##<a name="like">Like</a>
Show and receive likes from users.<br/>
![Like](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/like.JPG)<br/>
[Example](http://www.thousanday.com/react#like)<br/>
```
import {Like} from 'thousanday-react';
```
```
updateLike(change) {
  let like = this.state.like;
  this.setState({like: like + change});
}
...
<Like agree={this.state.like} newTotal={this.updateLike.bind(this)}/>
```
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>agree</td>
		<td>Mandatory. Initial total likes.</td>
		<td>null</td>
		<td>"0"</td>
	</tr>
	<tr>
		<td>newTotal</td>
		<td>Mandatory. Update new total after users clicked the like button</td>
		<td></td>
		<td>{this.updateLike.bind(this)}</td>
	</tr>
</table>


##<a name="progress">Progress</a>
Show a bar to display users' progress.<br/>
![Progress](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/progress.JPG)<br/>
[Example](http://www.thousanday.com/react#progress)<br/>
```
import {Progress} from 'thousanday-react';
```
```
<Progress progress={this.state.progress} max="100" />
<Progress progress={this.state.progress} max="100" percentage="false" />
```
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>progress</td>
		<td>Mandatory. Provie a number to stand for the default progress.</td>
		<td>null</td>
		<td>"20"</td>
	</tr>
	<tr>
		<td>max</td>
		<td>Mandatory. Provide a number to stand for the maximum progress.</td>
		<td>null</td>
		<td>"100"</td>
	</tr>
	<tr>
		<td>percentage</td>
		<td>Optional. Show the progress as percentage format or not.</td>
		<td>true</td>
		<td>"false"</td>
	</tr>
	<tr>
		<td>height</td>
		<td>Optional. Define the height of this component.</td>
		<td>"18px"</td>
		<td>"false"</td>
	</tr>
	<tr>
		<td>width</td>
		<td>Optional. Define the width of the component.</td>
		<td>"100%"</td>
		<td>"200px"</td>
	</tr>
</table>


##License
MIT
