import {useState} from "react";
import {Route, Routes} from 'react-router-dom';

const State1 = () => {
    const [num, setNum] = useState(0);

    return (
        <>
            <span>번호 : {num}</span>
            <button type='button' onClick={() => {
                let data = num + 1;
                // setNum( i => i + 1); 도 같은 기능을 구현한다.
                setNum(data);
            }}>상태값 변경
            </button>
        </>
    );
}

const State2 = () => {
    const [txt, setTxt] = useState('');

    const submitEvent = e => {
        e.preventDefault();
        console.log(e.target.text.value);
        setTxt(e.target.value);
    }

    return (
        <form onSubmit={submitEvent}>
            <p><span>작성글 : </span>{txt}</p>
            <input type='text' name="text" placeholder='내용을 작성하세요.' defaultValue={txt}/>
            <button type='submit'>상태값 변경</button>
        </form>
    );
}

const State3 = () => {
    const [txt, setTxt] = useState('');
    const [array, setArray] = useState([]);

    const submitEvent = e => {
        e.preventDefault();
        setArray([...array, txt]);
    }

    const inputEvent = e => {
        setTxt(e.target.value);
    }

    return (
        <form onSubmit={submitEvent}>
            <input type='text' placeholder='글 작성하세요.' value={txt} onChange={inputEvent}/>
            <button type='submit'>입력</button>
            <div>
                {
                    array.toReversed().map((row, index) => {
                        return (
                            <p key={index}>{row}</p>
                        )
                    })
                }
            </div>
        </form>
    );
}

const sampleList = () => {
    console.log("데이터 가져오기");
    return [1, 2, 3];
}

const State4 = () => {
    const [list, setList] = useState(sampleList());
    const [txt, setTxt] = useState('');

    const submitEvent = e => {
        e.preventDefault();
        setList([...list, txt]);
        setTxt('');
    }

    const inputEvent = e => {
        setTxt(e.target.value);
    }

    return (
        <form onSubmit={submitEvent}>
            <input type='text' placeholder='글 작성하세요.' value={txt} onChange={inputEvent}/>
            <button type='submit'>입력</button>
            <div>
                {
                    list.map((row, index) => {
                        return (
                            <p key={index}>{row}</p>
                        )
                    })
                }
            </div>
        </form>
    );
}

const State5 = () => {
    const [list, setList] = useState(() => sampleList());
    const [txt, setTxt] = useState('');

    const submitEvent = e => {
        e.preventDefault();
        setList([...list, txt]);
        setTxt('');
    }

    const inputEvent = e => {
        setTxt(e.target.value);
    }

    return (
        <form onSubmit={submitEvent}>
            <input type='text' placeholder='글 작성하세요.' value={txt} onChange={inputEvent}/>
            <button type='submit'>입력</button>
            <div>
                {
                    list.map((row, index) => {
                        return (
                            <p key={index}>{row}</p>
                        )
                    })
                }
            </div>
        </form>
    );
}

const MyState = () => {
    return (
        <>
            <h1 style={{textAlign: 'center'}}>useState</h1>
            <nav className='nav-link'>
                <a href="/state/1">예제1</a>
                <a href="/state/2">예제2</a>
                <a href="/state/3">예제3</a>
                <a href="/state/4">예제4</a>
                <a href="/state/5">예제5</a>
            </nav>
            <Routes>
                <Route path="1" element={<State1/>}/>
                <Route path="2" element={<State2/>}/>
                <Route path="3" element={<State3/>}/>
                <Route path="4" element={<State4/>}/>
                <Route path="5" element={<State5/>}/>
            </Routes>
        </>
    );
}

export default MyState;
