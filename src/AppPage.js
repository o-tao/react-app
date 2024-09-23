import {Route, Routes} from "react-router-dom";
import AppPage1 from "./AppPage1";
import AppPage2 from "./AppPage2";

const AppPage = () => {
    return (
        <Routes>
            <Route path={"1"} element={<AppPage1/>}></Route>
            <Route path={"2"} element={<AppPage2/>}></Route>
        </Routes>
    );
};

export default AppPage;
