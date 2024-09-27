import {useReducer, useState} from "react";

const ACTION_TYPES = {
    ADD: 'addtion', SUB: 'subtraction', DIV: 'division', MUL: 'multiplication',
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD:
            return state + action.value;
        case ACTION_TYPES.SUB:
            return state - action.value;
        case ACTION_TYPES.DIV:
            return action.value === 0 ? 0 : state / action.value;
        case ACTION_TYPES.MUL:
            return state * action.value;
        default:
            return state;
    }
}

const MyReducer = () => {
    const [num, setNum] = useState(0);
    const [result, setResult] = useReducer(reducer, 0);

    const changeEvent = e => {
        setNum(parseInt(e.target.value));
    }
    const addEvent = () => {
        setResult({type: ACTION_TYPES.ADD, value: num});
    }
    const subEvent = () => {
        setResult({type: ACTION_TYPES.SUB, value: num});
    }
    const divEvent = () => {
        setResult({type: ACTION_TYPES.DIV, value: num});
    }
    const mulEvent = () => {
        setResult({type: ACTION_TYPES.MUL, value: num});
    }

    return (
        <>
            <h1 style={{textAlign: 'center'}}>useReducer</h1>
            <p>{result}</p>
            <input type="number" step="100" value={num} onChange={changeEvent}/>
            <div style={{display: 'grid', gap: '10px', gridTemplateColumns: '1fr 1fr 1fr 1fr', marginTop: '10px'}}>
                <button type="button" onClick={addEvent}>+</button>
                <button type="button" onClick={subEvent}>-</button>
                <button type="button" onClick={divEvent}>/</button>
                <button type="button" onClick={mulEvent}>*</button>
            </div>
        </>
    );
}

export default MyReducer;
