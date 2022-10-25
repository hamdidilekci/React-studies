import React from 'react'

function ListFooter({ setListItem, listItems }) {

	const showActive = () => {
		// document.querySelectorAll('.view')
		// 	.forEach(el => {
		// 		if (el.className.includes('active')) {
		// 		el.classList.remove('invisible')
		// 		} else {
		// 			document.querySelectorAll('.completed').forEach(el => el.classList.add('invisible'));
		// 		}
		// 	});
	}

	const showAll = () => {
		// document.querySelectorAll('.invisible').forEach(el => el.classList.remove('invisible'));
	}

	const showCompleted = () => {
		// document.querySelectorAll('.view')
		// 	.forEach(el => {
		// 		if (el.className.includes('active')) {
		// 			el.classList.add('invisible')
		// 		} else if (el.className.includes ('completed')) {
		// 			el.classList.remove('invisible')
		// 		}
		// 	});
	}

	const onDeleteAllCompleted = (e) => {

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