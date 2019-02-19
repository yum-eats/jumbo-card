import React from 'react';

import Enzyme, {mount, shallow } from 'enzyme';
import Subheader from '../components/Subheader.jsx';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter});

let fakeData = {
	"restaurant_id": 5,
	"name": "Mel's Is Hungry Restaurant",
	"phone": "(650)888-1920",
	"claimed": true,
	"price_level": "$$$",
	"review_count": 2893,
	"star_rating": 2,
	"address": "483 Screen test me Ave.",
	"city": "San Jose",
	"zip_code": 58872,
	"country": "usa",
	"state": "CA",
	"url": "www.testme.com",
	"email": "melRules@gmail.com",
	"coordinates": {
		"latitude": 60.62239889,
		"longitude": 1.9540373
	},
	"category": [
		"Bars",
		"Cuisine",
		"Sushi Bars",
		"Seafood"
	],
};

describe('SubHeader Component Tests', () => {
	it('Sub-Header should render correctly in "debug" mode', () => {
		const component = shallow(<Subheader details={fakeData}/>);
		expect(component.exists()).toBe(true)
	});
	it('Passed through props, Restaurant obj details', () => {
		const component = shallow(<Subheader details={fakeData}/>);
		expect(component.instance().props.details.name).toBe('Mel\'s Is Hungry Restaurant');
		expect(component.instance().props.details.state).toBe('CA');
		expect(component.instance().props.details.city).toBe('San Jose');
	});
	it('State check on map Module when clicked', () => {
		const component = mount(<Subheader details={fakeData} />);
		const button = component.find('li[name="mapshow"]');
		button.simulate('click');
		//console.log(component.state())
		expect(component.state().mapshow).toBe(true);
		expect(component.state().messageForm).toBe(false);
		expect(component.state().textFrom).toBe(false);
	});
	it('State check on "Message The business" Module when clicked', () => {
		const component = mount(<Subheader details={fakeData} />);
		const button = component.find('li[name="messageForm"]');
		button.simulate('click');
		expect(component.state().mapshow).toBe(false);
		expect(component.state().messageForm).toBe(true);
		expect(component.state().textFrom).toBe(false);
	});
	it('State check on "Send to your Phone" Module when clicked', () => {
		const component = mount(<Subheader details={fakeData} />);
		const button = component.find('li[name="textFrom"]');
		button.simulate('click');
		expect(component.state().mapshow).toBe(false);
		expect(component.state().messageForm).toBe(false);
		expect(component.state().textFrom).toBe(true);
	});

});