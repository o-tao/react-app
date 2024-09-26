import {useRef, useState} from 'react';
import {Route, Routes} from 'react-router-dom';

const Step1 = () => {
    const ref = useRef(1);
    console.log(ref, ref.current);
    return <p>{ref.current}</p>
}

const Step2 = () => {
    const [num, setNum] = useState(0);
    const ref = useRef(0);

    const changeEvent = e => {
        let value = e.target.value;
        setNum(value);
        ref.current = value;
    }

    return (
        <>
            <p>상태값 {num}</p>
            <p>참조값 {ref.current}</p>
            <input type='number' value={num} onChange={changeEvent}/>
        </>
    );
}

const Step3 = () => {
    const [num, setNum] = useState(0);
    const ref = useRef(0);

    const event1 = () => { // useState는 값이 변경될 경우 Re-rendering
        setNum(num + 1);
        console.log("상태값 변경")
    }

    const event2 = () => {
        ref.current = ref.current + 1;
        console.log("참조값 변경")
    }

    return (
        <>
            <button type='button' onClick={event1}>상태값 변경</button>
            <span style={{marginLeft: '10px'}}>상태값 {num}</span>
            <br/>
            <button type='button' onClick={event2}>참조값 변경</button>
            <span style={{marginLeft: '10px'}}>참조값 {ref.current}</span>
        </>
    );
}
const Step4 = () => {
    const event1 = () => {
    }
    const event2 = () => {
    }
    const event3 = () => {
    }
    const event4 = () => {
    }
    return (
        <>
            <button type='button' onClick={event1}>변수값 변경</button>
            <span style={{marginLeft: '10px'}}>변수값 0</span>
            <br/>
            <button type='button' onClick={event2}>참조값 변경</button>
            <span style={{marginLeft: '10px'}}>참조값 0</span>
            <br/>
            <button type='button' onClick={event3}>상태값 변경</button>
            <button type='button' onClick={event4}>변수와 참조값 확인</button>
        </>
    );
}
const Step5 = () => {
    return (
        <>
            <button type='button' onClick={() => {
            }}>1증가
            </button>
            <span style={{marginLeft: '10px'}}>상태값 : 0</span>
        </>
    );
}
const Step6 = () => {
    const changeEvent = e => {
    }
    const clickEvent = e => {
        e.preventDefault();
    }
    return (
        <form onSubmit={clickEvent}>
            <input type='text' value="" onChange={changeEvent}/>
            <input type='submit' value='적용'/>
        </form>
    );
}

const MyRef = () => {
    return (
        <>
            <h1 style={{textAlign: 'center'}}>useRef</h1>
            <nav className='nav-link'>
                <a href="/ref/1">예제1</a>
                <a href="/ref/2">예제2</a>
                <a href="/ref/3">예제3</a>
                <a href="/ref/4">예제4</a>
                <a href="/ref/5">예제5</a>
                <a href="/ref/6">예제6</a>
            </nav>
            <Routes>
                <Route path="1" element={<Step1/>}/>
                <Route path="2" element={<Step2/>}/>
                <Route path="3" element={<Step3/>}/>
                <Route path="4" element={<Step4/>}/>
                <Route path="5" element={<Step5/>}/>
                <Route path="6" element={<Step6/>}/>
            </Routes>
        </>
    );
}

export default MyRef;
