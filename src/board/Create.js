import {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();

    /* [Hooks] localStorage에 저장된 data 화면에 출력 */
    const [array, setArray] = useState([]);
    useEffect(() => {
        const resultString = localStorage.getItem('data');
        const result = JSON.parse(resultString);
        setArray(result);
    }, []);

    const submitEvent = e => {
        e.preventDefault();

        // 신규 작성글에 대한 id 생성
        let newId = 0;
        if (array.length === 0) {
            // 첫 글 작성 시 id를 1로 처리
            newId = 1;
        } else {
            // 글이 있을 경우 마지막 id를 찾아 1증가 처리
            newId = (array[array.length - 1].id) + 1;
        }
        let params = {
                id: newId, //(array.length + 1), // insert 시 id값 +1
                title: e.target.board_title.value,
                content: e.target.board_content.value
            }

            console.log(params, array, [...array, params]);

        const newArray = [...array, params];
    localStorage.setItem('data', JSON.stringify(newArray));

        navigate(`/detail/${params.id}`);
    }
    return (
        <>
            <div className={"container"} style={{'marginTop': '80px'}}>
                <h2 className={"text-center"}>글 작성</h2>
            </div>
            <div className={"container mt-3"}>
                <form onSubmit={submitEvent}>
                    <input type={"text"} className={"form-control"} name={"board_title"} placeholder={"글을 작성하세요."}/>
                    <div className={"mb-3 mt-3"}>
                        <label htmlFor={"board_content"}>작성글 내용:</label>
                        <textarea className={"form-control"} rows="5" name={"board_content"}
                                  placeholder={"글 내용을 작성하세요."} style={{resize: 'none'}}></textarea>
                    </div>
                    <div className={"btn-group"}>
                        <button type={"submit"} className={"btn btn-info"}>글저장</button>
                        <a className={"btn btn-danger"} href={"/"}>취소</a>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Create;