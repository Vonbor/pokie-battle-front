import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Fight from "./Fight";

import Pokemon from "./Pokemon";
import Details from "./Details";
import Info from "./Info";

function App() {
  return (
    <div className="App">
      <main>
        <h1 id="main-header">POKEFIGHT</h1>
        <Switch>
          <Route exact path="/">
            <Pokemon />
          </Route>
          <Route exact path="/pokemon/:id">
            <Details />
          </Route>
          <Route exact path="/pokemon/:id/:info">
            <Info />
          </Route>
          <Route exact path="pokemon/:pl1/vs/:pl2">
            <Fight />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
