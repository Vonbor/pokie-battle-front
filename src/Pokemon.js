import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <div className="main">
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
                                <Link to={`/pokemon/${poki.id}`}>
                                    <h1 class="card-name">
                                        {poki.name.english}
                                    </h1>
                                </Link>
                                <img
                                    class="card-image"
                                    src={createPokeImage(poki.id)}
                                    alt={poki.name.english}
                                />
                                <span class="card-details">
                                    Type:{' '}
                                    {poki.type.map((elem) => {
                                        return (
                                            <span className="pokiType">
                                                {elem}
                                            </span>
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
            </div>
        );
    } else {
        return (
            <p className="spinner">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/73e61ecd-e2c8-4785-9ed3-d6ccd5d0826e/d51iqya-9f62b1eb-c6f8-4e29-bb06-3611ad6f6b2b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzNlNjFlY2QtZTJjOC00Nzg1LTllZDMtZDZjY2Q1ZDA4MjZlXC9kNTFpcXlhLTlmNjJiMWViLWM2ZjgtNGUyOS1iYjA2LTM2MTFhZDZmNmIyYi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.f807EmkHN1hE03g3DnDxLQsTtKDADkqd6nXfAbwfIy8"></img>
            </p>
        );
    }
}

/* <Link to={`${poki.id}`}><a class="btn">Detail</a></Link> */
