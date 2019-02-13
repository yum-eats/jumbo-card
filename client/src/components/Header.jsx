import React from 'react';
import star from '../images/icons/stars.png';

const images = {
	iconsStar: {
		width: 132,
		height: 24,
		backgroundImage: `url(${star})`,
		backgroundPosition: "0px -192px"
	}
};


class Header extends React.Component {
	constructor(){
		super();
	}

	render() {
		return(
			<div className="page-header">
				<div className="page-header-left">
					<div className="title">
						<h1>Daughter Thai Kitchen</h1>
						<div className='claim-status'><span className='claimed-icon'></span> Claimed</div>
					</div>
					<div className='rating-info'>
						<div className='rating-stars' style={images.iconsStar}></div>
						<p> 717 reviews</p>
					</div>
					<div className='price-category'>
						<span className='price-range'>$$$</span>
						<ul>
							<li>Cat 1,</li>
							<li>Cat 2,</li>
							<li>Cat 3</li>
						</ul>
					</div>
				</div>

				<div className="page-header-right">
					<button> <span className="star-icon"></span> Write a Review</button>
					<div className="small-buttons">
						<ul>
							<li> <span className="photo-icon"></span> Add Photo</li>
							<li><span className="share-icon"></span> Share</li>
							<li><span className="sae-icon"></span> Save</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;