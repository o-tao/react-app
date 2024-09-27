import {useEffect, useState} from "react";
import {FindById} from './useMembers';

const Detail = ({id}) => {
    const user = FindById(id);

    return (
        <>
            <hr/>
            <h3>사용자 정보</h3>
            <p>번호 : {user.id}</p>
            <p>이름 : {user.name}</p>
            <p>나이 : {user.age}</p>
        </>
    )
}

const list = [
    {id: 1, name: '홍길동', age: 18},
    {id: 2, name: '이순신', age: 30},
    {id: 3, name: '류관순', age: 16}
];

const MyHooks = () => {
    const [array, setArray] = useState([]);
    const [show, setShow] = useState(false);
    const [id, setId] = useState(0);

    useEffect(() => {
        setArray(list);
    }, []);

    const clickEvent = id => {
        setId(id);
        setShow(true);
    }

    return (
        <>
            <h1 style={{textAlign: 'center'}}>Custom Hooks</h1>
            <ol>
                {
                    array.map((row, index) => {
                        return <li style={{cursor: 'pointer'}} key={index} onClick={() => {
                            clickEvent(row.id);
                        }}>{row.name}
                        </li>
                    })
                }
            </ol>
            {show && <Detail id={id}/>}
        </>
    );
}

export default MyHooks;
