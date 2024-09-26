import {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';

const Step1 = () => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log("화면 출력");
        setNum(num + 1);
    });

    return <p>호출 횟수 : {num}</p>
}

const Step2 = () => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log("화면 출력");
        setNum(num + 1);
    }, []);

    return <p>호출 횟수 : {num}</p>
}
const Step3 = () => {
    useEffect(() => {
        console.log("화면 출력");
    }, []);
    return <input type='number' value="0" onChange={e => {
    }}/>
}
const Step4 = () => {
    return (
        <>
            <button type="button" onClick={() => {
            }}>시작
            </button>
            <Step4sub/>
        </>
    );
}
const Step4sub = props => {
    useEffect(() => {
        const app = setInterval(() => {
            console.log("동작");
        }, 1000);
        return () => clearInterval(app);
    }, []);
    return <span style={{marginLeft: '10px'}}>0</span>
}

const MyEffect = () => {
    return (
        <>
            <h1 style={{textAlign: 'center'}}>useEffect</h1>
            <nav className='nav-link'>
                <a href="/effect/1">예제1</a>
                <a href="/effect/2">예제2</a>
                <a href="/effect/3">예제3</a>
                <a href="/effect/4">예제4</a>
            </nav>
            <Routes>
                <Route path="1" element={<Step1/>}/>
                <Route path="2" element={<Step2/>}/>
                <Route path="3" element={<Step3/>}/>
                <Route path="4" element={<Step4/>}/>
            </Routes>
        </>
    );
}

export default MyEffect;
