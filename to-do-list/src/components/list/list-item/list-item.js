import './list-item.css'

function ListItem({ deleteListItem, listItems }) {

	const onDelete = (e) => {
		// eslint-disable-next-line eqeqeq
		const updatedListItems = listItems.filter((listItem, index) => index != e.target.id);
		deleteListItem(updatedListItems);
	}


	const onCheckboxClick = (i, e, from) => {
		if (from === 'label') {
			document.getElementById(i).checked = !document.getElementById(i).checked
		};

		e.target.parentElement.classList.toggle("completed")
		e.target.parentElement.classList.toggle("active")
	}

	const onClickAll = () => {
		document.querySelectorAll('.active')
			.forEach(el => {
				el.classList.add('completed')
				el.classList.remove('active') 
			});
		document.querySelectorAll('.checkbox')
			.forEach(el => el.checked = true);
	}

	return (
		<section className="main" >
			<button onClick={onClickAll} type="button" className="btn btn-warning">
				Mark all as complete
			</button>
			<ul className="todo-list">
				{listItems.map((listItem, i) => (
					<li key={i} >
						<div className='active view'>
							<input id={i} onClick={(e) => onCheckboxClick(i, e, 'checkbox')} className='checkbox' type="checkbox" />
							<label onClick={(e) => onCheckboxClick(i, e, 'label')}>
								{listItem}
							</label>
							<button id={i} onClick={onDelete} className="destroy"></button>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}

export default ListItem;