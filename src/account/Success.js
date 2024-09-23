// 로그인 성공 페이지
import {useNavigate} from 'react-router-dom';

const Success = () => {
    let center = {textAlign: "center"};

    const navigate = useNavigate();
    let user = localStorage.getItem('loginUser');

    const logoutEvent = () => {
        localStorage.removeItem('loginUser');
        navigate('/signIn');
    }

    return (
        <>
            <div style={center}>
                <h1>Success</h1>
                <h2>{user}님 환영합니다.</h2>
                <button type="button" onClick={logoutEvent}>로그아웃</button>
            </div>
        </>

    );
}

export default Success;
