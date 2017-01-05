# React-Thousanday
This is a npm package of React UI components used in Thousanday Project, will update step by step.
##1. Install
```
npm install thousanday-react --save
```
##2. Components List
[Rating Stars](#rate)<br />
[Upvote it](#upvote)<br />
[Inputbox character count](#inputbox)<br />
[Imagebox](#imagebox)<br />
[Random](#random)<br />
[Droplist](#droplist)<br />
[Upsertlist](#upsertlist)<br />
[Progress](#progress)<br />
[Editit](#editit)<br />

##<a name="rate">3. Rating Stars</a>
![Rating](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/1.PNG)<p>
<table>
  <tr>
    <td>Params</td><td>example</td><td>Usage</td><td>Default</td>
  </tr>
  <tr>
    <td>rate</td><td>"4"</td><td>define the default stars</td><td>Must define it</td>
  </tr>
  <tr>
    <td>length</td><td>"5"</td><td>define the maximum stars</td><td>"5"</td>
  </tr>
  <tr>
    <td>font</td><td>"14px"</td><td>adjust the size</td><td>"18px"</td>
  </tr>
  <tr>
    <td>color</td><td>"black"</td><td>define the color</td><td>"orange"</td>
  </tr>
  <tr>
    <td>change</td><td>"yes"</td><td>make it interactive</td><td>"no"</td>
  </tr>
  <tr>
    <td>className</td><td>"a-name"</td><td>styling by classname</td><td>""</td>
  </tr>
  <tr>
    <td>rateChange</td><td>{this.rateChange.bind(this)}</td><td>Receive a rate from users</td><td></td>
  </tr>
</table>
[Simple Example](http://www.thousanday.com/react#rate)
###<b>3.1 use it as display only</b>
```
import {Rate} from 'thousanday-react';
<Rate rate="4" length="5"/>
<Rate rate="3" length="5" font="14px" color="black" />
```
Notice: You must define rate and length for every Rate component
###<b>3.2 use it to receive a rating from users</b>
```
import {Rate} from 'thousanday-react';
...
constructor(){
  super();
  this.state={
    defaultRate:"0"
  };
}
...
rateChange(rateNum){
  let prevState=this.state.defaultRate;
  this.setState({defaultRate:rateNum});
  //write code to update your database here
  //rateNum is the rating value from the users
}
...
<Rate rate={this.state.defaultRate} length="5" change="yes" rateChange={this.rateChange.bind(this)}/>
```
Notice:<p>
 ・You must use change="yes" to make this component interactive<p>
 ・You must define this.state.defaultRate as the default rate<p>
 ・rateChange(rateNum) will automaticlly get the rating value(which will be a number) from the users for you<p>

##<a name="upvote">4. Upvote it</a>
![Upvote](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/2.PNG)<p>
<table>
  <tr>
    <td>Params</td><td>example</td><td>Usage</td><td>Default</td>
  </tr>
  <tr>
    <td>total</td><td>"0"</td><td>the total upvote number</td><td>Must Define it</td>
  </tr>
  <tr>
    <td>differ</td><td>"true"</td><td>Whether current user could upvote it or not</td><td>Must Define it</td>
  </tr>
  <tr>
    <td>color</td><td>"black"</td><td>content color</td><td>#1d4077(dark blue)</td>
  </tr>
  <tr>
    <td>bg</td><td>"black"</td><td>background color</td><td>"white"</td>
  </tr>
  <tr>
    <td>font</td><td>"13px"</td><td>size of the content</td><td>"11px"</td>
  </tr>
  <tr>
    <td>width</td><td>"5%"</td><td>width of the component</td><td>"auto"</td>
  </tr>
  <tr>
    <td>border</td><td>"1px solid black"</td><td>border of the component</td><td>"0"</td>
  </tr>
  <tr>
    <td>upVote</td><td>{this.upVote.bind(this)}</td><td>to know if user click upvote</td><td></td>
  </tr>
   <tr>
    <td>className</td><td>"a-className"</td><td>stlying by className</td><td>""</td>
  </tr>
</table>
[Simple Example](http://www.thousanday.com/react#upvote)
###<b>4.1 use upvote</b><p>
The most simple way
```
import {Upvote} from 'thousanday-react';
<Upvote total="100" differ="false" />
```
However, we always need to change the total vote after click
```
import {Upvote} from 'thousanday-react';
...
constructor(props){
  super(props);
  this.state={
    defaultVote:"100",
    differ:"true" //make judgement about if users can vote or not (e.g.:can't vote for his own comment)
  };
}
upVote(){
  let prevState=this.state.defaultVote;
  this.setState({defaultVote:this.state.defaultVote+1});
  this.setState({differ:"false"});//after users click upvote, they can't click it again
  //interact with your database here to add total votes
}
...
render(){
  <Upvote total={this.state.defaultVote}  upVote={this.upVote.bind(this)} differ={this.state.differ}/>
}
```
##<a name="inputbox">5. Inputbox character count</a>
![Inputbox](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/3.JPG)<p>
<table>
  <tr>
    <td>Params</td><td>example</td><td>Usage</td><td>Default</td>
  </tr>
  <tr>
    <td>content</td><td>""</td><td>Initial content in the input</td><td>Must Define it</td>
  </tr>
  <tr>
    <td>total</td><td>"50"</td><td>Maximum characters you allows in the input</td><td>Must Define it</td>
  </tr>
  <tr>
    <td>width</td><td>"150px"</td><td>width of the component</td><td>"100%"</td>
  </tr>
  <tr>
    <td>border</td><td>"1px dashed black"</td><td>border style of the input</td><td>"1px solid orange"</td>
  </tr>
  <tr>
    <td>height</td><td>"30px"</td><td>height of the input, auto for textarea</td><td>"20px"</td>
  </tr>
  <tr>
    <td>fontSize</td><td>"15px"</td><td>fontsize inside the input</td><td>"13px"</td>
  </tr>
  <tr>
    <td>border</td><td>"1px solid black"</td><td>border of the component</td><td>"0"</td>
  </tr>
  <tr>
    <td>restrict</td><td>"off"</td><td>if user could still type after reach the maximum characters</td><td>"on"</td>
  </tr>
  <tr>
    <td>name</td><td>"comment"</td><td>the name for input or textarea tag</td><td>""</td>
  </tr>
  <tr>
    <td>hint</td><td>"Input name here"</td><td>placeholder attr for input tag</td><td>null</td>
  </tr>
</table>
[Simple Example](http://www.thousanday.com/react#inputbox)
###<b>5.1 use inputbox character count</b><p>
```
import {Inputbox} from 'thousanday-react';
...
<Inputbox content="" total="10" /> //must define the content like this
<Inputbox content="a simple one" total="50" />
<Inputbox content="allow input after reach maximum" total="50" restrict="off" width="150px" />
<Inputbox border="1px dashed orange" content="change style" total="50" width="200px"/>
```
You could get the updated input like this:
```
import {Inputbox} from 'thousanday-react';
...
constructor(props){
		super(props);
		this.state={
        content:"content from db",
		};
	}
...
submitInput(){
    let changedInput = this.refs.editInput.state.content;
    this.setState({content:changedInput});
    //update your db with variable changedInput
	}
...
<Inputbox content="" total="50" /> //must define the content like this
<Inputbox ref="editInput" content={this.state.content} total="50" />
```
###<b>5.2 use inputarea character count</b><p>
If you need textarea instead of input, it would be very similar
```
import {Inputarea} from 'thousanday-react';
...
<Inputarea content="This is a textarea" total="500" height="150px"/>
```
##<a name="imagebox">6. Imagebox</a>
![Imagebox](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/4.JPG)
<table>
  <tr>
    <td>Params</td><td>example</td><td>Usage</td><td>Default</td>
  </tr>
  <tr>
    <td>slides</td><td>"[["src","alt","href"],[]..]"</td><td>Input information for images</td><td>Must Define it</td>
  </tr>
  <tr>
    <td>timmer</td><td>"5000" (5 second)</td><td>auto change main display image </td><td>null</td>
  </tr>
  <tr>
    <td>width</td><td>"150px"</td><td>width of the component</td><td>"100%"</td>
  </tr>
  <tr>
    <td>className</td><td>"a-name"</td><td>styling by classname</td><td>null</td>
  </tr>
</table>

[Simple Example](http://www.thousanday.com/react#imagebox)

###<b>6.1 use Imagebox</b><p>
```
import Imagebox from '../ui/imagebox/Imagebox';
...
let img = [
  ["/img/react/1.jpg","alt1","http://www.href1.com"],
  ["/img/react/2.jpg","alt2"],
  ["/img/react/3.jpg","alt3"]
];
...
<Imagebox slides={img} width="100%" timer="5000"/>
```
Must define give each img different alt. The maximum number of images is 5.
##<a name="random">7. Random</a>
Output random content<br/>
![Random](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/5.JPG)
<table>
  <tr>
    <td>Params</td><td>example</td><td>Usage</td><td>Default</td>
  </tr>
  <tr>
    <td>random</td><td>["123","234","345"]</td><td>Content you want to show</td><td>Must Define it</td>
  </tr>
  <tr>
    <td>font</td><td>"h3"</td><td>Define the h tag you want to use </td><td>Must define it</td>
  </tr>
  <tr>
    <td>id</td><td>"header-random"</td><td>defint a id and styling it</td><td>null</td>
  </tr>
</table>
[Simple Example](http://www.thousanday.com/react#random)
###<b>7.1 use Random</b><p>
```
import {Random} from 'thousanday-react';
...
let randomContent = ["Slogan 1","Slogan 2"];
...
<Random random={randomContent} font="h3" id="header-slogan"/>
```
Must define random and font, define id to styling when it is necessary.
##<a name="droplist">8. Droplist</a>
Show list of options to choose in select tag<br/>
![Droplist](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/7.png)
<table>
  <tr>
    <td>Params</td><td>example</td><td>Usage</td><td>Default</td>
  </tr>
  <tr>
    <td>title</td><td>"please choose one"</td><td>Provide a hint to users</td><td>null</td>
  </tr>
  <tr>
    <td>option</td><td>["option1","option2"]</td><td>Provide options</td><td>Must define it</td>
  </tr>
  <tr>
    <td>id</td><td>"selectBox"</td><td>defint a id and styling it</td><td>null</td>
  </tr>
  <tr>
    <td>width</td><td>"300px"</td><td>defint width of this component</td><td>"100%"</td>
  </tr>
  <tr>
    <td>border</td><td>"1px dashed black"</td><td>define border style of select</td><td>"1px solid orange"</td>
  </tr>
</table>
[Simple Example](http://www.thousanday.com/react#droplist)
###<b>8.1 use Droplist</b><p>
```
import {Droplist} from 'thousanday-react';
...
let option = ["option1","option2","option3"];
...
<Droplist  ref="droplistValue" title="- Choose an option -" option={option} />
```
value of each options would be 1,2,3,4,5 (start from 1) ... based on their orders. You can get the value chosed by this.refs.dropValue.state.select. If nothing has been selected, it would return 0


##<a name="upsertlist">9. Upsertlist</a>
React component create a list of options for users to choose, users could also create a new option<br/>
![Upsertlist](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/8.JPG)<br/>
[Example](http://www.thousanday.com/react#upsertlist)<br/>
```
import {Upsertlist} from 'thousanday-react';
```
```
let option = ["plan A","plan B","plan C"];
<Upsertlist title="Choose Plans:" option={option} max="12" width="200px" />
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
Then you could know users choices or if they create a new option by using this.ref
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
<Progress complete="0.7" id="show-progress" notice="Complete: " width="30%" height="30px"   />
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
		<td>id</td>
		<td>Optinal. You can stlye the container div in CSS by this id</td>
		<td>null</td>
		<td>"task-progress"</td>
	</tr>
	<tr>
		<td>Notice</td>
		<td>Optinal. Show a word inside the progress bar as a hint</td>
		<td>null</td>
		<td>"Progress: "</td>
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
<Editit content="It is a good component" id="0"  front="Note: " max="30" />
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
		<td>id</td>
		<td>Optional. When you used multi "Editit", define the id could help you know which one has been edited.</td>
		<td>null</td><td>id="0"</td>
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
If you used more than one Editit in same page, you have to define the id params:
```
<Editit content={item.comment} id="0" front="Note: " max="50" edit={this.editContent.bind(this)} />
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
