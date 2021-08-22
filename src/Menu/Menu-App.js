import './Menu-App.css';
import data from './Data/data';
import { useState } from 'react';
import MenuHeader from './Components/Menu-Header';
import CategoryBar from './Components/Category-Bar';
import Content from './Components/Content';

function MenuApp() {

    const [items, setItems] = useState(data);

    function filterItems(category) {
        if (category === 'All') setItems(data);
        else setItems(data.filter(item => item.category === category));
    }

    return (
        <div>
            <MenuHeader />
            <CategoryBar onClick={filterItems} />
            <Content items={items} />
        </div>
    );
}

export default MenuApp;