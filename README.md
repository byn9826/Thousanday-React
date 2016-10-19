# ReactUI-Thousanday
Some ReactUI components
---
##1. Install
```
npm install thousanday-react --save
```
##2. Rating Stars
![Rating](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~pic/1-rate.PNG)<p>
###
2.1 use it as display only
```
import Rate from './ui/Rate/Rate';
<Rate rate="4" length="5"/>
<Rate rate="3" length="5" font="14px" color="black" />
```
You must define rate for a default rate and length for total stars<p>
You can define font and color to change the size and color of the stars
###
2.2 use it to receive a rating from users
```
import Rate from './ui/Rate/Rate';
...
constructor(){
  super();
  this.state={
    defaultRate:"0"
  };
}
rateChange(rateNum){
  let prevState=this.state.defaultRate;
  this.setState({defaultRate:rateNum});
}
...
rateChange(rateNum){
  let prevState=this.state.defaultRate;
  this.setState({defaultRate:rateNum});
  //write code to update your database here
  //rateNum is the rating from the users
}
...
<Rate rate={this.state.defaultRate} length="5" change="yes" rateChange={this.rateChange.bind(this)}/>
```
・You must use change="yes" to make this component interactive<p>
・You must define this.state.defaultRate as the default rate<p>
・rateChange(rateNum) will automaticlly get the rate of the users for you<p>
