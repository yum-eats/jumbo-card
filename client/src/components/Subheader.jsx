import React from 'react';

import Showcase from './Subheader-showcase.jsx';

class Subheader extends React.Component {
	constructor(){
		super();
	}

	render() {
		return(
			<div className="page-subheader">
				<div className="mapbox"></div>

				<Showcase />
			</div>
		);
	}
}

export default Subheader;