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
			<div className="board-body">
				<h1>This is Mel- testing</h1>
				<Header />

				<Subheader />

			</div>
		);
	}
}

export default App;