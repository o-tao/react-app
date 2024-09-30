import {useEffect, useState} from "react";
import axios from "axios";

// const list = [
//     {id: 1, name: '홍길동', age: 18},
//     {id: 2, name: '이순신', age: 30},
//     {id: 3, name: '류관순', age: 16}
// ];

export const FindByAll = (url) => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getData = async (url) => {
            try {
                const request = await axios.get(url);
                setResponse(request);
            } catch (error) {
                setError(error);
            }
        }
        getData(url);
    }, [url]);
    return [response, error];
}

export const FindById = (array, id, key) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        let users = array.filter((row) => {
            return row[key] === id
        });
        if (users.length > 0) {
            setUser(users[0]);
        }
    }, [id]);
    return user;
}
