const Nav = props => {

    const pageEvent = () => {
        alert("PAGE2");
    }

    const data = txt => {
        alert(txt);
    };

    return (
        <nav>
            {/*<a href={"#page1"} onClick={() => {alert('PAGE1');}}>PAGE1</a> /!* 방식1 : 값을 직접 넣어 사용 *!/*/}
            {/*<a href={"#page2"} onClick={pageEvent}>PAGE2</a> /!* 방식2 : 메서드 함수 불러와서 사용 *!/*/}
            {/*<a href={"#page3"} onClick={() => {data('PAGE3');}}>PAGE3</a> /!* 방식3 : 메서드 함수 불러와서 사용 (내용 직접 입력) *!/*/}

            {/* 방식4 : props 사용 */}
            <a href={"#page1"} onClick={() => props.pEvent('PAGE1')}>PAGE1</a>
            <a href={"#page2"} onClick={() => props.pEvent('PAGE2')}>PAGE2</a>
            <a href={"#page3"} onClick={() => props.pEvent('PAGE3')}>PAGE3</a>
        </nav>
    )
}

export default Nav;