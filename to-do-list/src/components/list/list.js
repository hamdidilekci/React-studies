import { useState } from "react"

import ListHeader from "./list-header/list-header"
import ListItem from "./list-item/list-item"
import ListFooter from "./list-footer/list-footer"

function List() {

    const [listItems, setListItems] = useState([]);

    return (
        <div className="todoapp">
        <header>
            <ListHeader setListItem={setListItems} listItems={listItems}/>
        </header>
        <section>
            <ListItem deleteListItem={setListItems} listItems={listItems} />
        </section>
        <footer>
            <ListFooter listItems={listItems}/>
        </footer>
    </div>
    )
  }

export default List;