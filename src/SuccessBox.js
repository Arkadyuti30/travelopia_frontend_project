import React from 'react'
import './App.css';
import check_mark from './media/check_mark.gif'
import FlatButton from './FlatButton'

export default function SuccessBox() {
	return(
		<div id="success-box">
			<img src={check_mark} width="200" height="200"/>
			<span id="submit-text">Submitted!</span>
			<FlatButton buttonText="Submit another request"/>
			<FlatButton buttonText="See all  submissions"/>
		</div>
	)
}
