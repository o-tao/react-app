import {useParams, useNavigate} from 'react-router-dom';

const Page3 = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    return (
        <section className="content" id="page1">
            <h1 className="body">페이지3번 내용</h1>
            <button type={'button'} onClick={() => {
                if (id === "world") {
                    alert("good");
                } else {
                    alert("error")
                    navigate("/page2");
                }
            }
            }
            > url 정상 여부확인</button>

        </section>
    );
}

export default Page3;