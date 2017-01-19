# React-Thousanday
This is a npm package of React UI components used in Thousanday Project, will update step by step.


##1. Install
```
npm install thousanday-react --save
```


##2. Components List
[Random](#random)<br />
[Rate](#rate)<br />
[Upvote it](#upvote)<br />
[Inputbox character count](#inputbox)<br />
[Imagebox](#imagebox)<br />
[Droplist](#droplist)<br />
[Upsertlist](#upsertlist)<br />
[Progress](#progress)<br />
[Editit](#editit)<br />


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


##<a name="inputarea">Inputarea</a>
Create textarea with characters counter<br />
![Inputbox](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/3.JPG)<br />
[Simple Example](http://www.thousanday.com/react#inputarea)<br />
```
import {Inputarea} from 'thousanday-react';
```
```
<Inputarea content="Inital content here" total="300" height="150px"/>
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
		<td>"20px", auto for inputarea</td>
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


##<a name="upvote">4. Upvote it</a>
React component let users to upvote something.
![Upvote](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/2.PNG)<br />
[Example](http://www.thousanday.com/react#upvote)<br />
```
import {Upvote} from 'thousanday-react';
```
```
<Upvote total="100" differ="true" />
```
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>total</td>
		<td>Mandatory. Define current total upvote number</td>
		<td>null</td>
		<td>"0"</td>
	</tr>
	<tr>
		<td>differ</td>
		<td>Mandatory. If current user has the right to upvote it. (etc: can't upvote second time or upvote themself)</td>
		<td>null</td>
		<td>"true"</td>
	</tr>
	<tr>
		<td>color</td>
		<td>Optional. Define the font color</td>
		<td>#1d4077(dark blue)</td
		><td>"black"</td>
	</tr>
	<tr>
		<td>bg</td>
		<td>Optional. Define the backgrond color</td>
		<td>"white"</td>
		<td>"black"</td>
	</tr>
	<tr>
		<td>font</td>
		<td>Optional. Define size of the content</td>
		<td>"11px"</td>
		<td>"13px"</td>
	</tr>
	<tr>
		<td>width</td>
		<td>Optional. Define width of the component</td>
		<td>"auto"</td>
		<td>"5%"</td>
	</tr>
	<tr>
		<td>border</td>
		<td>Optional. Define the border style of this component</td>
		<td>"0"</td>
		<td>"1px solid black"</td>
	</tr>
	<tr>
		<td>className</td>
		<td>Optional. Stlying this component by className</td>
		<td>null</td>
		<td>"upvote1"</td>
	</tr>
	<tr>
		<td>upVote</td>
		<td>Optional. Bind with a function to deal with new users upvote</td>
		<td></td>
		<td>upVote={this.upVote.bind(this)}</td>
	</tr>
</table>
###<b>4.1 Get new total upvote numbers after user click upvote</b>
You should consider if user has the right to upvote or not first:
```
this.state={
    defaultVote:"100",
    differ:"true"
};
```
Then You should define the upVote params of this component, bind it with a function:
```
<Upvote total={this.state.defaultVote}  upVote={this.upVote.bind(this)} differ={this.state.differ}/>
```
Then you could create a funtion to deal with this new number:
```
upVote(){
    //this function would be called every time a user click upvote
    this.setState({defaultVote:this.state.defaultVote+1});
    //after users click upvote, they can't click it again
    this.setState({differ:"false"});
}
```


##<a name="inputbox">5. Inputbox character count</a>
React Component create input or textarea with characters counting hint<br />
![Inputbox](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/3.JPG)<br />
[Simple Example](http://www.thousanday.com/react#inputbox)<br />
```
import {Inputbox, Inputarea} from 'thousanday-react';
```
```
//this will create an input
<Inputbox content="" total="10" hint="name here" restrict="on" />
//this will create a textarea
<Inputarea content="Inital content here" total="300" height="150px"/>
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
		<td>total</td>
		<td>Mandatory. Define the maximun number of characters users could input</td>
		<td>Must Define it</td>
		<td>"50"</td>
	</tr>
	<tr>
		<td>hint</td>
		<td>Optional. Show placeholder attr for input tag</td>
		<td>null</td>
		<td>"Input name here"</td>
	</tr>
	<tr>
		<td>restrict</td>
		<td>Optional. Determine if users could still input after they reach maximun characters</td>
		<td>"on"</td>
		<td>"off"</td>
	</tr>
	<tr>
		<td>fontSize</td>
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
		<td>"20px", auto for inputarea</td>
		<td>"30px"</td>
	</tr>
	<tr>
		<td>border</td>
		<td>Optional. Define the border style</td>
		<td>"1px solid orange"</td>
		<td>"1px dashed black"</td>
	</tr>
</table>
###<b>5.1 Get users new input from users</b>
If you want to get the new input from users, you show define the ref params for this component first:
```
<Inputbox ref="editInput" content={this.state.content} total="50" />
```
Then you could get the new input by use this.refs inside functions:
```
submitInput(){
    console.log(this.refs.editInput.state.content);//this is users new input
}
...
<button onClick={this.submitInput.bind(this)} />
```
Notice: the use of Inputarea is similar.


##<a name="imagebox">6. Imagebox</a>
React component used to create a box show rotating images.<br />
![Imagebox](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/4.JPG)<br />
[Simple Example](http://www.thousanday.com/react#imagebox)<br />
```
import {Imagebox} from 'thousanday-react';
```
```
let imgs = [
  ["/img/react/1.jpg","alt1","http://www.href1.com"],
  ["/img/react/2.jpg","alt2"],
  ["/img/react/3.jpg","alt3"]
];
...
<Imagebox slides={imgs} timer="5000" />
```
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>slides</td>
		<td>Mandatory. Indicate src, alt and href for lists of images you want to show</td>
		<td>null</td>
		<td>"[["src","alt","href"],["src1","alt1","href1"],["src2","alt2","href2"]]"</td>
	</tr>
	<tr>
		<td>timmer</td>
		<td>Optional. Automatically rotate images based on timer</td>
		<td>null</td>
		<td>"5000" (5 second)</td>
	</tr>
	<tr>
		<td>width</td>
		<td>Optional. Define the width of this component</td>
		<td>"100%"</td>
		<td>"150px"</td>
	</tr>
	<tr>
		<td>id</td>
		<td>Optinal. Use this id to styling container of this component by CSS</td>
		<td>null</td>
		<td>"imagebox1"</td>
	</tr>
</table>
Notice:Must define give each img different alt. The maximum number of images is 5.





##<a name="droplist">8. Droplist</a>
React Component used to show list of options to choose in form of html select tag. (Single Choice)<br/>
![Droplist](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/7.png)<br />
[Example](http://www.thousanday.com/react#droplist)<br />
```
import {Droplist} from 'thousanday-react';
```
```
let option = ["option1","option2","option3"];
...
<Droplist option={option} title="- Choose an option -" />
```
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>option</td>
		<td>Mandatory. Provide options for users to choose</td>
		<td>null</td>
		<td>["option1","option2"]</td>
	</tr>
	<tr>
		<td>title</td>
		<td>Optional. Show a title to indicate what users are choosing here</td>
		<td>null</td>
		<td>"please choose one"</td>
	</tr>
	<tr>
		<td>id</td>
		<td>Optional. Use this id to styling container of this component in CSS</td>
		<td>null</td>
		<td>"select-0"</td>
	</tr>
	<tr>
		<td>width</td>
		<td>Optional. Define width of this component</td>
		<td>"100%"</td>
		<td>"300px"</td>
	</tr>
	<tr>
		<td>border</td>
		<td>Optional. Change the border style of this select component</td>
		<td>"1px solid orange"</td>
		<td>"1px dashed black"</td>
	</tr>
</table>
###<b>8.1 Get users choice</b>
If you want to know which one is users choice. Define the ref params of Droplist first:
```
<Droplist  ref="droplistValue" title="- Choose an option -" option={option} />
```
Then you can get which one option is users choice by this.refs:
```
showChoice(){
    console.log(this.refs.droplistValue.state.select);
    //If nothing has been selected, it would return 0
    //If users has choose one option, The returned value would be 1,2,3,4,5 (start from 1) ... based on their orders.
}
```


##<a name="upsertlist">9. Upsertlist</a>
React component create a list of options for users to choose, users could also create a new option. (Multi Choices)<br/>
![Upsertlist](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/8.JPG)<br/>
[Example](http://www.thousanday.com/react#upsertlist)<br/>
```
import {Upsertlist} from 'thousanday-react';
```
```
let option = ["plan A","plan B","plan C"];
...
<Upsertlist title="Choose Plans:" option={option} max="12" />
```
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>title</td>
		<td>Mandatory. Show a title indicate what the users are doing here</td>
		<td>null</td>
		<td>"Add to following lists:"</td>
	</tr>
	<tr>
		<td>option</td>
		<td>Mandatory. Show list of options for users to choose["planA","PlanB"]</td>
		<td>null</td>
		<td>["option A","option B","option C"]</td>
	</tr>
	<tr>
		<td>max</td>
		<td>Optinal. Restrict the maximun length of characters users could input if they creating a new option</td>
		<td>null</td>
		<td>"15"</td>
	</tr>
	<tr>
		<td>width</td>
		<td>Optinal. Defint width of this component</td>
		<td>"100%"</td>
		<td>"300px"</td>
	</tr>
</table>
###<b>9.1 Get users choices and new option created</b>
You need to define ref parmas of Upsertlist first.
```
<Upsertlist  ref="choosePlan" title="Choose Plans:" option={option} max="12" />
```
Then you could know users choices or if they create a new option by using this.refs.
```
submitChoice(){
    //this would return users choices in format like [null,0,1,1,0,1], 1 means option chosed, 0 or null means options not chosed. 
    //In this example: [null,0,1,1,0,1]. it means users has chosen the 3rd, 4th and 6th options
    console.log(this.refs.choosePlan.state.select);
    //If users created a new option, this would return the content of the new option
    console.log(this.refs.choosePlan.state.content);
}
```


##<a name="progress">10. Progress Bar</a>
React component used to display a progress bar<br/>
![Progress](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/9.JPG)<br/>
[Example](http://www.thousanday.com/react#progress)<br/>
```
import {Progress} from 'thousanday-react';
```
```
<Progress complete="0.7" notice="Complete: " />
```
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>complete</td>
		<td>Mandatory. Indicate how much has been completed. 0 indicate 0%, 1 indicate 100%. Must be 0.XX decial format</td>
		<td>null</td>
		<td>"0.5"</td>
	</tr>
	<tr>
		<td>Notice</td>
		<td>Optinal. Show a word inside the progress bar as a hint</td>
		<td>null</td>
		<td>"Progress: "</td>
	</tr>
	<tr>
		<td>id</td>
		<td>Optinal. Use this id to style container of this component in CSS</td>
		<td>null</td>
		<td>"task-progress"</td>
	</tr>
	<tr>
		<td>width</td>
		<td>Optinal. Width of this component</td>
		<td>"100%"</td>
		<td>"30px"</td>
	</tr>
	<tr>
		<td>height</td>
		<td>Optional. Height of this component. Must higher than "20px"</td>
		<td>"20px"</td>
		<td>"40px"</td>
	</tr>
</table>
###<b>10.1 Make Progress dynamic</b>
If you want to change the progress bar when conditions changed, you could define the complete params by this.state
```
<Progress complete={this.state.progress} notice="Dynamic Progress: "  />
```
Then you create a function to update this.state.progress first everytime, the Progress Bar would also change accordingly.
```
changeProgress(){
    let current = this.state.progress;
    this.setState({progress:parseFloat(current)+0.1});
    console.log(this.state.progress);
}
...
<button onClick={this.changeProgress.bind(this)} />
```


##<a name="editit">11. Edit it</a>
React component used to show content and let users to edit it.<br/>
![Editit](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/10.JPG)<br/>
[Example](http://www.thousanday.com/react#editit)<br/>
```
import {Editit} from 'thousanday-react';
```
```
<Editit content="It is a good component" front="Note: " max="30" edit={this.editContent.bind(this)} />
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
		<td>Mandatory. Show the initial content</td>
		<td>null</td>
		<td>content="The existing content"</td>
	</tr>
	<tr>
		<td>name</td>
		<td>Optional. When you used multi "Editit", define the name could help you know which one has been edited.</td>
		<td>null</td><td>name="0"</td>
	</tr>
	<tr>
		<td>front</td>
		<td>Optinal. Show a word in front of the content as a notice</td>
		<td>null</td>
		<td>front="Comment: "</td>
	</tr>
	<tr>
		<td>max</td>
		<td>Optinal. Restrict the length of the content as the maximum of characters.</td>
		<td>null</td>
		<td>max="30"</td>
	</tr>
	<tr>
		<td>edit</td>
		<td>Optinal. Bind with a function to get content after users click save.</td>
		<td></td>
		<td>edit={this.editContent.bind(this)}</td>
	</tr>
</table>
###<b>11.1 Get the new content after edit</b>
If you want to get the new content, you have to add a "edit" params to this component:
```
<Editit content={item.comment} front="Note: " max="50" edit={this.editContent.bind(this)} />
```
Then you get the new content by create a editContent() function:
```
editContent(newContent){
    console.log(newContent);//this will return the new content
}
```
###<b>11.2 Get the new content from multi-Editit</b>
If you used more than one Editit in same page, you have to define the name params,bind with a function:
```
<Editit content={item.comment} name="0" front="Note: " max="50" edit={this.editContent.bind(this)} />
```
Then you need to modify the editContent function:
```
editContent(newContent,thisid){
    console.log(newContent);//this will return the new content
    console.log(thisid);//this will return the id, it is 0 in this case
}
```


##License
MIT
