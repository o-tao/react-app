// 회원가입 페이지
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
    let center = {textAlign: "center"};

    const navigate = useNavigate();
    const [list, setList] = useState({id: '', password: ''});

    useEffect(() => {
        const resultString = localStorage.getItem('list');
        const ressult = JSON.parse(resultString) || [];
        setList(ressult);
    }, []);

    const submitEvent = e => {
        e.preventDefault();
        let data = {
            id: e.target.id.value,
            password: e.target.password.value
        }
        console.log(data);
        const newList = [...list, data];
        localStorage.setItem("list", JSON.stringify(newList));

        navigate(`/login`);
    }

    return (
        <>
            <h1 style={center}>Sign Up</h1>

            <div style={center}>
                <form onSubmit={submitEvent}>
                    <input type="text" name="id" placeholder={"아이디를 입력하세요."}></input>
                    <br/>
                    <br/>
                    <input type="password" name="password" placeholder={"비밀번호를 입력하세요."}></input>
                    <br/>
                    <br/>
                    <button type="submit"> Sign Up</button>
                </form>
            </div>
        </>
    );
}

export default SignUp;
