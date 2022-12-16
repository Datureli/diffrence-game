import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const User = () => {
  let { id } = useParams();

  const [error] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetchData(id);
  }, [id]);
  const fetchData = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      console.log(data);
      setPokemon(data);
      setIsLoaded(true);
    } catch (err) {
      console.error(err);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (pokemon) {
    return (
      <div className="pokemonCard">
        <h1>{pokemon.name}</h1>
        <div>Weight: {pokemon.weight}</div>
        <div>Height: {pokemon.height}</div>
        <div>Experience: {pokemon.base_experience}</div>
      </div>
    );
  }
};
export default User;