import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Success from "./Success";
import Fail from "./Fail";

function Account() {
    let center = {textAlign: "center"};

    return (
        <>
            <h1 style={center}>Hello World</h1>

            <div style={center}>
                <a href={"/signIn"}>로그인</a>
                <br/>
                <a href={"/signUp"}>회원가입</a>
            </div>

            <BrowserRouter>
                <Routes>
                    <Route path={"/signIn"} element={<SignIn/>}></Route>
                    <Route path={"/signUp"} element={<SignUp/>}></Route>
                    <Route path={"/success"} element={<Success/>}></Route>
                    <Route path={"/Fail"} element={<Fail/>}></Route>
                </Routes>
            </BrowserRouter>

            <h2 style={center}>footer</h2>
        </>
    );
}

export default Account;
