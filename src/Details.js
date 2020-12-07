import React from 'react';
import { useParams } from 'react-router-dom';
import './Pokemon.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-solid';

export default function Details({ data }) {
    const { id } = useParams();
    const currentPokemon = data.find(
        (poki) => toString(poki.id) === toString(id)
    );
    console.log(`currentPokemon1 is: ${currentPokemon}`);

    if (currentPokemon) {
        console.log(`currentPokemon ${currentPokemon}`);
        return (
            <>
                <div id="app">
                    <div class="poke-card" id="{currentPokemon.name}">
                        <div class="flexy">
                            <span class="card-id">#{currentPokemon.id}</span>
                            <span class="card-hp">
                                HP {currentPokemon.base.HP}
                                <i
                                    id="poke-hp"
                                    class="fa fa-heart"
                                    aria-hidden="true"
                                >
                                    <FontAwesomeIcon icon={faHeart} />
                                </i>
                            </span>
                        </div>
                        <h1 class="card-name">{currentPokemon.name.english}</h1>
                        <img
                            class="card-image"
                            src="poki.png"
                            alt={currentPokemon.name.english}
                        />
                        <span class="card-details">
                            Type:{' '}
                            {currentPokemon.type.map((elem) => {
                                return <span className="pokiType">{elem}</span>;
                            })}
                        </span>
                        <span>
                            {Object.keys(currentPokemon.base).map((key) => {
                                return (
                                    <span className="pokiBase">
                                        {key}: {currentPokemon.base[key]},
                                    </span>
                                );
                            })}
                        </span>
                    </div>
                </div>
            </>
        );
    } else {
        return <p classNme="spinner">LOADING...</p>;
    }
}
