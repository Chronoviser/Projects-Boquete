import MenuItem from './Menu-Item';

function Content({ items }) {
    return (
        <div className="gridContainer">
            {
                items.map((item, id) => <MenuItem key={id} item={item} />)
            }
        </div>
    );
}

export default Content;