const List = () => {
    const array = [
        {id: 1, title: "제목1"},
        {id: 2, title: "제목2"}
    ];

    localStorage.setItem("Board", JSON.stringify(array));

    return (
        <div className={"container"} style={{'marginTop': '80px'}}>
            <h2 className={"text-center"}>게시판</h2>
            <a href={"/create"} className={"btn btn-success"}>글작성</a>
            <div className={"list-group mt-3"}>
                {
                    array.map((row) => (
                        <a className={"list-group-item list-group-item-action"}
                           key={row.id}
                           href={"/detail/1" + row.id}>
                            {row.title}
                        </a>
                    ))
                }
            </div>
        </div>
    );
}
export default List;