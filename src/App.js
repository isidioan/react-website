import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/home/HomePage";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <NavBar/>
            <HomePage/>
            <Footer/>
        </>
    );
}

export default App;
