import './App.css';
import React from 'react';
import { Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  
  
  useEffect(()=> {
    fetch("https://pokie-app.herokuapp.com/pokemon")

        .then(res => res.json())
        .then(res => {setData(res)
        console.log(res)}
        );

  }, []);

  return (

    

    <div className="App">
      
    </div>
  );
}

export default App;
