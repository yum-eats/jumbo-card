import React from 'react';

class ShareForm extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className='popup'>
				<form className='popup_inner'>
					<button name="shareForm" type='button' onClick={this.props.closePopup}>close me</button>
					<label>
						Your Name:
						<input type="text"/>
					</label>
					<label>
						Your Email:
						<input type="text"/>
					</label>
					<label>
						To <span> Email addresses</span>:
						<input type="text"/>
					</label>
					<label>
						Add a note <span>Optional</span>:
						<textarea type="text"/>
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}
export default ShareForm;