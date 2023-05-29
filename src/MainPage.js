import React from 'react'
import './App.css';
import Form from './Form'
import SuccessBox from './SuccessBox'


export default function MainPage() {
	return(
		<div id="main-page">
			<div id="main-page-header">
				<h2>Travel. Experience. Live.</h2>
			</div>
				<SuccessBox/>
		</div>
	)
}