import React, {useContext, useId, useState} from 'react';
import {ThemeContext} from "./useThemeContext";

const Header = () => {
    const theme = useContext(ThemeContext);
    console.log(theme.show);

    return (
        <header style={{
            textAlign: 'center',
            backgroundColor: theme.show ? 'black' : 'white',
            color: theme.show ? 'white' : 'black'
        }}>
            {
                theme.show ? <h1>TRUE</h1> : <h1>FALSE</h1>
            }
        </header>
    );
}

const Main = () => {
    const theme = useContext(ThemeContext);
    const id = useId();

    return (
        <main style={{
            margin: '0',
            height: '50vh',
            backgroundColor: theme.show ? 'black' : 'white',
            color: theme.show ? 'white' : 'black'
        }}>
            {
                <>
                    {
                        theme.show ? <h2>변경된 스타일 입니다.</h2> : <h2>기본 스타일 입니다.</h2>
                    }
                    <br/>

                    <label htmlFor={id + "-m1"}>메모1 </label>
                    <input type={"text"} id={id + "-m1"}/>
                    <br/><br/>
                    <label htmlFor={id + "-m2"}>메모2 </label>
                    <input type={"text"} id={id + "-m2"}/>
                    <br/><br/>
                    <label htmlFor={id + "-m3"}>메모3 </label>
                    <input type={"text"} id={id + "-m3"}/>
                </>
            }
        </main>
    );
}

const Footer = () => {
    const theme = useContext(ThemeContext);

    const clickEvent = () => {
        theme.setShow(!theme.show);
    }

    return (
        <footer style={{
            textAlign: 'right',
            backgroundColor: theme.show ? 'black' : 'white',
            color: theme.show ? 'white' : 'black'
        }}>
            <button type='button' onClick={clickEvent}>스타일 변경</button>
        </footer>
    );
}

const Step1 = () => {
    const txt = "A";
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
}

const MyContext = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <h1 style={{textAlign: 'center'}}>useContext</h1>
            <ThemeContext.Provider value={{show, setShow}}> {/* show:show, setShow를 코드간소화 */}
                <Step1/>
            </ThemeContext.Provider>
        </>
    );
}

export default MyContext;
