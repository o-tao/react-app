import { useState, useMemo } from "react";

const getData1 = num => {
    console.log("Data1 계산 시작!!");
    for (let i = 0; i < 100000; i++) { 
        num += i;
    }
    return num;
}
const getData2 = num => {
    console.log("Data2 계산 시작!!");
    return num;
}

const Step1 = () => {
    return (
        <>
            <input type='number' value="0" onChange={e => {}}/>
            <button type="button" onClick={() => {}}>반전효과</button>
            <p style={{width: '100%'}}>Data1 값 : 0</p>
            <p style={{width: '100%'}}>Data2 값 : 0</p>
        </>
    )
}

const MyMemo = () => {
    return (
        <>
            <h1 style={{textAlign: 'center'}}>useMemo</h1>
            <Step1 />
        </>
    );
}

export default MyMemo;