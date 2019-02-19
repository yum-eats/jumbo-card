import React from 'react';
import ShareForm from './ShareForm.jsx'
import star from '../images/icons/stars.png';
import claimed from '../images/icons/checking.svg';
import bigStar from '../images/icons/star.svg';
import photo from '../images/icons/camera.svg';
import share from '../images/icons/share-symbol.svg';
import save from '../images/icons/bookmark-white.svg';
let images = {
	iconClaimed : {
		width: 15,
		height: 15,
		backgroundImage: `url(${claimed})`,
		display:"block",
		backgroundSize: 'contain'
	},
	iconBigStar: {
		width: 15,
		height: 15,
		backgroundImage: `url(${bigStar})`,
		display:"block",
		backgroundSize: 'contain'
	},
	iconPhoto : {
		width: 20,
		height: 20,
		backgroundImage: `url(${photo})`,
		display:"block",
		backgroundSize: 'contain'
	},
	iconShare : {
		width: 15,
		height: 15,
		backgroundImage: `url(${share})`,
		display:"block",
		backgroundSize: 'contain'
	},
	iconSave : {
		width: 15,
		height: 15,
		backgroundImage: `url(${save})`,
		display:"block",
		backgroundSize: 'contain'
	}


};


class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			shareForm : false,
			starPosition : '0px 0px',
			name : this.props.details.name,
			claimed : this.props.details.claimed,
			reviews : this.props.details.review_count,
			cats : this.props.details.category,
			price : this.props.details.price_level,
			rating : this.props.details.star_rating
		}
	}
	togglePopup(event) {
		let name = event.target.getAttribute('name');
		this.setState({
			[name]: !this.state[name]
		});
	}
	componentDidMount () {
		if(this.state.rating > 0) {
			let rating = [0, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
			let indexRating = rating.indexOf(this.state.rating);
			this.setState({
				starPosition: `0px -${indexRating * 24}px`
			})}
	}
	render() {
		//this will help calulate the right y-axis for the star rating image
		//console.log(JSON.stringify(this.props.details, null, 4))
		return(
			<div className="page-header">
				<div className="page-header-left">
					<div className="title">
						<h1>{this.state.name}</h1>

						{ this.state.claimed ? <div className='claim-status'><span className='claimed-icon' style={images.iconClaimed}></span> Claimed</div> : ''}

					</div>
					<div className='rating-info'>
						<div className='rating-stars' style={{width: 132, height: 24, backgroundImage: `url(${star})`,backgroundPosition : this.state.starPosition}}></div>
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
				</div>

				<div className="page-header-right">
					<button> <span className="star-icon" style={images.iconBigStar}></span> Write a Review</button>
					<div className="small-buttons">
						<ul>
							<li> <span className="photo-icon" style={images.iconPhoto}></span> Add Photo</li>
							<li name="shareForm" onClick={this.togglePopup.bind(this)} ><span className="share-icon" style={images.iconShare}></span> Share</li>
							<li><span className="sae-icon" style={images.iconSave}></span> Save</li>
						</ul>
					</div>
				</div>
				{this.state.shareForm ?
					<ShareForm
						closePopup={this.togglePopup.bind(this)}
					/>
					: null
				}
			</div>
		);
	}
}

export default Header;