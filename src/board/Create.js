import {useNavigate} from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const submitEvent = e => {
        e.preventDefault();
        let params = {
            title: e.target.board_title.value,
            content: e.target.board_content.value
        }
        console.log(params);
        navigate("/detail/1")
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
                        <textarea className={"form-control"} rows={"5"} name={"board_content"}
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