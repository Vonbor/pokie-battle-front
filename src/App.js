import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Pokemon from './Pokemon';
import Details from './Details';
function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://pokie-app.herokuapp.com/pokemon')
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                console.log(res);
            });
    }, []);

    return (
        <div className="App">
            <main>
                <h1 id="main-header">POKEFIGHT</h1>
                <Switch>
                    <Route exact path="/">
                        <Pokemon data={data} />
                    </Route>
                    <Route path="/:id">
                        <Details data={data} />
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
