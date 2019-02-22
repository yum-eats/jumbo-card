import React from 'react';

import Showcase from './Subheader-showcase.jsx';
import Map from './googlemap.jsx';
import MessageForm from './MessageForm.jsx';
import Textform from "./Textform.jsx";



const icon = {
	marker : {
		width: 18,
		height: 18,
		backgroundImage: `url(https://s3.us-east-2.amazonaws.com/jumbo-card/maps-and-flags.svg)`,
		display:"block",
		backgroundSize: 'contain'
	},
	direction : {
		width: 18,
		height: 18,
		backgroundImage: `url(https://s3.us-east-2.amazonaws.com/jumbo-card/compass.svg)`,
		display:"block",
		backgroundSize: 'contain'
	},
	phone : {
		width: 18,
		height: 18,
		backgroundImage: `url(https://s3.us-east-2.amazonaws.com/jumbo-card/phone-call.svg)`,
		display:"block",
		backgroundSize: 'contain'
	},
	website : {
		width: 18,
		height: 18,
		backgroundImage: `url(https://s3.us-east-2.amazonaws.com/jumbo-card/external-link-symbol.svg)`,
		display:"block",
		backgroundSize: 'contain'
	},
	message : {
		width: 18,
		height: 18,
		backgroundImage: `url(https://s3.us-east-2.amazonaws.com/jumbo-card/speech-bubble.svg)`,
		display:"block",
		backgroundSize: 'contain'
	},
	reservation : {
		width: 18,
		height: 18,
		backgroundImage: `url(https://s3.us-east-2.amazonaws.com/jumbo-card/calendar.svg)`,
		display:"block",
		backgroundSize: 'contain'
	},
	cell : {
		width: 18,
		height: 18,
		backgroundImage: `url(https://s3.us-east-2.amazonaws.com/jumbo-card/smartphone.svg)`,
		display:"block",
		backgroundSize: 'contain'
	}
};

class Subheader extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name : this.props.details.name,
			address : this.props.details.address,
			city : this.props.details.city,
			phone : this.props.details.phone,
			mapshow : false,
			messageForm: false,
			textFrom: false
		}
	}
	togglePopup(event) {
		//console.log('clicked')
		let name = event.target.getAttribute('name');
		this.setState({
			[name]: !this.state[name]
		});
	}
	render() {
		//console.log(this.props.details)
		let form;
		//console.log(this.state.mapshow,this.state.messageForm ,this.state.textFrom )
	  if(this.state.mapshow ){
			form = <Map closePopup={this.togglePopup.bind(this)} />
	  }else if ( this.state.messageForm ) {
			form =	<MessageForm name={this.state.name} closePopup={this.togglePopup.bind(this)} />
	  }else if (this.state.textFrom ) {
			form = <Textform details={this.props.details} closePopup={this.togglePopup.bind(this)} />
	  }else {
	  	form = null
	  }

		return(
			<div className="page-subheader">
				{form}
				<div className="mapbox-details">
					<div className="mapbox clickme">
						<img name="mapshow" onClick={this.togglePopup.bind(this)} src='https://s3.us-east-2.amazonaws.com/jumbo-card/staticmap.png'></img>
					</div>
					<ul className="details">
						<address><span style={icon.marker}></span> {this.state.address} <br/>
							{this.state.city}
						</address>
						<li className="clickme" name="mapshow" onClick={this.togglePopup.bind(this)}><span style={icon.direction}></span> Get Direction</li>
						<li className="plain"><span style={icon.phone}></span> {this.state.phone}</li>
						<li className="clickme"><span style={icon.website}></span> <a href="https://www.google.com/" target="_blank">website.com</a></li>
						<li className="clickme" name="messageForm" onClick={this.togglePopup.bind(this)}><span style={icon.message}></span> Message the business</li>
						<li><span style={icon.reservation} ></span> Make a Reservation</li>
						<li className="clickme" name="textFrom" onClick={this.togglePopup.bind(this)}><span style={icon.cell}></span> Send to your Phone</li>
					</ul>
				</div>

				<Showcase />
			</div>
		);
	}
}

export default Subheader;