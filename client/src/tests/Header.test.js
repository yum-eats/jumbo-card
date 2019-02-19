import React from 'react';

import Enzyme, { mount,shallow } from 'enzyme';
import Header from '../components/Header.jsx';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter});
let fakeData = {
	"restaurant_id": 5,
	"name": "Mels Boom Resturant",
	"phone": "(650)888-1920",
	"claimed": true,
	"price_level": "$$$",
	"review_count": 2673,
	"star_rating": 3,
	"address": "483 Screen test me Ave.",
	"city": "San Mateo",
	"zip_code": 58872,
	"country": "usa",
	"state": "CA",
	"url": "www.CodeMel.com",
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
describe('Header Component Tests', () => {
	it('should render correctly in "debug" mode', () => {
		const component = shallow(<Header details={fakeData}/>);
		expect(component.exists()).toBe(true)
	});
	it('It renders props correctly ', () => {
		const component = shallow(<Header details={fakeData}/>);
		expect(component.instance().props.details.name).toBe('Mels Boom Resturant');
		expect(component.instance().props.details.state).toBe('CA');
		expect(component.instance().props.details.city).toBe('San Mateo');
	});
	it('Clicking on share button should update stats of shareForm to true', () => {
		const component = mount(<Header details={fakeData} />);
		const button = component.find('li[name="shareForm"]');
		button.simulate('click');
		//console.log(component.state())
		expect(component.state().shareForm).toBe(true)
	});
	it('Rating Stars should render correctly based on data passed through', () => {
		const component = mount(<Header details={fakeData} />);
		//console.log(fakeData.star_rating)
		const ratingDiv = component.find('.rating-stars');
		let rating = [0, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
		let indexRating = rating.indexOf(fakeData.star_rating);
		//console.log(ratingDiv.props().style.backgroundPosition)
		expect(ratingDiv.props().style.backgroundPosition).toBe(`0px -${indexRating * 24}px`);
	});
});
