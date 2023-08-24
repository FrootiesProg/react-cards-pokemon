import React from "react";
import useFlip from "./hooks";
import "./PokemonCard.css";

// Define a functional component called PokemonCard
function PokemonCard({ front, back, name, stats }) {
  // Destructure the values returned by the useFlip hook: isFacingUp and flipCard function
  const [isFacingUp, flipCard] = useFlip();

  // Render the PokemonCard component
  return (
    <div onClick={flipCard} className="PokemonCard Card">
      {isFacingUp ? (
        // Render the front side of the card
        <div className="PokemonCard-front">
          <img src={front} alt={`${name} front`} />
          <div>
            <p className="PokemonCard-name">{name}</p>
            <ul className="PokemonCard-stats">
              {/* Map through stats and render each stat */}
              {stats.map((stat) => (
                <li key={stat.name}>
                  <em>{stat.name}</em>: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        // Render the back side of the card
        <div className="PokemonCard-back">
          <img src={back} alt={`${name} back`} />
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
