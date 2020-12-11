import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Pokemon.css';
import './Info.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-solid';

export default function Details() {
    const { id } = useParams({});
    const createPokeImage = (pokeID) => {
        return `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`;
    };

    const [pokemon, setPokemon] = useState();
    useEffect(() => {
        fetch(`https://pokie-app.herokuapp.com/pokemon/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setPokemon(res);
                console.log(res);
            });
    }, []);

    if (pokemon) {
        return (
            <div className="main">
                <div>
                    {pokemon.map((poke) => {
                        return (
                            <>
                                <div id="app">
                                    <div class="poke-card" id="{poke.name}">
                                        <div class="flexy">
                                            <span class="card-id">
                                                #{poke.id}
                                            </span>
                                            <span class="card-hp">
                                                HP {poke.base.HP}
                                                <i
                                                    id="poke-hp"
                                                    class="fa fa-heart"
                                                    aria-hidden="true"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faHeart}
                                                    />
                                                </i>
                                            </span>
                                        </div>
                                        <Link to={`/pokemon/${poke.id}/name`}>
                                            <h1 class="card-name">
                                                {poke.name.english}
                                            </h1>
                                        </Link>
                                        <img
                                            class="card-image"
                                            src={createPokeImage(poke.id)}
                                            alt={poke.name.english}
                                        />
                                        <Link to={`/pokemon/${poke.id}/type`}>
                                            <span class="card-details">
                                                Type:{' '}
                                                {poke.type.map((elem) => {
                                                    return (
                                                        <span className="pokiType">
                                                            {elem}
                                                        </span>
                                                    );
                                                })}
                                            </span>
                                        </Link>
                                        <Link to={`/pokemon/${poke.id}/base`}>
                                            <span>
                                                {Object.keys(poke.base).map(
                                                    (key) => {
                                                        return (
                                                            <span className="pokiBase">
                                                                {key}:{' '}
                                                                {poke.base[key]}
                                                                ,
                                                            </span>
                                                        );
                                                    }
                                                )}
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        );
    } else {
        return <p className="spinner">LOADING...</p>;
    }
}
