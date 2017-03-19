# React-Thousanday
A list of reusable React UI components, will update weekly.


Install
--
```
npm install thousanday-react --save
```


Components List
--
[Waterfall](#waterfall): Responsive Pinterest-Stlye Image Gallery<br/><br/>
[Postimg](#postimg): Post Panel to send message with image<br/><br/>
[Getlocation](#getlocation): Display/Get users' geolocation<br/><br/>
[Delmember](#delmember): Disapear images with shake effect<br/><br/>
[Inputbox](#inputbox): Text input with characters couting and restriction<br/><br/>
[Inputarea](#inputarea): Textarea with characters couting and restriction<br /><br/>
[Updateprofile](#updateprofile): Update profile image<br/><br/>
[Like](#like): Show/Collect like from users<br/><br/>
[Progress](#progress): Show/Update the progress bar<br/><br/>
[Rate](#rate): Show/Collect rate form users by stars<br /><br/>
[Random](#random): Show random content from a list of options<br /><br/>


<a name="waterfall">Waterfall</a>
--
Responsive Pinterest-Stlye Image Gallery<br/>
![Waterfall](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/waterfall.JPG)<br/>
[Idea](https://medium.com/@byn9826/react-ui-responsive-pinterest-style-image-gallery-210c3869be6)<br/>
[Example](http://www.thousanday.com/react#waterfall)<br/>
```
import {Waterfall} from 'thousanday-react';
```
```
//Define an array
let images = [
    ["url/0.jpg", "message0"],
    ["url/1.jpg", "message1"],
    ["url/2.jpg", "message2"],
    ["url/3.jpg", "message3"],
    ["url/4.jpg", "message4"],
    ["url/5.jpg", "message5"],
    ...
];

//Init the component
<Waterfall column="5" image={images} clickNumber={this.clickNumber.bind(this)} />

//Get the index number (in the images array) when user click on one image.
clickNumber(index) {
    console.log(index);
}

```
```
//If you want each image redirect to somewhere
let images = [
    ["url/0.jpg", "message0", "http://href0"],
    ["url/1.jpg", "message1", "http://href1"],
    ["url/2.jpg", "message2", "http://href2"],
    ["url/3.jpg", "message3", "http://href3"],
    ["url/4.jpg", "message4", "http://href4"],
    ["url/5.jpg", "message5", "http://href5"],
    ...
];

//Init the component, define link="true"
<Waterfall column="3" image={images} link="true"/>
```
<b>Features:</b><br/>
1. Automatically layout all the images based on the “column” param<br/>
2. Show related message above each image when mouse hover.<br/>
3. Responsive images and message<br/>
4. Balance the height of each column automatically<br/>
5. Return the index of each image or redirect to somewhere after click<br/>
6. You could directly show more images by set attribute like image={this.state.images}<br/>
<b>Params:</b><br/>
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>image</td>
		<td>Mandatory. Provie an array contains urls, messages, or hrefs of all the images you want to show.</td>
		<td></td>
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
		<td>Mandatory. Define how many columns you want.</td>
		<td></td>
		<td>"3"</td>
	</tr>
	<tr>
		<td>clickNumber</td>
		<td>Optional. Create a function to get the index of each image after click.</td>
		<td></td>
		<td>clickNumber={this.clickNumber.bind(this)}</td>
	</tr>
	<tr>
		<td>link</td>
		<td>Optional. Dedine as "true" to redirect to related href after click on any image</td>
		<td>"false"</td>
		<td>"true"</td>
	</tr>
	<tr>
		<td>fontFamily</td>
		<td>Optional. Define the fontFamily.</td>
		<td>"Times New Roman"</td>
		<td>"Arial"</td>
	</tr>
</table>


<a name="postimg">Postimg</a>
--
Post Panel to send message with image<br/>
![Postimg](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/postimg.JPG)<br/>
[Example](http://www.thousanday.com/react#postimg)<br/>
```
import {Postimg} from 'thousanday-react';
```
```
//Init the component
<Postimg content="" max="150" title="New post" submitImg={this.submitImg.bind(this)} reset={this.state.reset} />
//Define this.state.reset as 0
this.state = {
    //use to trigger reset Postimg
    reset: 0,
};
//Get the new post content and img by a function
submitImg(message, img) {
    console.log(message);
    console.log(img);
    //Then send by ajax to backend
    //If success, update this.state.reset to clear message and image of this component
    let reset = this.state.reset + 1;
    this.setState({reset: reset});
}

```
<b>Features:</b><br/>
1. Automatically calc and restrict user's input according to "max" param<br/>
2. Show error message when there's no content or no image or file type is not image.<br/>
3. Preview selected image<br/>

<b>Notice:</b><br/>
This component used a GLYPHICONS png under CC BY 3.0 License<br/>
[Reference](https://segmentfault.com/a/1190000000754560)<br/>

<b>Params:</b><br/>
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>content</td>
		<td>Optional. Init text box with content.</td>
		<td>""</td>
		<td>"New update"
		</td>
	</tr>
	<tr>
		<td>max</td>
		<td>Mandatory. Define max number of characters users could input</td>
		<td></td>
		<td>"100"</td>
	</tr>
    <tr>
		<td>Title</td>
		<td>Optional. Show a title message above text box</td>
		<td>""</td>
		<td>"Create a new post:"</td>
	</tr>
	<tr>
		<td>submitImg</td>
		<td>Mandatory. Create a function to get the content and image.</td>
		<td></td>
		<td>submitImg={this.submitImg.bind(this)}</td>
	</tr>
    <tr>
		<td>reset</td>
		<td>Mandatory. Init a reset code, update this code to indicate post success and reset component.</td>
		<td></td>
		<td>{this.state.reset}</td>
	</tr>
	<tr>
		<td>fontFamily</td>
		<td>Optional. Define the fontFamily.</td>
		<td>"Times New Roman"</td>
		<td>"Arial"</td>
	</tr>
    <tr>
		<td>width</td>
		<td>Optional. Define the width of this component.</td>
		<td>"100%"</td>
		<td>"80%"</td>
	</tr>
    <tr>
		<td>border</td>
		<td>Optional. Define border style of the text box.</td>
		<td>"2px solid #f7d7b4"</td>
		<td>"1px solid black"</td>
	</tr>
    <tr>
		<td>fontSize</td>
		<td>Optional. Define fontsize of the text box.</td>
		<td>"14px"</td>
		<td>"16px"</td>
	</tr>
</table>


<a name="getlocation">Getlocation</a>
--
Display/Get users' geolocation.
![getlocation](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/getlocation.JPG)<br/>
[Idea](https://medium.com/@byn9826/play-with-openlayers-to-display-get-location-in-react-2e0ed3e7d89f)<br/>
[Example](http://www.thousanday.com/react#getlocation)<br/>
```
import {Getlocation} from 'thousanday-react';
```
```
//Init the component for display location only by define display="true"
<Getlocation center={[0,0]} zoom="1" display="true" />
```
```
//Init the component to get users' location
<Getlocation center={[-79, 43]} saveLocation={this.saveLocation.bind(this)} />
//Get new coordinate stand for user's location by a function
saveLocation(coordinate) {
	console.log(coordinate);
    //update db
}
```
<b>Features:</b><br/>
1. zoom in, zoom out, get location by GPS<br/>
2. Preset zoom level for display<br/>
3. Return coordinate ([lon, lat]) stand for user's location<br/>

<b>Notice:</b><br/>
The map service is depend on [openlayers](https://openlayers.org/) under BSD License<br/>
Chrome and android require https for GPS locate feature<br/>

<b>Params:</b><br/>
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>center</td>
		<td>Optional. Set the center location at the starting point.</td>
		<td>[-147, -31] (somewhere in Pacific)</td>
		<td>[100, 30] (must be array)</td>
	</tr>
	<tr>
		<td>zoom</td>
		<td>Optional. Set the zoom level at the starting point</td>
		<td>15 (district level)</td>
		<td>"1" (global level)</td>
	</tr>
	<tr>
		<td>setZoom</td>
		<td>Optional. Set the zoom level after users click save location</td>
		<td>15</td>
		<td>"10"</td>
	</tr>
	<tr>
		<td>maxZoom</td>
		<td>Optional. Set the maximum zoom level when user click "+" button</td>
		<td>15</td>
		<td>"17"</td>
	</tr>
	<tr>
		<td>display</td>
		<td>Optional. Set it as "true" to show map for display only.</td>
		<td>"false"</td>
		<td>"true"</td>
	</tr>
	<tr>
		<td>width</td>
		<td>Optional. Width of the map</td>
		<td>200</td>
		<td>400</td>
	</tr>
	<tr>
		<td>height</td>
		<td>Optional. Height of the map</td>
		<td>200</td>
		<td>400</td>
	</tr>
	<tr>
		<td>id</td>
		<td>Optional. If you want to show more than one map in same page, must define each one with different id</td>
		<td>"thousandaymaplocation"</td>
		<td>"something"</td>
	</tr>
	<tr>
		<td>saveLocation</td>
		<td>Optional. Mandatory to return the center of the map</td>
		<td></td>
		<td>{this.saveLocation.bind(this)}</td>
	</tr>
	<tr>
		<td>fontFamily</td>
		<td>Optional. Define the fontFamily.</td>
		<td>"Times New Roman"</td>
		<td>"Arial"</td>
	</tr>
</table>


<a name="delmember">Delmember</a>
--
Disapear images with shake effect<br/>
![delmember](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/delmember.JPG)<br/>
[Example](http://www.thousanday.com/react#delmember)<br/>
```
import {Delmember} from 'thousanday-react';
```
```
//Init components with clickDel function and index
<Delmember profile={"0.jpg"} index={0} clickDel={this.clickDel.bind(this)} />
<Delmember profile={"1.jpg"} index={1} clickDel={this.clickDel.bind(this)} />
//Create clickDel function to get index of the image has been clicked by users
clickDel(index) {
	console.log(index);
    //update db according to index
}
```
<b>Features:</b><br/>
1. Show a delete button on top-right corner of the image<br/>
2. Image shakes after users click it then diaspear<br/>
3. Return index to indicate which image has been clicked<br/>

<b>Params:</b><br/>
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>profile</td>
		<td>Mandatory. Define img src.</td>
		<td></td>
		<td>"0.jpg"</td>
	</tr>
	<tr>
		<td>index</td>
		<td>Mandatory. An index to indicate current image</td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>clickDel</td>
		<td>Mandatory. Use a function to receive the index of the image has been clicked</td>
		<td></td>
		<td>{this.clickDel.bind(this)}</td>
	</tr>
	<tr>
		<td>width</td>
		<td>Optinal. Define the width of the image</td>
		<td>100 (will turn into 100 px)</td>
		<td>300 (will turn into 300 px)</td>
	</tr>
	<tr>
		<td>height</td>
		<td>Optinal. Define the height of the image</td>
		<td>100 (will turn into 100 px)</td>
		<td>300 (will turn into 300 px)</td>
	</tr>
	<tr>
		<td>marginLR</td>
		<td>Optional. Define the margin-left and margin-right</td>
		<td>10 (will turn into 10 px)</td>
		<td>30  (will turn into 30 px)</td>
	</tr>
	<tr>
		<td>fontFamily</td>
		<td>Optional. Define the font family of the button</td>
		<td>"Times New Roman"</td>
		<td>"Arial"</td>
	</tr>
</table>


<a name="inputbox">Inputbox</a>
--
Text input with characters couting and restriction<br />
![Inputbox](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/inputbox.JPG)<br />
[Simple Example](http://www.thousanday.com/react#inputbox)<br />
```
import {Inputbox} from 'thousanday-react';
```
```
//Init component with ref name
<Inputbox ref="newInput" content="" max="150" />
//Get the content from any function
submitInput(){
    console.log(this.refs.newInput.state.content);//this is users new input
}
<button onClick={this.submitInput.bind(this)} />
```
<b>Features:</b><br/>
1. Counting input characters<br/>
2. Restrict input after reaching maximun characters<br/>

<b>Params:</b><br/>
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>content</td>
		<td>Mandatory. Define the input value at the starting point. Inital Empty by ""</td>
		<td></td>
		<td>"Initial content"</td>
	</tr>
	<tr>
		<td>max</td>
		<td>Mandatory. Define the maximun number of characters users could input</td>
		<td></td>
		<td>"20"</td>
	</tr>
	<tr>
		<td>hint</td>
		<td>Optional. Define the placehold attribute for input tag</td>
		<td></td>
		<td>"Your name here"</td>
	</tr>
	<tr>
		<td>font</td>
		<td>Optional. Define the font size of the input</td>
		<td>"15px"</td>
		<td>"17px"</td>
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
		<td>"2px solid #f7d7b4"</td>
		<td>"1px dashed black"</td>
	</tr>
	<tr>
		<td>fontFamily</td>
		<td>Optional. Define the fontFamily.</td>
		<td>"Times New Roman"</td>
		<td>"Arial"</td>
	</tr>
</table>


<a name="inputarea">Inputarea</a>
--
Textarea with characters couting and restriction<br />
![Inputarea](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/inputarea.JPG)<br />
[Simple Example](http://www.thousanday.com/react#inputarea)<br />
```
import {Inputarea} from 'thousanday-react';
```
```
//Init this component with ref name
<Inputarea ref="newInput" content="" max="300" />
//Get the input content from any function
submitInput(){
    console.log(this.refs.newInput.state.content);
}
<button onClick={this.submitInput.bind(this)} />
```
<b>Features:</b><br/>
1. Counting inputarea characters<br/>
2. Restrict input after reaching maximun characters<br/>

<b>Params:</b><br/>
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>content</td>
		<td>Mandatory. Textarea value at the starting point. Inital Empty one by ""</td>
		<td></td>
		<td>"Initial content"</td>
	</tr>
	<tr>
		<td>max</td>
		<td>Mandatory. Define the maximun number of characters users could input</td>
		<td></td>
		<td>"50"</td>
	</tr>
	<tr>
		<td>fontSize</td>
		<td>Optional. Define the font size of the input</td>
		<td>"14px"</td>
		<td>"15px"</td>
	</tr>
	<tr>
		<td>fontFamily</td>
		<td>Optional. Define the font family of the input</td>
		<td>"Times New Roman"</td>
		<td>"Arial"</td>
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
		<td>"2px solid #f7d7b4"</td>
		<td>"1px dashed black"</td>
	</tr>
</table>


<a name="updateprofile">Updateprofile</a>
--
Update profile image. <br/>
![updateprofile](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/updateprofile.JPG)<br/>
[Example](http://www.thousanday.com/react#updateprofile)<br/>
```
import {Updateprofile} from 'thousanday-react';
```
```
//Init component with saveProfile function
<Updateprofile src="url/profile.png" width="200" saveProfile={this.saveProfile.bind(this)} />
saveProfile(finalUrl) {
    let formData = new FormData();
	formData.append('file', finalUrl, "profile_name.png");
	reqwest({
		url: "/upateProfile",
		method: "POST",
		data: formData,
		contentType: false,
		processData: false
	});
}
```
<b>Features:</b><br/>
1. Show new profile image<br/>
2. Return new profile image information which could send and save to backend<br/>
<b>Notice:</b><br/>
The image crop function is realized by  [react-avatar-editor](https://github.com/mosch/react-avatar-editor) under MIT<br/>
<b>Params:</b><br/>
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>src</td>
		<td>Mandatory. The image src at the starting point.</td>
		<td></td>
		<td>"/img/0/profile.png"</td>
	</tr>
	<tr>
		<td>width</td>
		<td>Mandatory. Define the width and height of the profile image</td>
		<td></td>
		<td>"200" (Return into 200px)</td>
	</tr>
	<tr>
		<td>saveProfile</td>
		<td>Mandatory. Use a function to send the new image</td>
		<td></td>
		<td>{this.saveProfile.bind(this)}</td>
	</tr>
	<tr>
		<td>fontFamily</td>
		<td>Optional. Define the fontFamily.</td>
		<td>"Times New Roman"</td>
		<td>"Arial"</td>
	</tr>
</table>


<a name="like">Like</a>
--
Show/Collect like from users<br/>
![Like](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/like.JPG)<br/>
[Example](http://www.thousanday.com/react#like)<br/>
```
import {Like} from 'thousanday-react';
```
```
//init component with newTotal function
<Like agree={this.state.like} newTotal={this.updateLike.bind(this)}/>
//Get +1 or -1 based on users action
updateLike(change) {
  let like = this.state.like;
  this.setState({like: like + change});
}
```
<b>Features:</b><br/>
1. Show total like numbers<br/>
2. Change total like numbers based on users action<br/>

<b>Params:</b><br/>
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>agree</td>
		<td>Mandatory. Initial total like numbers.</td>
		<td></td>
		<td>"0"</td>
	</tr>
	<tr>
		<td>newTotal</td>
		<td>Mandatory. Use a function to update total like numbers after users clicked the like button</td>
		<td></td>
		<td>{this.updateLike.bind(this)}</td>
	</tr>
</table>


<a name="progress">Progress</a>
--
Show/Update the progress bar<br/>
![Progress](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/progress.JPG)<br/>
[Example](http://www.thousanday.com/react#progress)<br/>
```
import {Progress} from 'thousanday-react';
```
```
//Init progress bar show progress by percentage
<Progress progress={this.state.progress} max="100" />
//Init progress bar set percentage="false" show progress by value
<Progress progress={this.state.progress} max="100" percentage="false" />
```
<b>Features:</b><br/>
1. Show progress by percentage or value<br/>

<b>Params:</b><br/>
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
		<td></td>
		<td>"20"</td>
	</tr>
	<tr>
		<td>max</td>
		<td>Mandatory. Provide a number to stand for the maximum progress.</td>
		<td></td>
		<td>"100"</td>
	</tr>
	<tr>
		<td>percentage</td>
		<td>Optional. Show the progress as percentage or value.</td>
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
	<tr>
		<td>fontFamily</td>
		<td>Optional. Define the fontFamily.</td>
		<td>"Times New Roman"</td>
		<td>"Arial"</td>
	</tr>
	<tr>
		<td>fontSize</td>
		<td>Optional. Define the fontSize.</td>
		<td>"9px"</td>
		<td>"7px"</td>
	</tr>
	<tr>
		<td>fontColor</td>
		<td>Optional. Define the color of the font.</td>
		<td>"black"</td>
		<td>"blue"</td>
	</tr>
</table>


<a name="rate">Rate</a>
--
Show/Collect rate form users by stars<br/>
![Rating](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/rate.PNG)<br/>
[Example](http://www.thousanday.com/react#rate)<br/>
```
import {Rate} from 'thousanday-react';
```
```
//Init component by define interact="true" with rateChange function
<Rate rate={this.state.currentRate} max="5" interact="true" rateChange={this.rateChange.bind(this)} />
//Update to new rate by rateChange function
rateChange(rateNum){
    this.setState({currentRate:rateNum});
}
```
```
//Init a display only rate
<Rate rate = "3" max = "5" />
```
<b>Features:</b><br/>
1. Show rate by stars<br/>
2. Update rate after user add/update a new rate<br/>

<b>Params:</b><br/>
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>rate</td>
		<td>Mandatory. Define the default rates. 0 for unrated.</td>
		<td></td>
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
		<td>Optinal. Define as "true" if users are allowed to change the rate</td>
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
		<td>Optinal. Use a function to receive new rate from users</td>
		<td></td>
		<td>{this.rateChange.bind(this)}</td>
	</tr>
</table>


<a name="random">Random</a>
--
Show random content from a list of options<br/>
![Random](https://raw.githubusercontent.com/byn9826/ReactUI-Thousanday/master/~markdown/random.JPG)<br/>
[Example](http://www.thousanday.com/react#random)<br/>
```
import {Random} from 'thousanday-react';
```
```
//Define a list of content in array
let randomContent = ["Slogan 1", "Slogan 2", "Slogan 3"];
//Init the component with the array
<Random random={randomContent} font="h3" />
```
<b>Features:</b><br/>
1. Randomly show content based on list of options<br/>
2. Insert content into a desired html tag<br/>

<b>Params:</b><br/>
<table>
	<tr>
		<td>Params</td>
		<td>Usage</td>
		<td>Default</td>
		<td>Example</td>
	</tr>
	<tr>
		<td>content</td>
		<td>Mandatory. Provide list of contents to show randomly.</td>
		<td></td>
		<td>["123", "234", "345"]</td>
	</tr>
	<tr>
		<td>font</td>
		<td>Mandatory. Provide a tag name to hold the output.</td>
		<td></td>
		<td>"h3"</td>
	</tr>
	<tr>
		<td>style</td>
		<td>Optional. Define a style name could be used to styling this component in CSS.</td>
		<td></td>
		<td>"randomStyle"</td>
	</tr>
</table>


License
--
MIT
