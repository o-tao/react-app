import {useMemo, useState} from "react";

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
    const [num, setNum] = useState(0);
    const [show, setShow] = useState(false);
    let num1 = useMemo(() => {
        return getData1(num);
    }, [num]);
    let num2 = getData2(num);
    return (
        <>
            <input type='number' value={num} onChange={e => {
                setNum(e.target.value)
            }}/>
            <button type="button" onClick={() => {
                setShow(!show)
            }}>반전효과
            </button>
            <p style={{width: '100%'}}>Data1 값 : {num1}</p>
            <p style={{width: '100%'}}>Data2 값 : {num2}</p>
        </>
    )
}

const MyMemo = () => {
    return (
        <>
            <h1 style={{textAlign: 'center'}}>useMemo</h1>
            <Step1/>
        </>
    );
}

export default MyMemo;
