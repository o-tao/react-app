import {Route, Routes} from "react-router-dom";
import Page0 from "./Page0";
import Page1 from "./Page1";
import Page2 from "./Page2";

const Page = () => {
    return (
        <>

            <Routes>
                <Route path={"/"} element={<Page0/>}></Route>
                <Route path={"1"} element={<Page1/>}></Route>
                <Route path={"2"} element={<Page2/>}></Route>
            </Routes>

            <div className={"nav"}>
                <a href={"/Page/1"}>페이지1 이동</a>
                <a href={"/Page/2"}>페이지2 이동</a>
            </div>

        </>
    );
};

export default Page;
