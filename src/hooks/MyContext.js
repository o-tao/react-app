import {useState, useContext } from 'react';

const Header = () => {
    return (
        <header style={{
            textAlign: 'center',
            backgroundColor: 'white',
            color: 'black'
            }}>
            <h1>상단글</h1>
        </header>
    );
}
const Main = () => {
    return (
        <main style={{
            margin: '0',
            height: '50vh',
            backgroundColor: 'white',
            color: 'black'
            }}>
        </main>
    );
}
const Footer = () => {
    const clickEvent = () => {}
    return (
        <footer style={{
            textAlign: 'right',
            backgroundColor: 'white',
            color: 'black'
            }}>
            <button type='button' onClick={clickEvent}>스타일 변경</button>
        </footer>
    );
}

const Step1 = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

const MyContext = () => {
    return (
        <>
            <h1 style={{textAlign: 'center'}}>useContext</h1>    
            <Step1 />
        </>
    );
}

export default MyContext;