import {useParams} from 'react-router-dom';

const Detail = () => {
    const {id} = useParams();
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
    let title = "제목";
    let content = "글 내용";
    return (
        <>
            <div className={"container"} style={{'marginTop': '80px'}}>
                <h2 className={"text-center"}>작성 내용</h2>
            </div>
            <div className={"container mt-3"}>
                <form onSubmit={submitEvent}>
                    <input type={"text"} className={"form-control"} name={"board_title"} defaultValue={title}
                           placeholder={"글을 작성하세요."}/>
                    <div className={"mb-3 mt-3"}>
                        <label htmlFor={"board_content"}>작성글 내용:</label>
                        <textarea type={"text"} className={"form-control"} rows="5" name={"board_content"}
                                  defaultValue={content} style={{resize: 'none'}}></textarea>
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