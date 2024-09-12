import './App.css';
import Nav from './Nav';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import {useState} from 'react'

// const html =
//     <>
//         <Page1/>
//         <Page2/>
//         <Page3/>
//     </>;

const App = () => {
    let [page, setPage] = useState(<Page1/>);

    const pageEven = txt => {
        console.log(txt);
        if (txt === "PAGE1") {
            setPage(<Page1/>);
        } else if (txt === "PAGE2") {
            setPage(<Page2/>);
        } else if (txt === "PAGE3") {
            setPage(<Page3/>);
        }
    }

    return (
        <>
            <Nav pEvent={txt => pageEven(txt)}/>
            {page}
        </>
    );
}

export default App