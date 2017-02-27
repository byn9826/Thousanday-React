import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../general/Header';
import Footer from '../general/Footer';
import RandomEG from './RandomEG';
import RateEG from './RateEG';
import WaterfallEG from './WaterfallEG';
import InputboxEG from './InputboxEG';
import InputareaEG from './InputareaEG';
import AddtolistEG from './AddtolistEG';
import VoteEG from './VoteEG';
import LikeEG from './LikeEG';
import OvaleditEG from './OvaleditEG';
import ProgressEG from './ProgressEG';
import UpdateprofileEG from './UpdateprofileEG';
import GetlocationEG from './GetlocationEG';
class Reactui extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div id = "container">
				<Header />
				<main id = "main">
					<h1>Thousanday-React</h1>
					<h2>A list of React UI components</h2>
					<h3>
						<b>install:</b><br />
						npm install thousanday-react --save
					</h3>
					<a className = "github-button" href = "https://github.com/byn9826/thousanday-react" data-style = "mega" aria-label = "Star byn9826/thousanday-react on GitHub">Star</a>
					<section>
						<h3 className = "main-list">Display</h3>
						<h4 className = "orange-box"><a href ="#random">Random</a></h4>
						<h4 className = "orange-box"><a href ="#waterfall">Waterfall</a></h4>
						<h4 className = "orange-box"><a href ="#getlocation">Getlocation</a></h4>
						<h4 className = "orange-box"><a href ="#progress">Progress</a></h4>
						<h3 className = "main-list">List</h3>
						<h4 className = "orange-box"><a href ="#addtolist">AddtoList</a></h4>
						<h3 className = "main-list">Attitude</h3>
						<h4 className = "orange-box"><a href ="#rate">Rate</a></h4>
						<h4 className = "orange-box"><a href ="#vote">Vote</a></h4>
						<h4 className = "orange-box"><a href ="#like">Like</a></h4>
						<h3 className = "main-list">Input</h3>
						<h4 className = "orange-box"><a href = "#inputbox">Inputbox</a></h4>
						<h4 className = "orange-box"><a href = "#inputarea">Inputarea</a></h4>
						<h3 className = "main-list">Button</h3>
						<h4 className = "orange-box"><a href ="#updateprofile">Updateprofile</a></h4>
						<h4 className = "orange-box"><a href ="#ovaledit">Ovaledit</a></h4>
					</section>
				</main>
				<section id="right">
					<WaterfallEG />
					<UpdateprofileEG />
					<GetlocationEG />
					<RateEG />
					<InputboxEG />
					<InputareaEG />
					<LikeEG />
					<ProgressEG />
					<RandomEG />
					<AddtolistEG />
					<VoteEG />
					<OvaleditEG />
				</section>
				<Footer />
			</div>
		)
	}
};
ReactDOM.render(<Reactui />, document.getElementById('root'));
