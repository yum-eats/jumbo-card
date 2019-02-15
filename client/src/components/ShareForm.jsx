import React from 'react';

class ShareForm extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className='popup'>
				<form className='popup_inner share-form'>
					<button className="close" name="shareForm" type='button' onClick={this.props.closePopup}>X</button>
					<h2>Share business</h2>
					<div className="social-share">
						<button type="button" className="facebook">
							<span></span>
							Share on Facebook
						</button>
						<button type="button" className="twitter">
							<span></span>
							Share on Twitter
						</button>
					</div>
					<input type="text" placeholder="for now"/>
					<fieldset className="hr-line">
						<legend align="center">OR</legend>
					</fieldset>
					<div className="form-inputs">
						<ul>
						<li>
							<p>Your Name</p>
							<input type="text"/>
						</li>
						<li>
							<p>Your Email</p>
							<input type="text"/>
						</li>
						<li>
							<p>To <span> Email addresses</span></p>
							<input type="text"/>
						</li>
						<li>
							<p>Add a note <span>Optional</span></p>
							<textarea type="text"/>
						</li>
						</ul>
						<button className="submit" type="button" value="Submit">Share</button>
					</div>
				</form>
			</div>
		);
	}
}
export default ShareForm;