import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pokemon from './Pokemon';
import Details from './Details';
import Info from './Info';
import Fight from './Fight';
import Header from './Header';
function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Header />
                    <Pokemon />
                </Route>
                <Route exact path="/pokemon/:id">
                    <Header />
                    <Details />
                </Route>
                <Route exact path="/pokemon/:id/:info">
                    <Header />
                    <Info />
                </Route>
                <Route exact path="/fight">
                    <Fight />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
