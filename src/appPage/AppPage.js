import './AppPage.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Page from "./Page";

function AppPage() {
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
                    <Route path={"/Page/*"} element={<Page/>}></Route>
                </Routes>
            </BrowserRouter>

            <h2 style={a}>footer</h2>
        </>
    );
}

export default AppPage;
