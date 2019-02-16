import React from 'react';
import Smallpic from '../images/thumb-nail.jpg';
import star from '../images/icons/stars.png';

class Textform extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			starPosition : '0px 0px',
			name : this.props.details.name,
			claimed : this.props.details.claimed,
			reviews : this.props.details.review_count,
			cats : this.props.details.category,
			price : this.props.details.price_level,
			rating : this.props.details.star_rating,
			city : this.props.details.city,
			code : ['+1', '+31', '+32','+33', '+34', '+39', '+41', '+43', '+44', '+45', '+46', '+47', '+48', '+49', '+52', '+54', '+55', '+56', '+60', '+61', '+63', '+64', '+65', '+81', '+90', '+351']
		}
	}
	componentDidMount () {
		if(this.state.rating > 0) {
			let rating = [0, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
			let indexRating = rating.indexOf(this.state.rating);
			this.setState({
				starPosition: `0px -${(indexRating *18) + 240}px`
			})}
	}
	render() {
		return (
			<div className='popup'>

				<form className='popup_inner text-box'>
					<button className="close" name="textFrom" type='button' onClick={this.props.closePopup}>X</button>
					<h2>Text to Phone</h2>
					<hr/>
					<div className="wrapper">
					<div className="little-card">
						<img src={Smallpic} />
						<div className="details">
							<p>{this.props.details.name}</p>
							<div className='rating-info'>
								<div className='rating-stars' style={{width: 102, height: 18, backgroundImage: `url(${star})`,backgroundPosition : this.state.starPosition}}></div>
								<p> {this.state.reviews} reviews</p>
							</div>
							<div className='price-category'>
								<span className='price-range'>{this.state.price}</span>
								<ul>
									{this.state.cats.map((cat,index)=>{
										if(index === this.state.cats.length-1){
											return <li>{cat}</li>
										}
										return <li>{cat},</li>
									})
									}
								</ul>
							</div>
							<div className="city-details">
								<p>{this.state.city}, CA</p>
							</div>
						</div>
					</div>
					<p className="contain">Text a link to your phone so you can quickly get directions, see photos, and read reviews on the go!</p>
					<div className="text-container">
						<select>
							{
								this.state.code.map((code) => {
								return <option value={code}>{code}</option>
							})
							}
						</select>
						<input type="text" placeholder="Phone Number"/>
						<button type="button">Text Link</button>
					</div>
					<p className="contain">Your carrier’s rates may apply</p>
				</div>
				</form>
			</div>
		);
	}
}
export default Textform;