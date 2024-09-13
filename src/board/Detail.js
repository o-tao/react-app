import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';

const Detail = () => {
    const {id} = useParams(); // URL 파라미터에서 id를 가져옴
    const [array, setArray] = useState([]); // 배열 데이터를 저장할 상태
    const [data, setData] = useState({id: 0, title: '', content: ''}); // 현재 데이터 상태

    /* 빈배열 일 경우 1회 실행 */
    useEffect(() => {
        const resultString = localStorage.getItem('data');
        const result = JSON.parse(resultString);
        setArray(result);
    }, []);

    /* 상태값 array가 값이 변경 되었을 경우 실행 */
    useEffect(() => {
        array.forEach(row => {
            if (row.id === Number(id)) {
                setData(row);
            }
        })
    }, [array, id]);

    /* 입력값이 변경될 때 호출 */
    const handleChange = event => {
        const {name, value} = event.target;
        console.log(name, value);
        setData({...data, [name]: value});
    };

    /* form 제출 시 호출 */
    const submitEvent = e => {
        e.preventDefault();
        let params = {
            id: id,
            title: e.target.board_title.value,
            content: e.target.board_content.value
        }
        console.log(params);
    }

    const deleteEvent = () => {
        console.log(`${id} 대상을 삭제 합니다.`);
    }

    // let title = "제목";
    // let content = "글 내용";

    return (
        <>
            <div className={"container"} style={{'marginTop': '80px'}}>
                <h2 className={"text-center"}>작성 내용</h2>
            </div>
            <div className={"container mt-3"}>
                <form onSubmit={submitEvent}>
                    <input type={"text"} className={"form-control"} name={"title"} value={data.title} onChange={handleChange}
                           placeholder={"글을 작성하세요."}/>
                    <div className={"mb-3 mt-3"}>
                        <label htmlFor={"board_content"}>작성글 내용:</label>
                        <textarea type={"text"} className={"form-control"} rows="5" name={"content"}
                                  value={data.content} onChange={handleChange} style={{resize: 'none'}}></textarea>
                    </div>
                    <div className={"btn-group"}>
                        <button type={"submit"} className={"btn btn-info"}>수정</button>
                        <button type={"button"} className={"btn btn-danger"} onClick={deleteEvent}>삭제</button>
                        <a className={"btn btn-primary"} href={"/"}>목록</a>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Detail;