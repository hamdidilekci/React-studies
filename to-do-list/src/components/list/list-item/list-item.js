import './list-item.css'

function ListItem({ deleteListItem, listItems }) {

	const onDelete = (e) => {
		// eslint-disable-next-line eqeqeq
		const updatedListItems = listItems.filter((listItem, index) => index != e.target.id);
		deleteListItem(updatedListItems);
	}


	const onCheckboxClick = (i, e) => {
		document.getElementById(i).checked = !document.getElementById(i).checked;

		e.target.style.textDecoration
			? e.target.style.removeProperty('text-decoration')
			: e.target.style.setProperty('text-decoration', 'line-through');
	}

	return (
		<section className="main" >
			<button type="button" className="btn btn-warning">
				Mark all as complete
			</button>
			<ul className="todo-list">
				{listItems.map((listItem, i) => (
					<li key={i} >
						<div className="view">
							<input id={i} className="listItemCheckbox" type="checkbox" />
							<label className='listItemLabel' onClick={(e) => onCheckboxClick(i, e)}>
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