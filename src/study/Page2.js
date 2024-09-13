import {useLocation} from "react-router-dom";

const Page2 = () => {
    const location = useLocation();
    const params = location.search.substring(1); /* 문자열 변환 */
    const param = params.split("="); /* =을 기준으로 value 값 구분 */

    return (
        <section className="content" id="page1">
            <h1 className="body">페이지2번 내용</h1>
            <h3>{location.search}</h3> {/* location 출력 */}
            <h3>{params}</h3> {/* 문자열 출력 */}
            <h3>{param[1]}</h3> {/* value 값 출력 */}
        </section>
    )
}

export default Page2;