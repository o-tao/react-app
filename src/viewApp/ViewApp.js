import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import './ViewApp.css';
import {useEffect, useState} from "react";

const View1 = () => {
    const [array, setArray] = useState([]);
    useEffect(() => {
        const data = ["내용", "내용", "내용", "내용", "내용"];
        setArray(data);
    }, []);
    return (
        <div className="container">
            <h1 className="head">화면1</h1>
            <ol className="body">
                {
                    array.map((row, index) => <li key={index}>{row}</li>)
                }
            </ol>
            <button type="button" className="more">더보기</button>
        </div>
    );
}
const View2 = () => {
    return (
        <div className="container">
            <h1 className="head">화면2</h1>
        </div>
    );
}
const View3 = () => {
    return (
        <div className="container">
            <h1 className="head">화면3</h1>
        </div>
    );
}
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <h1 className="head">화면 목록</h1>
            <ul className="body">
                <li>
                    <button type='button' className='link' onClick={() => navigate('/view1')}>화면1</button>
                </li>
                <li>
                    <button type='button' className='link' onClick={() => navigate('/view2')}>화면2</button>
                </li>
                <li>
                    <button type='button' className='link' onClick={() => navigate('/view3')}>화면3</button>
                </li>
            </ul>
        </div>
    );
}
const ViewApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/view1" element={<View1/>}/>
                <Route path="/view2" element={<View2/>}/>
                <Route path="/view3" element={<View3/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default ViewApp;
