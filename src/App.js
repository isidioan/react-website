import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/home/HomePage";
import Footer from "./components/footer/Footer";
import ConstructionService from "./components/services/Service1";
import RepairService from "./components/services/Service2";
import EngineerService from "./components/services/Service3";
import Page from "./components/layout/Page";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path="/home" render={(props) => (
                    <Page title="Αρχική-Κτηματομηχανική">
                        <HomePage {...props}/>
                    </Page>
                )}
                />
                <Route path="/constService" render={(props) => (
                    <Page title="Μελέτες & Κατασκευές-Κτηματομηχανική">
                        <ConstructionService {...props}/>
                    </Page>
                )}
                />
                <Route path="/repService" render={(props) => (
                    <Page title="Aνακαινίσεις & Επισκευές - Κτηματομηχανική">
                        <RepairService {...props}/>
                    </Page>
                )}
                />
                <Route path="/engService" render={(props) => (
                    <Page title="Mitsos">
                        <EngineerService {...props}/>
                    </Page>
                )}
                />
                <Redirect to="/home"/>
            </Switch>
            <Footer/>

        </BrowserRouter>
    );
}

export default App;
