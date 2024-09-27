import {useEffect, useState} from "react";

const list = [
    {id: 1, name: '홍길동', age: 18},
    {id: 2, name: '이순신', age: 30},
    {id: 3, name: '류관순', age: 16}
];

export const FindByAll = () => {
}

export const FindById = (id) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        let users = list.filter((row) => {
            return row.id === id
        });
        if (users.length > 0) {
            setUser(users[0]);
        }
    }, [id]);

    return user;
}
