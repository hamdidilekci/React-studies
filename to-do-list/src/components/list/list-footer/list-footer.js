import React from 'react'

import './list-footer.css'

function ListFooter({ setListItem, listItems }) {

	const showActive = () => {
		setListItem(prevState => prevState.map((el) => {
			el.isCompleted ?  el.isVisible = false :  el.isVisible = true
			return el
		}));
	}

	const showAll = () => {
		setListItem(prevState => prevState.map((el) => {
			el.isVisible = true
			return el
		}));
	}

	const showCompleted = () => {
		setListItem(prevState => prevState.map((el) => {
			el.isCompleted ?  el.isVisible = true :  el.isVisible = false
			return el
		}));
	}

	const onDeleteAllCompleted = () => {
		setListItem(prevState => prevState.filter(el => !el.isCompleted));
	}

	return (
		<footer className="footer">
			<span className="todo-count">
				<strong> {listItems.length} </strong>
				items left
			</span>

			<ul className="filters">
				<li>
					<button className='btn btn-primary' onClick={showAll}>All</button>
				</li>
				<li>
					<button className='btn btn-success' onClick={showActive}>Active</button>
				</li>
				<li>
					<button className='btn btn-dark' onClick={showCompleted}>Completed</button>
				</li>
			</ul>

			<button onClick={onDeleteAllCompleted} className="clear-completed">
				Clear completed
			</button>
		</footer>
	)
}

export default ListFooter;