import {useState, useEffect} from "react";

const List = () => {
    /* localStorage에 저장 */
    // const array = [
    //     {id: 1, title: "제목1"},
    //     {id: 2, title: "제목2"}
    // ];
    // localStorage.setItem('data', JSON.stringify(array));

    /* [Hooks] localStorage에 저장된 data 화면에 출력 */
    const [array, setArray] = useState([]);
    useEffect(() => {
        const resultString = localStorage.getItem('data');

        /* 저장된 목록 여부 확인 */
        if (resultString === null) {
            // 저장된 목록이 없을 시 초기값 설정
            setArray([]);
            localStorage.setItem('data', JSON.stringify([]));
        } else {
            // 저장된 목록이 있을 시 상태값으로 적용
            const result = JSON.parse(resultString);
            setArray(result);
        }
    }, []);

    return (
        <div className={"container"} style={{'marginTop': '80px'}}>
            <h2 className={"text-center"}>게시판</h2>
            <a href={"/create"} className={"btn btn-success"}>글작성</a>
            <div className={"list-group mt-3"}>
                {
                    array.map((row) => (
                        <a className={"list-group-item list-group-item-action"}
                           key={row.id}
                           href={"/detail/" + row.id}>
                            {row.title}
                        </a>
                    ))
                }
            </div>
        </div>
    );
}
export default List;