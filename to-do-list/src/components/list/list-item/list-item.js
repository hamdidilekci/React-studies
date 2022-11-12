import './list-item.css'

function ListItem({ setListItem, listItems }) {

	const onCheckboxClick = (i) => {
		setListItem(prevState => prevState.map((el, index) => {
			if (index === i) {
				return { ...el, isCompleted: !el.isCompleted }
			}
			return el;
		}));
	}

	const focusFunc = (i) => {
		setListItem(prevState => prevState.map((el, index) => {
			if (index === i) {
				return { ...el, isEditing: true }
			}
			return { ...el, isEditing: false };
		}));
	}

	const blurFunc = (i) => {
		setListItem(prevState => prevState.map((el, index) => {
			return { ...el, isEditing: false };
		}));
	}

	const onChangeItems = (i, e) => {
		setListItem(prevState => prevState.map((el, index) => {
			if (index === i) {
				return { ...el, name: e.target.value }
			}
			return el;
		}));
	}

	const onDelete = (e) => {
		// eslint-disable-next-line eqeqeq
		setListItem(prevState => prevState.filter((el, index) => index != e.target.id));
	}

	return (
		<section className="main" >
			<ul className="todo-list">
				{listItems.map((listItem, i) => (
					<li key={i} className='d-flex justify-content-between'>
						<div>
							<input
								onClick={(e) => onCheckboxClick(i)}
								type="checkbox"
								checked={listItem.isCompleted === true}
								hidden={listItem.isVisible === false}
								className='toggle'
							/>
						</div>
						<div>
							<input
								onChange={(e) => onChangeItems(i, e)}
								value={listItem.name}
								className={(listItem.isCompleted ? 'view completed' : 'view') + ' ' + (listItem.isEditing ? 'edit' : '')}
								hidden={listItem.isVisible === false}
								onFocus={(e) => focusFunc(i, e)}
								onBlur={(e) => blurFunc(i, e)}
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