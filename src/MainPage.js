import { React, useState } from 'react'
import './App.css';
import Form from './Form'
import SuccessBox from './SuccessBox'
import FormDataTable from './FormDataTable'


export default function MainPage() {
	const [showForm, setShowForm] = useState(true)
	const [showSuccessBox, setShowSuccessBox] = useState(false)
	const [showTable, setShowTable] = useState(false)

	// Callback function to handle data received from the
    //child component
    const handleCallback = (childData) => {
        // Update the variables in the component's state
        setShowForm(childData.showForm)
        setShowSuccessBox(childData.showSuccessBox)
        setShowTable(childData.showTable)
    }

	return(
		<div id="main-page">
			<div id="main-page-header">
				<h2>Travel. Experience. Live.</h2>
			</div>
			<div>
				{
					showForm ? 
						<Form parentCallback={handleCallback}/> : 
							showSuccessBox ? 
								<SuccessBox parentCallback={handleCallback}/> : 
									showTable ? 
										<FormDataTable parentCallback={handleCallback}/> : 
											<div><h3>Oops! Please reload page.</h3></div>
				}
			</div>
		</div>
	)
}