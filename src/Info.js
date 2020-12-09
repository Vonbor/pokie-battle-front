import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Info.css';
import './Pokemon.css';

export default function Info() {
    const { id, info } = useParams();

    const [pokeInfo, setPokeInfo] = useState();
    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://pokie-app.herokuapp.com/pokemon/${id}/${info}`)
            .then((res) => res.json())
            .then((res) => {
                setPokeInfo(res);
                //setLoading(false);
            });
    }, []);

    const renderPokemon = (poke) => {
        if (info === 'name') {
            return (
                <div>
                    <div className="wrap">
                        <span>English: {poke.english}</span>
                        <span>French: {poke.french}</span>
                        <span>Japanese: {poke.japanese}</span>
                        <span>Chinese: {poke.chinese}</span>
                    </div>
                </div>
            );
        } else if (info === 'type') {
            return (
                <div>
                    <div className="wrap">
                        <span>{poke.map((type) => ` ${type}`)}</span>
                    </div>
                </div>
            );
        } else if (info === 'base') {
            return (
                <div>
                    <div className="wrap">
                        <div>
                            <div>
                                <span>{`HP: ${poke.HP}`}</span>
                                <span>{`Attack: ${poke.Attack}`}</span>
                                <span>{`Defense: ${poke.Defense}`}</span>
                                <span>{`Sp. Attack: ${poke['Sp. Attack']}`}</span>
                                <span>{`Sp. Defense: ${poke['Sp. Defense']}`}</span>
                                <span>{`Speed: ${poke.Speed}`}</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <h1>Select name, base or type</h1>;
        }
    };

    return (
        <div>{pokeInfo ? renderPokemon(pokeInfo) : 'Error is happened'}</div>
    );
}
