import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-solid';
import './Pokemon.css';

export default function Pokemon() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://pokie-app.herokuapp.com/pokemon')
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                console.log(res);
            });
    }, []);

    const createPokeImage = (pokeID) => {
        return `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`;
    };
    if (data.length) {
        return (
            <div id="app">
                {data.map((poki) => {
                    return (
                        <div class="poke-card" id="{poki.name}">
                            <div class="flexy">
                                <span class="card-id">#{poki.id}</span>
                                <span class="card-hp">
                                    HP {poki.base.HP}
                                    <i
                                        id="poke-hp"
                                        class="fa fa-heart"
                                        aria-hidden="true"
                                    >
                                        <FontAwesomeIcon icon={faHeart} />
                                    </i>
                                </span>
                            </div>
                            <h1 class="card-name">{poki.name.english}</h1>
                            <img
                                class="card-image"
                                src={createPokeImage(poki.id)}
                                alt={poki.name.english}
                            />
                            <span class="card-details">
                                Type:{' '}
                                {poki.type.map((elem) => {
                                    return (
                                        <span className="pokiType">{elem}</span>
                                    );
                                })}
                            </span>
                            <span>
                                {Object.keys(poki.base).map((key) => {
                                    return (
                                        <span className="pokiBase">
                                            {key}: {poki.base[key]},
                                        </span>
                                    );
                                })}
                            </span>
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return <p className="spinner">LOADING...</p>;
    }
}

/* <Link to={`${poki.id}`}><a class="btn">Detail</a></Link> */
