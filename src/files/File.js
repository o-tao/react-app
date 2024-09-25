import './File.css';
import axios from "axios";
import React, {useState} from "react";
import ErrorPage from "./ErrorPage";

const File = () => {
    const host = "http://localhost:80" /* back 주소 */
    // let [img, setImg] = useState('');
    let [imgs, setImgs] = useState([]);

    const submitEvent = e => {
        e.preventDefault();

        /* file을 객체에 담아 전송해야 함 */
        const formData = new FormData();
        for (let i = 0; i < e.target.file.files.length; i++) {
            formData.append("file", e.target.file.files[i]);
        }

        /* back 매핑주소 */
        axios.post(host + "/filesUpload", formData)
            /* request 요청 */
            .then(request => {
                console.log(request, request.data);
                /* Request state 성공시 */
                if (request.data.state) {
                    alert("파일을 저장합니다.")
                    let viewUrl = host + "/view?url="
                    let list = [];

                    for (let i = 0; i < request.data.list.length; i++) {
                        list[i] = viewUrl + request.data.list[i];
                    }

                    setImgs(list);
                }
            })
            /* 에러 발생 시 로그 출력 */
            .catch(error => alert("파일을 선택하세요."));
    };

    const selectEvent = () => {
        axios.get(host + "/filesRead")
            .then(request => {
                if (request.data.state) {
                    let viewUrl = host + "/view?url=";
                    let list = [];
                    for (let i = 0; i < request.data.list.length; i++) {
                        list[i] = viewUrl + request.data.list[i];
                    }
                    setImgs(list);
                }
            })
            .catch(error => alert("가져올 파일이 존재하지 않습니다."));
    };

    return (
        <>
            <header>
                <h1 className="text-center">파일업로드</h1>
            </header>
            <main>

                <form onSubmit={submitEvent}>
                    <div className="input-body">
                        <label form="title">그림</label>
                        {/* input type -> file */}
                        <input accept="image/*" autoComplete="off" name="file" type="file" multiple/>
                    </div>
                    <div className="input-body">
                        <input type="submit" value="전송"/>
                    </div>
                </form>

                <div className="input-body">
                    <button type={"button"} onClick={selectEvent}>리스트 보기</button>
                </div>

                <div className="imgs">
                    {
                        // img === '' ? <></> : <img className="img" src={img} alt="test"/>
                        /*
                        imgs.map((row, index) => {
                            return (
                                <img className="img" src={row} key={index} alt="test"/>
                            );
                        })
                        */

                        imgs.map((row, index) => {
                            return (
                                imgs === null ? <ErrorPage/> :
                                    <img src={row} className={"img"} key={index} alt={"test"}/>
                            );
                        })
                    }
                </div>
            </main>
        </>
    );
};

export default File;
