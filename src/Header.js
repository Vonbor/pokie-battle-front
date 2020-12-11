import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <main>
            <h1 id="main-header">POKEFIGHT</h1>
            <Link to="/fight">
                <div id="play-button"></div>
            </Link>
        </main>
    );
}
