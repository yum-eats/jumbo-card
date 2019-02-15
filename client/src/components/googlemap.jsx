import React from 'react';
import bigmap from '../images/direction.png'
class Map extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className='popup'>

				<div className='popup_inner map'>
					<button name="mapshow" type='button' onClick={this.props.closePopup} className="clickme">X</button>
					<img src={bigmap}/>
				</div>
			</div>
		);
	}
}
export default Map;