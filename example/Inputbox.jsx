import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Inputbox} from 'thousanday-react';
import {Inputarea} from 'thousanday-react';

class Main extends Component{
	render(){
		return(
			<div><h6>
				<div>
					<div>
						Simple One:
					</div>
					<div>
						<Inputbox content="123456" total="10" width="100px" />
					</div>
				</div>
				<div>
					<div>
						Do not restrict:
					</div>
					<div>
						<Inputbox content="123456" total="10" restrict="off" width="150px" />
					</div>
				</div>
				<div>
					<div>
						Change style:
					</div>
					<div>
						<Inputbox border="1px dashed orange" content="123456" total="10" width="200px"/>
					</div>
				</div>
				<div>
					<div>
						This is a textarea:
					</div>
					<div>
						<Inputarea content="123456789" total="500" width="200px" height="150px"/>
					</div>
				</div>
			</h6></div>
		)
	}
};

ReactDOM.render(<Main/>, document.getElementById('main'));
