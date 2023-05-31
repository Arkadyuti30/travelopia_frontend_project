import React from 'react'
import './App.css';
import Form from './Form'
import SuccessBox from './SuccessBox'
import FormDataTable from './FormDataTable'


export default function MainPage() {
	return(
		<div id="main-page">
			<div id="main-page-header">
				<h2>Travel. Experience. Live.</h2>
			</div>
				<Form/>
		</div>
	)
}