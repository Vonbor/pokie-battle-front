import React from 'react';
import { useState, useEffect } from 'react';
import './Pokemon.css';
import './Info.css';
import './App.css';
import './Fight.css';

export default function Fight() {
    const [p1, setP1] = useState();
    const [p2, setP2] = useState();

    //set image
    const createPokeImage = (pokeID) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`;
    };

    //get random pokemon
    const getRandomPokeOne = Math.floor(Math.random() * 809);
    const getRandomPokeTwo = Math.floor(Math.random() * 809);

    function refreshPage() {
        window.location.reload();
    }

    useEffect(() => {
        fetch(`https://pokie-app.herokuapp.com/pokemon/${getRandomPokeOne}`)
            .then((res) => res.json())
            .then((res) => {
                setP1(res[0]);
                console.log(res[0]);
            });
        fetch(`https://pokie-app.herokuapp.com/pokemon/${getRandomPokeTwo}`)
            .then((res) => res.json())
            .then((res) => {
                setP2(res[0]);
                console.log(res[0]);
            });
    }, []);

    function fight() {
        let p = [p1, p2];
        let attacking = p1.base.Speed > p2.base.Speed ? 0 : 1;
        while (p1.base.HP > 0 && p2.base.HP > 0) {
            var victim = attacking === 1 ? 0 : 1;
            p[victim].base.HP -= p[attacking].base.Attack;
            if (p[victim].base.HP <= 0) {
                alert(`winner is ${p[attacking].name.english}`);
            }
        }
    }

    if (p1 && p2) {
        console.log(`first pokemon is ${p1}, second pokemon is ${p2}`);
        return (
            <>
                <div className="bg-fight">
                    <div className="fight-btn">
                        <button id="fight" onClick={fight}></button>
                        <button id="start-again" onClick={refreshPage}>
                            NEW GAME
                        </button>
                    </div>

                    <div className="players-field">
                        <div class="player_one">
                            <h1 class="card-name">{p1.name.english}</h1>
                            <div class="card-hp">HP - {p1.base.HP}</div>
                            <div class="card-hp">SPEED - {p1.base.Speed}</div>
                            <div class="card-hp">ATTACK - {p1.base.Attack}</div>
                            <img
                                class="card-img"
                                src={createPokeImage(p1.id)}
                                alt={p1.name.english}
                            />
                        </div>
                        <div class="player_two">
                            <h1 class="card-name">{p2.name.english}</h1>
                            <div class="card-hp">HP - {p2.base.HP}</div>
                            <div class="card-hp">SPEED - {p2.base.Speed}</div>
                            <div class="card-hp">ATTACK - {p2.base.Attack}</div>
                            <img
                                class="card-img"
                                src={createPokeImage(p2.id)}
                                alt={p2.name.english}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return <p className="spinner">LOADING...</p>;
    }
}
