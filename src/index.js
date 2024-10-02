import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Study from './study/Study01';
// import Board from './board/Board';
// import AppPage from "./appPage/AppPage";
// import UserPage from "./userPage/UserPage";
// import Account from "./account/Account";
// import File from './files/File';
// import Hooks from './hooks/Hooks';
import ViewApp from './viewApp/ViewApp';
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
    // <React.StrictMode>
    //     <App/>
    //     <Study />
    //     <Board />
    //     <AppPage/>
    //     <UserPage/>
    //     <Account/>
    //     <File/>
    // <Hooks/>
    <QueryClientProvider client={queryClient}>
        <ViewApp/>
    </QueryClientProvider>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
