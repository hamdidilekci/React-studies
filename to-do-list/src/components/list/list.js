import { useState } from "react";

import ListHeader from "./list-header/list-header";
import ListItem from "./list-item/list-item";
import ListFooter from "./list-footer/list-footer";

import './list.css';

function List() {

    const [listItems, setListItems] = useState([]);

    return (
        <div className="todoapp">
            <header>
                <ListHeader setListItem={setListItems} listItems={listItems} />
            </header>
            <section>
                <ListItem setListItem={setListItems} listItems={listItems} />
            </section>
            <footer>
                <ListFooter setListItem={setListItems} listItems={listItems} />
            </footer>
        </div>
    );
};

export default List;