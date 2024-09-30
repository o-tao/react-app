import {useEffect, useState} from "react";
import {FindByAll, FindById} from './useMembers';

const Detail = ({array, id}) => {
    const user = FindById(array, id, "id");

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

const MyHooks = () => {
    const [array, setArray] = useState([]);
    const [response, error] = FindByAll("http://localhost:3000/users.json")
    const [show, setShow] = useState(false);
    const [id, setId] = useState(0);

    const clickEvent = id => {
        setId(id);
        setShow(true);
    }

    useEffect(() => {
        if (error) {
            console.log(error);
        }
        if (response.data) {
            setArray(response.data.state ? response.data.result : []);
        }
    }, [error, response]);

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
            {show && <Detail array={array} id={id}/>}
        </>
    );
}

export default MyHooks;
