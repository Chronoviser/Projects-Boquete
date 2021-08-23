import { useEffect } from 'react';
import data from '../Data/data';

function Content({ n }) {

    useEffect(() => console.log(n));
    var paras = [data[0]];

    for (var i = 1; i < n; i++) {
        paras.push(data[i]);
    }

    return (
        <div>{paras.map((p, i) => <p key={i}>{p}</p>)}</div>
    )
}

export default Content;