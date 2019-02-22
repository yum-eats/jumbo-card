const styyle = require('../style.scss');
const axios = require('axios');

import React from 'react';

import Header from './Header.jsx';
import Subheader from './Subheader.jsx';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isLoaded: false,
			details : null
		}
	}

	componentDidMount () {
		//console.log(this.props.endpoint)
		axios.get(`/api/${this.props.endpoint}`)
			.then(res => {
				let resturant = res.data;
				this.setState({ isLoaded: true, details: resturant });
			}).catch(err => console.log(err))
	}

	render() {
		const { error, isLoaded, details } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="main-container">
					<div className="background-grey"></div>
					<div className="board-body">
						<Header details={details}/>

						<Subheader details={details}/>

					</div>
				</div>
			);
		}
	}
}

export default App;