import './File.css';
import axios from "axios";
import {useState} from "react";

const File = () => {
    const host = "http://localhost:80" /* back 주소 */

    let [img, setImg] = useState('');

    const submitEvent = e => {
        e.preventDefault();
        console.log(e.target.file.files[0]);

        /* file을 객체에 담아 전송해야 함 */
        const formData = new FormData();
        formData.append("file", e.target.file.files[0]);
        /* back 매핑주소 */
        axios.post(host + "/fileUpload", formData)
            /* request 요청 */
            .then(request => {
                console.log(request, request.data);

                /* Request state 성공 */
                if (request.data.state) {
                    let imgUrl = request.data.url
                    let viewUrl = host + "/view?url="
                    setImg(viewUrl + imgUrl);
                }
            })
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
                <div className="input-body">
                    <input type="submit" value="전송"/>
                </div>
            </form>
            <div className="imgs">
                {
                    img === '' ? <></> : <img className="img" src={img} alt={"test"}/>
                }
            </div>
        </>
    );
};

export default File;
