import {useEffect, useRef, useState} from 'react';
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

    const event2 = () => { // useRef는 값이 변경될 경우 Re-rendering 하지 않음
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
    const [load, setLoad] = useState(false);
    let num = 0;
    const ref = useRef(0);

    const event1 = () => {
        num = num + 1;
    }

    const event2 = () => {
        ref.current = ref.current + 1;
    }

    const event3 = () => {
        setLoad(!load);
    }

    const event4 = () => {
        console.log("변수 = " + num + ", 참조 = " + ref.current);
    }

    return (
        <>
            <button type='button' onClick={event1}>변수값 변경</button>
            <span style={{marginLeft: '10px'}}>변수값 {num}</span>
            <br/>
            <button type='button' onClick={event2}>참조값 변경</button>
            <span style={{marginLeft: '10px'}}>참조값 {ref.current}</span>
            <br/>
            <button type='button' onClick={event3}>상태값 변경</button>
            <button type='button' onClick={event4}>변수와 참조값 확인</button>
        </>
    );
}

const Step5 = () => {
    const [num, setNum] = useState(0);
    const ref = useRef(0);

    useEffect(() => {
        console.log("Effect 동작")
        ref.current = num;
    }, [num]);

    return (
        <>
            <button type='button' onClick={() => {
                setNum(num + 1);
            }}>1증가
            </button>
            <span style={{marginLeft: '10px'}}>상태값 : {ref.current}</span>
        </>
    );
}

const Step6 = () => {
    const [txt, setTxt] = useState('');
    const ref = useRef();

    useEffect(() => {
        ref.current.focus(); // 페이지 로드시 초점을 맞춤
    }, []);

    const changeEvent = e => {
        setTxt(e.target.value);
    }

    const clickEvent = e => {
        e.preventDefault();
        console.log(txt);
    }

    return (
        <form onSubmit={clickEvent}>
            <input type='text' value={txt} onChange={changeEvent} ref={ref}/>
            <input type='submit' value='적용'/>
        </form>
    );
}

const Step7 = () => {
    const nameRef = useRef();
    const passwordRef = useRef();

    const submitEvent = e => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(passwordRef.current.value)

        const params = {
            name: nameRef.current.value,
            password: passwordRef.current.value
        }
        console.log(params);
    }

    return (
        <form onSubmit={submitEvent}>
            <input type={"text"} ref={nameRef}/>
            <br/>
            <input type={"text"} ref={passwordRef}/>
            <button type={"submit"}>호출</button>
        </form>
    )
};

const Step8 = () => {
    const [user, setUser] = useState({name: "", password: ""});

    const submitEvent = e => {
        e.preventDefault();
        console.log(user);
    }

    const changeEvent = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }

    return (
        <form onSubmit={submitEvent}>
            <input type={"text"} name={"name"} value={user.name} onChange={changeEvent}/>
            <br/>
            <input type={"text"} name={"password"} value={user.password} onChange={changeEvent}/>
            <br/>
            <button type={"submit"}>호출</button>
        </form>
    )
};

const Step9 = () => {
    const submitEvent = e => {
        // e.preventDefault();
        // const params = {
        //     name: e.target.name.value,
        //     password: e.target.password.value
        // }
        // console.log(params);
    }
    return (
        <form onSubmit={submitEvent} action={"http://localhost/form1"} method={"get"}>
            <input type={"text"} name={"name"}/>
            <br/>
            <input type={"text"} name={"password"}/>
            <br/>
            <button type={"submit"}>호출</button>
        </form>
    )
};

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
                <a href="/ref/7">예제7</a>
                <a href="/ref/8">예제8</a>
                <a href="/ref/9">예제9</a>
            </nav>
            <Routes>
                <Route path="1" element={<Step1/>}/>
                <Route path="2" element={<Step2/>}/>
                <Route path="3" element={<Step3/>}/>
                <Route path="4" element={<Step4/>}/>
                <Route path="5" element={<Step5/>}/>
                <Route path="6" element={<Step6/>}/>
                <Route path="7" element={<Step7/>}/>
                <Route path="8" element={<Step8/>}/>
                <Route path="9" element={<Step9/>}/>
            </Routes>
        </>
    );
}

export default MyRef;
