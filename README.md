# ReactUI-Thousanday
Some ReactUI components
---
##1. Install
```
npm install thousanday-react --save
```
##2. Rating Stars
![Rating](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/1.PNG)<p>
<table>
  <tr>
    <td>Params</td><td>example</td><td>Usage</td><td>Default</td>
  </tr>
  <tr>
    <td>rate</td><td>4</td><td>define the default stars</td><td>Must Define it</td>
  </tr>
  <tr>
    <td>length</td><td>5</td><td>define the maximum stars</td><td>Must Define it</td>
  </tr>
  <tr>
    <td>font</td><td>14px</td><td>adjust the size</td><td>18px</td>
  </tr>
  <tr>
    <td>color</td><td>black</td><td>define the color</td><td>orange</td>
  </tr>
  <tr>
    <td>change</td><td>yes</td><td>make it interactive</td><td>no</td>
  </tr>
  <tr>
    <td>rateChange</td><td>{this.rateChange.bind(this)}</td><td>Receive a rate from users</td><td></td>
  </tr>
</table>
[Simple Example](http://baozier.ca/react-rate)
###
<b>2.1 use it as display only</b>
```
import Rate from 'thousanday-react';
<Rate rate="4" length="5"/>
<Rate rate="3" length="5" font="14px" color="black" />
```
Notice: You must define rate and length for every Rate component
###
<b>2.2 use it to receive a rating from users</b>
```
import Rate from 'thousanday-react';
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
 
Update:
  From v0.0.20 to v0.1.0: Delete mouseover mouseLeave effects to make it more reliable.
##License
MIT
