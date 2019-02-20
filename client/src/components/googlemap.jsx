import React from 'react';
class Map extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className='popup'>

				<div className='popup_inner map'>
					<button name="mapshow" type='button' onClick={this.props.closePopup} className="clickme">X</button>
					<img src='https://s3.us-east-2.amazonaws.com/jumbo-card/direction.png'/>
				</div>
			</div>
		);
	}
}
export default Map;