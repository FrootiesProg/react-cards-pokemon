import React from "react";
import useAxios from "./useAxios"; 
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

function PokeDex() {
  // Initialize the state using the useAxios hook
  const [pokemonData, fetchPokemonData] = useAxios(
    [], // Initial data is an empty array
    "https://pokeapi.co/api/v2/pokemon/" // Base URL for API requests
  );

  // Function to add a new Pokemon by name
  const addPokemon = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}/`; // Construct the URL based on the provided name
    fetchPokemonData(url); // Fetch data using the fetchPokemonData function from the hook
  };

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        {/* Render the PokemonSelect component and pass the addPokemon function */}
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {/* Map through the pokemonData array and render PokemonCard components */}
        {pokemonData.map((cardData) => (
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map((stat) => ({
              value: stat.base_stat,
              name: stat.stat.name,
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
