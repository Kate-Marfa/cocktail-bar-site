import React from "react";
import { Link } from "react-router-dom";

export default function SearchByAlphabet() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="alphabet-filter">
      {alphabet.map((letter) => (
        <Link key={letter} to={`/cocktail-by-letter/${letter}`}>
          {letter}
        </Link>
      ))}
    </div>
  );
}
