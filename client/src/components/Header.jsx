import React from 'react';
import star from '../images/icons/stars.png';
import claimed from '../images/icons/checking.svg';
import bigStar from '../images/icons/star.svg';
import photo from '../images/icons/camera.svg';
import share from '../images/icons/share-symbol.svg';
import save from '../images/icons/bookmark-white.svg';
const images = {
	iconsStar: {
		width: 132,
		height: 24,
		backgroundImage: `url(${star})`,
		backgroundPosition: "0px -192px"
	},
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
	constructor(){
		super();
	}

	render() {
		return(
			<div className="page-header">
				<div className="page-header-left">
					<div className="title">
						<h1>Daughter Thai Kitchen</h1>
						<div className='claim-status'><span className='claimed-icon' style={images.iconClaimed}></span> Claimed</div>
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
					<button> <span className="star-icon" style={images.iconBigStar}></span> Write a Review</button>
					<div className="small-buttons">
						<ul>
							<li> <span className="photo-icon" style={images.iconPhoto}></span> Add Photo</li>
							<li><span className="share-icon" style={images.iconShare}></span> Share</li>
							<li><span className="sae-icon" style={images.iconSave}></span> Save</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;