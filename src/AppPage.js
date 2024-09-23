import {Route, Routes} from "react-router-dom";
import AppPage0 from "./AppPage0";
import AppPage1 from "./AppPage1";
import AppPage2 from "./AppPage2";

const AppPage = () => {
    return (
        <>

            <Routes>
                <Route path={"/"} element={<AppPage0/>}></Route>
                <Route path={"1"} element={<AppPage1/>}></Route>
                <Route path={"2"} element={<AppPage2/>}></Route>
            </Routes>

            <div className={"nav"}>
                <a href={"/Page/1"}>페이지1 이동</a>
                <a href={"/Page/2"}>페이지2 이동</a>
            </div>

        </>
    );
};

export default AppPage;
