import {useState, useEffect, useCallback} from 'react';
import {Routes, Route} from 'react-router-dom';

const Step1 = () => {
    const clickEvent = () => {}
    useEffect(()=>{
        console.log("화면 출력");
    }, [clickEvent]);
    return (
        <>
            <input type='text' value="" onChange={e => {}}/>
            <button type='button' onClick={()=> {}}>호출</button>
            <button type='button' onClick={clickEvent}>콘솔 확인</button>
        </>
    )
}
const Step2 = () => {
    const clickEvent = () => {
        console.log(`이름 : `);
    }
    useEffect(()=>{
        console.log("화면 출력");
    }, [clickEvent]);
    return (
        <>
            <input type='text' value="" onChange={e => {}}/>
            <button type='button' onClick={()=> {}}>호출</button>
            <button type='button' onClick={clickEvent}>콘솔 확인</button>
        </>
    )
}
const Step3 = () => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <input type='number' value="0" onChange={e => {}}/>
            <button type='button' onClick={()=>{}}>배경 색 변경</button>
            <SubPage />
        </div>
    )
}

const SubPage = () => {
    useEffect(()=> {
        console.log("배경 색 변경");
    }, []);
    return <progress style={{width: '100%'}} max="100" value="50"/>
}

const MyCallback = () => {
    return (
        <>
            <h1 style={{textAlign: 'center'}}>useCallback</h1>
            <nav className='nav-link'>
                <a href="/callback/1">예제1</a>
                <a href="/callback/2">예제2</a>
                <a href="/callback/3">예제3</a>
            </nav>
            <Routes>
                <Route path="1" element={<Step1 />} />
                <Route path="2" element={<Step2 />} />
                <Route path="3" element={<Step3 />} />
            </Routes>
        </>
    );
}

export default MyCallback;