import './File.css';
import axios from "axios";

const file = () => {
    const host = "http://localhost:80" /* back 주소 */

    const submitEvent = e => {
        e.preventDefault();
        console.log(e.target.file.files[0]);

        /* file을 객체에 담아 전송해야 함 */
        const formData = new FormData();
        formData.append("file", e.target.file.files[0]);
        /* back 매핑주소 */
        axios.post("http://localhost:80/fileUpload", formData)
            /* request 요청 */
            .then(request => console.log(request))
            /* 에러 발생 시 로그 출력 */
            .catch(error => console.log(error));
    };

    return (
        <>
            <header>
                <h1 className="text-center">파일업로드</h1>
            </header>
            <form onSubmit={submitEvent}>
                <div className="input-body">
                    <label form="title">그림</label>
                    {/* input type -> file */}
                    <input accept="image/*" autoComplete="off" name="file" type="file"/>
                </div>
                <div className={"input-body"}>
                    <input type="submit" value="전송"/>
                </div>
            </form>
            <div className={"imgs"}>
                <img className="img" src='https://avatars.githubusercontent.com/u/20333260?v=4' alt={"test"}></img>
                <img className="img" src='https://avatars.githubusercontent.com/u/20333260?v=4' alt={"test"}></img>
                <img className="img" src='https://avatars.githubusercontent.com/u/20333260?v=4' alt={"test"}></img>
                <img className="img" src='https://avatars.githubusercontent.com/u/20333260?v=4' alt={"test"}></img>
                <img className="img" src='https://avatars.githubusercontent.com/u/20333260?v=4' alt={"test"}></img>
            </div>
        </>
    );
};

export default file;
