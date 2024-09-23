// SignIn.js
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const SignIn = () => {
    let center = {textAlign: "center"};

    const navigate = useNavigate();
    const [list, setList] = useState([{id: '', password: ''}]);

    useEffect(() => {
        const resultString = localStorage.getItem('list');
        const ressult = JSON.parse(resultString) || [];
        setList(ressult);
    }, []);

    const check = e => {
        e.preventDefault();
        localStorage.removeItem('loginUser');
        let status = false;
        let params = {
            id: e.target.id.value,
            password: e.target.password.value
        };

        for (let i = 0; i < list.length; i++) {
            if (list[i].id === params.id) {
                if (list[i].password === params.password) {
                    status = true;
                    break;
                }
            }
        }
        if (status) {
            navigate('/success');
            localStorage.setItem('loginUser', e.target.id.value);
        } else {
            alert('로그인 실패');
            navigate('/fail');
        }

    }

    return (
        <>
            <h1 style={center}>Sign IN</h1>

            <div style={center}>
                <form onSubmit={check}>
                    <input type="text" name="id" placeholder={"아이디를 입력하세요."}></input>
                    <br/>
                    <br/>
                    <input type="password" name="password" placeholder={"비밀번호를 입력하세요."}></input>
                    <br/>
                    <br/>
                    <button type='submit'>SignIn</button>
                </form>
            </div>
        </>
    );
}

export default SignIn;
