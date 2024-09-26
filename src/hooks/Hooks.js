import './Hooks.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import MyState from './MyState';
import MyEffect from './MyEffect';
import MyRef from './MyRef';
import MyContext from './MyContext';
import MyReducer from './MyReducer';
import MyCallback from './MyCallback';
import MyMemo from './MyMemo';
import MyHooks from './MyHooks';

function App() {
    return (
        <>
            <nav className='nav-body'>
                <a href="/">React Hooks</a>
            </nav>
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/state/*' element={<MyState/>}/>
                        <Route path='/effect/*' element={<MyEffect/>}/>
                        <Route path='/ref/*' element={<MyRef/>}/>
                        <Route path='/context/*' element={<MyContext/>}/>
                        <Route path='/reducer/*' element={<MyReducer/>}/>
                        <Route path='/callback/*' element={<MyCallback/>}/>
                        <Route path='/memo/*' element={<MyMemo/>}/>
                        <Route path='/customHooks/*' element={<MyHooks/>}/>
                    </Routes>
                </BrowserRouter>
            </main>
        </>
    );
}

export default App;
