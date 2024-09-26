import {useState} from "react";
import {Route, Routes} from 'react-router-dom';

const State1 = () => {
    const [num, setNum] = useState(0);
    // setNum( i => i + 1); 도 같은 기능을 구현한다.

    return (
        <>
            <span>번호 : {num}</span>
            <button type='button' onClick={() => {
                let data = num + 1;
                setNum(data);
            }}>상태값 변경
            </button>
        </>
    );
}

const State2 = () => {
    const submitEvent = e => {
        e.preventDefault();
    }
    return (
        <form onSubmit={submitEvent}>
            <p><span>작성글 : </span>내용</p>
            <input type='text' name="text" placeholder='내용을 작성하세요.'/>
            <button type='submit'>상태값 변경</button>
        </form>
    );
}

const State3 = () => {
    const submitEvent = e => {
        e.preventDefault();
    }
    const inputEvent = e => {
    }
    return (
        <form onSubmit={submitEvent}>
            <input type='text' placeholder='글 작성하세요.' value="" onChange={inputEvent}/>
            <button type='submit'>입력</button>
            <div>
                <p>작성글내용</p>
            </div>
        </form>
    );
}

const sampleList = () => {
    console.log("데이터 가져오기");
    return [1, 2, 3];
}

const State4 = () => {
    const submitEvent = e => {
        e.preventDefault();
    }
    const inputEvent = e => {
    }
    return (
        <form onSubmit={submitEvent}>
            <input type='text' placeholder='글 작성하세요.' value="" onChange={inputEvent}/>
            <button type='submit'>입력</button>
            <div>
                <p>작성글내용</p>
            </div>
        </form>
    );
}

const State5 = () => {
    const submitEvent = e => {
        e.preventDefault();
    }
    const inputEvent = e => {
    }
    return (
        <form onSubmit={submitEvent}>
            <input type='text' placeholder='글 작성하세요.' value="" onChange={inputEvent}/>
            <button type='submit'>입력</button>
            <div>
                <p>작성글내용</p>
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
