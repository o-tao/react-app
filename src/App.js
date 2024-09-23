import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppPage from "./AppPage";

function App() {
    let a = {textAlign: "center", fontSize: "20px"};

    return (
        <>
            <h1 className={""} style={a}>안녕하세요</h1>

            <a href={"/AppPage/1"}>페이지1 이동</a>
            <br/>
            <a href={"/AppPage/2"}>페이지2 이동</a>

            <BrowserRouter>
                <Routes>
                    {/*<Route path={"/AppPage"} element={<AppPage/>}></Route>*/}
                    <Route path={"/AppPage/*"} element={<AppPage/>}></Route>
                </Routes>
            </BrowserRouter>

            <h2>footer</h2>
        </>
    );
}

export default App;
