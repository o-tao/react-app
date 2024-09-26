import {useState,useEffect} from "react";

const Detail = () => {
    return (
        <>
            <hr />
            <h3>사용자 정보</h3>
            <p>번호 : 1</p>
            <p>이름 : 홍길동</p>
            <p>나이 : 17</p>
        </>
    )
}

const MyHooks = () => {
    const clickEvent = id => {}
    return (
        <>
            <h1 style={{textAlign: 'center'}}>Custom Hooks</h1>
            <ol>
                <li style={{cursor: 'pointer'}}  onClick={()=> {}}>이름</li> 
            </ol>
            <Detail />
        </>
    );
}

export default MyHooks;