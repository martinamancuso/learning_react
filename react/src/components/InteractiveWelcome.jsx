// Create an InteractiveWelcome component that renders an input tag and the Welcome component.
// Pass the current content of the input tag to the name prop of the Welcome component. 
// The input tag should be a controlled component.

import { useState } from 'react'

export function Welcome({ name }) {
	return <h2>Hello, {name}!</h2>
}

export function InteractiveWelcome() {
	const [name, setName] = useState("")

	function handleChangeInputValue(event) {
		setName(event.target.value)
	}

	return (
		<div>
			<input onChange={handleChangeInputValue} value={name} />
			<Welcome name={name} />
		</div>
	)
}