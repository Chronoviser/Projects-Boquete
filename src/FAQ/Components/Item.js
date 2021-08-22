import { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import styled from 'styled-components';

const PlusIcon = styled(AiOutlinePlusCircle)`
    height: 27px;
    width: 27px;
    color: indigo;
`

const MinusIcon = styled(AiOutlineMinusCircle)`
    height: 27px;
    width: 27px;
    color: grey;
`
const ItemCard = styled.div`   
    margin: 10px;
    width: 100%;
    padding: 10px;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, 0.08);
    border-radius: 2px;
`

function Item({ ques, ans }) {

    const [show, setShow] = useState(false);

    return (
        <ItemCard>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 >{ques}</h3>
                {
                    show
                        ? <MinusIcon onClick={() => setShow(!show)} />
                        : <PlusIcon onClick={() => setShow(!show)} />
                }
            </div>
            {
                show
                    ? <div style={{ textAlign: "start" }}>{ans}</div>
                    : null
            }
        </ItemCard>
    );
}

export default Item;