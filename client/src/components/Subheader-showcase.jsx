import React from 'react';
import showcase from '../images/showcase.png'

class Showcase extends React.Component {
	constructor(){
		super();
	}

	render() {
		return(
				<div className="showcase">
					<img src={showcase} alt="showcase-holder"/>
				</div>
		);
	}
}

export default Showcase;