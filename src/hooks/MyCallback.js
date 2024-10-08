import {useCallback, useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';

const Step1 = () => {
    const [txt, setTxt] = useState('');
    const [show, setShow] = useState(false);

    const clickEvent = () => {
        return console.log(`호출 : ${txt}`);
    };

    useEffect(() => {
        console.log("화면 출력");
    }, [clickEvent]);

    const a = 0;
    useEffect(() => {
        console.log("숫자 출력");
    }, [a]);

    return (
        <>
            <input type='text' value={txt} onChange={e => {
                setTxt(e.target.value)
            }}/>
            <button type='button' onClick={() => {
                setShow(!show)
            }}>호출
            </button>
            <button type='button' onClick={clickEvent}>콘솔 확인</button>
        </>
    )
}

const Step2 = () => {
    const [txt, setTxt] = useState('');
    const [show, setShow] = useState(false);

    const clickEvent = useCallback(() => {
        return console.log(`호출 : ${txt}`);
    }, [txt]);

    useEffect(() => {
        console.log("화면 출력");
    }, [clickEvent]);

    const a = 0;
    useEffect(() => {
        console.log("숫자 출력");
    }, [a]);

    return (
        <>
            <input type='text' value={txt} onChange={e => {
                setTxt(e.target.value)
            }}/>
            <button type='button' onClick={() => {
                setShow(!show)
            }}>호출
            </button>
            <button type='button' onClick={clickEvent}>콘솔 확인</button>
        </>
    )
}

const Step3 = () => {
    const [num, setNum] = useState(50);
    const [show, setShow] = useState(false);

    const colorEvent = useCallback(() => {
        return show ? 'black' : 'white';
    }, [show]);

    useEffect(() => {
        console.log("배경 색 변경 함수 생성")
    }, [colorEvent]);

    return (
        <div style={{backgroundColor: 'white'}}>
            <input type='number' step={"10"} value={num} onChange={e => {
                setNum(Number(e.target.value));
            }}/>
            <button type='button' onClick={() => {
                setShow(!show)
            }}>배경 색 변경
            </button>
            <SubPage num={num} colorEvent={colorEvent}/>
        </div>
    )
}

const SubPage = (props) => {
    useEffect(() => {
        console.log("배경 색 변경");
    }, []);

    return (
        <div style={{backgroundColor: props.colorEvent()}}>
            <progress style={{width: '100%'}} max="100" value={props.num}/>
        </div>
    )
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
                <Route path="1" element={<Step1/>}/>
                <Route path="2" element={<Step2/>}/>
                <Route path="3" element={<Step3/>}/>
            </Routes>
        </>
    );
}

export default MyCallback;
