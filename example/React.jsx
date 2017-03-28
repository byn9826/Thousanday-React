import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../general/Header';
import Footer from '../general/Footer';
import RandomEG from './RandomEG';
import RateEG from './RateEG';
import WaterfallEG from './WaterfallEG';
import InputboxEG from './InputboxEG';
import InputareaEG from './InputareaEG';
import LikeEG from './LikeEG';
import GloginEG from './GoogleloginEG';
import FacebookloginEG from './FacebookloginEG';
import ProgressEG from './ProgressEG';
import UpdateprofileEG from './UpdateprofileEG';
import GetlocationEG from './GetlocationEG';
import DelmemberEG from './DelmemberEG';
import PostimgEG from './PostimgEG';
class Reactui extends Component {
	constructor() {
		super();
	}
	render() {
		let webpackConfig = {
			color: "black"
		};
		return (
			<div id = "container">
				<Header />
				<main id = "main">
					<h1>Thousanday-React</h1>
					<h2>A list of React UI components</h2>
					<h3>
						<b>Install:</b><br />
						npm install thousanday-react<br /><br />
						<b>Webpack Config Required:</b><br />
						url-loader - <a style={webpackConfig} href="https://github.com/byn9826/Thousanday-React/blob/master/README.md#prerequisite---webpack-config">Example</a>
					</h3>
					<a className = "github-button" href = "https://github.com/byn9826/thousanday-react" data-style = "mega" aria-label = "Star byn9826/thousanday-react on GitHub">Star</a>
					<section>
						<h3 className = "main-list">Display</h3>
						<h6 className = "orange-box"><a href ="#random">Random</a></h6>
						<h6 className = "orange-box"><a href ="#waterfall">Waterfall</a></h6>
						<h6 className = "orange-box"><a href ="#getlocation">Getlocation</a></h6>
						<h6 className = "orange-box"><a href ="#progress">Progress</a></h6>
						<h3 className = "main-list">Button</h3>
						<h6 className = "orange-box"><a href ="#updateprofile">Updateprofile</a></h6>
						<h6 className = "orange-box"><a href ="#delmember">Delmember</a></h6>
						<h3 className = "main-list">Attitude</h3>
						<h6 className = "orange-box"><a href ="#rate">Rate</a></h6>
						<h6 className = "orange-box"><a href ="#like">Like</a></h6>
						<h3 className = "main-list">Input</h3>
						<h6 className = "orange-box"><a href = "#postimg">Postimg</a></h6>
						<h6 className = "orange-box"><a href = "#inputbox">Inputbox</a></h6>
						<h6 className = "orange-box"><a href = "#inputarea">Inputarea</a></h6>
						<h3 className = "main-list">Social</h3>
						<h6 className = "orange-box"><a href = "#facebooklogin">Facebooklogin</a></h6>
						<h6 className = "orange-box"><a href = "#googlelogin">Googlelogin</a></h6>
					</section>
				</main>
				<section id="right">
					<WaterfallEG />
					<PostimgEG />
					<GetlocationEG />
					<DelmemberEG />
					<InputboxEG />
					<InputareaEG />
					<UpdateprofileEG />
					<LikeEG />
					<FacebookloginEG />
					<GloginEG />
					<ProgressEG />
					<RateEG />
					<RandomEG />
				</section>
				<Footer />
			</div>
		)
	}
};
ReactDOM.render(<Reactui />, document.getElementById('root'));
