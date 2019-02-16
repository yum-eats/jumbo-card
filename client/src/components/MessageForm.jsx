import React from 'react';

class MessageForm extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className='popup'>

				<form className='popup_inner message-form'>
					<button className="close" name="messageForm" type='button' onClick={this.props.closePopup}>X</button>
					<h2>Send a Message</h2>
					<hr/>
					<div className="to-restaurant">
						<p><strong>To:</strong> {this.props.name}</p>
						<p>Responds in <strong>2 hours</strong></p>
					</div>
					<div className="text-message">
						<p>What would you like to know?</p>
						<textarea style={{height: 150, width: '100%', padding: 0}} placeholder="What would you like us to know"></textarea>
					</div>
					<div className="user-email">
						<div>
							<span>Email</span>:<br/>
							<input type="text"/>
						</div>
						<div>
							 <span>First Name</span>: <br/>
							<input type="text"/>
						</div>

					</div>
					<div className="send-box">
						<button type="button">Send a Message</button>
						<p>We'll send your information to the business to help get you a response.</p>
					</div>
				</form>
			</div>
		);
	}
}
export default MessageForm;