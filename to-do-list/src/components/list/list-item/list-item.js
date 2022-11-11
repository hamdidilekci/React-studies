
function ListItem({ setListItem, listItems }) {
	
	const onItemClick = (i, e, from) => {
		setListItem(prevState => prevState.map((el, index) => {
			if (index === i) {
				return {...el, isCompleted:!el.isCompleted}
			}
			return el;
		}));
	}

	const onChangeItems = (i, e) => {
		setListItem(prevState => prevState.map((el, index) => {
			if (index === i) {
				return {...el, name:e.target.value}
			}
			return el;
		}));
	}
	
	const onDelete = (e) => {
		// eslint-disable-next-line eqeqeq
		setListItem(prevState => prevState.filter((el,index)=> index != e.target.id));
	}
	
	return (
		<section className="main" >
			<ul className="todo-list">
				{listItems.map((listItem, i) => (
					<li key={i} className='d-flex justify-content-between'>
						<div className="d-flex justify-content-center">
							<input 
								onClick={(e) => onItemClick(i, e, 'label')} 
								type="checkbox"
							/>
						</div>
						<div>
							<input
								onChange={(e) => onChangeItems(i, e)}
								value={listItem.name} 
								className={
									(listItem.isCompleted ? 'view completed' : 'view')
									+ ' ' + 
									(listItem.isVisible ? '' : 'hidden')
								}
							/>
						</div>	
						<div>
							<button 
								id={i} onClick={onDelete} 
								className="destroy m-0">
							</button>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}

export default ListItem;