import './list-item.css'

function ListItem({ setListItem, listItems }) {

	const onDelete = (e) => {
		 // eslint-disable-next-line eqeqeq
		setListItem(prevState => prevState.filter((el,index)=> index != e.target.id));
	}

	const onItemClick = (i, e, from) => {
		setListItem(prevState => prevState.map((el, index) => {
			if (index === i) {
				return {...el, isCompleted:!el.isCompleted}
			}
			return el;
		}));
	}

	const onClickAll = () => {
		setListItem(prevState => prevState.map((el, index) => {
			return {...el, isCompleted: true}
		}));
	}

	return (
		<section className="main" >
			<button onClick={onClickAll} type="button" className="btn btn-warning">
				Mark all as complete
			</button>
			<ul className="todo-list">
				{listItems.map((listItem, i) => (
					<li key={i} >
						{console.log(listItem.isVisible)}
						<div className={(listItem.isCompleted ? 'view completed' : 'view') + ' ' + (listItem.isVisible ? '' : 'invisible')}>
							<label onClick={(e) => onItemClick(i, e, 'label')}>
								{listItem.name}
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