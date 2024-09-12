import './App.css';
import Nav from './Nav';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const html =
    <>
        <Page1/>
        <Page2/>
        <Page3/>
    </>;

const App = () => {
    return (
        <>
            <Nav/>
            {html}
        </>
    );
}

export default App