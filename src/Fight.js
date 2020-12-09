import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Pokemon.css";
import "./Info.css";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/fontawesome-free-solid";

export default function Fight() {
  const { pl1, pl2 } = useParams();
  const createPokeImage = (pokeID) => {
    return `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`;
  };

  const [p1, setP1] = useState();
  const [p2, setP2] = useState();

  useEffect(() => {
    fetch(`https://pokie-app.herokuapp.com/pokemon/${pl1}`)
      .then((res) => res.json())
      .then((res) => {
        return setP1(res);
        console.log(res);
      });

    fetch(`https://pokie-app.herokuapp.com/pokemon/${pl2}`)
      .then((res) => res.json())
      .then((res) => {
        return setP2(res);
        console.log(res);
      });
  }, []);

  function fight() {
    p = [p1.name.english, p2.name.english];
    let attacking = p1.base.Speed > p2.base.Speed ? 0 : 1;
    while (p1.base.HP > 0 && p2.base.HP > 0) {
      var victim = attacking === 1 ? 0 : 1;
      p[victim].base.HP -= p[attacking].base.Attack;
      if (p[victim].base.HP <= 0) winner = p[attacking].name.english;
    }
    alert("winner is:", winner);
  }

  return fight();
}
