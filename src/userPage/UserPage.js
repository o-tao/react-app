import {useEffect, useState} from "react";

function UserPage() {
    const [user, setUser] = useState({id: null, name: null});

    useEffect(() => {
        const u = {
            id: 1,
            name: "오팔봉"
        };
        setUser(u);
    }, [])

    return (
        <>
            {/* useEffet 값 가져오기 예제 */}
            <p>{user.id}</p>
            <p>{user.name}</p>

            {/* form input태그에 값 가져오기 */}
            <form>
                <input type={"text"} name={"name"} value={user.name} onChange={(event) => {
                    let {name, value} = event.target;
                    setUser({
                        ...user, [name]: value
                    })
                }}/>
            </form>
        </>
    );
}

export default UserPage;
