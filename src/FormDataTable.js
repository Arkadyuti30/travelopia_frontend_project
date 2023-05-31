import {React, useEffect, useState} from 'react'
import './App.css';
import Axios from 'axios'
import cross_button from './media/cross_button.svg'

export default function FormDataTable(props, parentCallback) {
	const [data, setData] = useState([])
	useEffect(() => {
		Axios.get('https://travel-backend-c90r.onrender.com/forms')
		.then(res => {
			console.log(`Got data from server ${res.data}`)
			setData(res.data)
		}).catch(err => console.log(`Error while getting data: ${err}`))
	}, [])

	const openSuccessBox = () => {
		props.parentCallback({
			showForm: false,
			showSuccessBox: true,
			showTable: false
		});
	}

	const tableData = data.map((data, index) => {
		return(
			<tr>
				<td>{data.date}</td>
				<td>{data.name}</td>
				<td>{data.email}</td>
				<td>{data.place}</td>
				<td>{data.travellers}</td>
				<td>{data.budget}</td>
			</tr>
		)
	})
	return(
		<div id="table-wrapper">
			<div id="cross-button-container" onClick={openSuccessBox}>
				<img src={cross_button}/>
			</div>
			<table>
				<tr>
					<th>Date</th>
					<th>Name</th>
					<th>Email</th>
					<th>Place</th>
					<th>Travellers</th>
					<th>Budget</th>
				</tr>
				{tableData}
			</table>
		</div>
	)
}