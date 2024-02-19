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