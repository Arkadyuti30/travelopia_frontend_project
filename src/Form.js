import React from 'react'
import './App.css';
import FlatButton from './FlatButton'

export default function Form() {
	return(
		<div id="form">
			<form id="form-contents">
				 <input type="text" id="form-name" class="broad-input" name="form-name" placeholder="Enter your name"/>
				 <input type="text" id="form-email" class="broad-input" name="form-email" placeholder="Enter your email"/>
				 <select id="form-place" class="broad-input">
				  <option value="" selected disabled hidden>Where do you want to go?</option>
				  <option value="India">India</option>
				  <option value="Africa">Africa</option>
				  <option value="Europe">Europe</option>
				 </select>
				 <select id="form-travellers" class="broad-input">
				  	<option value="" selected disabled hidden>Travellers</option>
				  	<option value="1">1</option>
				  	<option value="2">2</option>
				  	<option value="3">3</option>
				  		<option value="4">4</option>
				  		<option value="5">5</option>
				  		<option value="6">6</option>
				  		<option value="7">7</option>
				  		<option value="8">8</option>
				  		<option value="9">9</option>
				  	</select>
				  	<div id="budget-wrapper">
				  		<div id="currency">🇺🇸 USD</div>
				  		<select id="form-budget">
				  			<option value="" selected disabled hidden>Budget</option>
				  			<option value="1000-2000">1000-2000</option>
				  			<option value="2000-3000">2000-3000</option>
				  			<option value="3000-4000">3000-4000</option>
				  			<option value="4000-5000">4000-5000</option>
				  			<option value="5000-6000">5000-6000</option>
				  			<option value="6000-7000">6000-7000</option>
				  			<option value="7000-8000">7000-8000</option>
				  			<option value="8000-9000">8000-9000</option>
				  			<option value=">9000">>9000</option>
				  		</select>
				  	</div>
				  	<FlatButton buttonText="SUBMIT"/>
			</form>
		</div>
	)
}