import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppPage from "./AppPage";

function App() {
    let a = {textAlign: "center"};

    return (
        <>
            <h1 className={""} style={a}>Hello World</h1>

            <div className={"nav"}>
                <a href={"/"}>홈</a>
                <a href={"/Page/"}>페이지 이동</a>
            </div>

            <BrowserRouter>
                <Routes>
                    {/*<Route path={"/Page"} element={<Page/>}></Route>*/}
                    <Route path={"/Page/*"} element={<AppPage/>}></Route>
                </Routes>
            </BrowserRouter>

            <h2 style={a}>footer</h2>
        </>
    );
}

export default App;
