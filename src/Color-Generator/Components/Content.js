import ColorTile from "./Color-Tile";

function Content({ colors }) {
 
    return (
        <div className="colorGeneratorContent">
            {
                colors.map((color, i) => <ColorTile key={i} color={color} />)
            }
        </div>
    );
}

export default Content;