import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/home/HomePage";

function App() {
    return (
        <>
            <NavBar/>
            <HomePage/>
        </>
    );
}

export default App;
