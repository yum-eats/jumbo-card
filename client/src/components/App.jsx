const styyle = require('../style.scss');
import React from 'react';

import Header from './Header.jsx';
import Subheader from './Subheader.jsx';

class App extends React.Component {
	constructor(){
		super();
	}

	render() {
		return(
			<div className="main-container">
				<div className="board-body">
					<Header />

					<Subheader />

				</div>
			</div>
		);
	}
}

export default App;