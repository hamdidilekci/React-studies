import { useState } from 'react'

// import './list-header.css'

function ListHeader({ setListItem, listItems }) {

	const initialInputValue = ""
	const [input, setInput] = useState(initialInputValue);

	const onChangeInput = (e) => {
		setInput( e.target.value );
	}

	const onSubmit = (e) => {
		e.preventDefault();
		if (input === "") return false;

		const value = {name:input, isCompleted: false, isVisible: true}

		setListItem([...listItems, value]);
		setInput(initialInputValue);
	}

	return (
		<header className="header">
			<h1>todos</h1>
			<form onSubmit={onSubmit}>
				<input
					value={input}
					onChange={onChangeInput}
					className="new-todo"
					placeholder="What needs to be done?"
					autoFocus
				/>
			</form>
		</header>
	)
}

export default ListHeader;