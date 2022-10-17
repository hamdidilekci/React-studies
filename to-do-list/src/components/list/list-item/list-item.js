
import './list-item.css'

function ListItem({ deleteListItem, listItems }) {

	const onDelete = (e) => {
		// eslint-disable-next-line eqeqeq
		const updatedListItems = listItems.filter((listItem, index) => index != e.target.id);
		deleteListItem(updatedListItems);
	}

	return (
		<section className="main" >
			<label>
				Mark all as complete
			</label>
			<ul className="todo-list">
				{listItems.map((listItem, i) => (
					<li key={i} >
						<div className="view">
							<input id={i} className="listItemCheckbox" type="checkbox" />
							<label className='listItemLabel' onClick={ (e) => onCheckboxClick(i,e) }>
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