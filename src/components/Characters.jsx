import React, { useState, useEffect, useReducer } from "react";

import { Container } from "../components/CharactersStyle";

/*AGREGAR A FAVORITOS*/
const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

/*FUNCIONES PARA CONSUMIR LA API DE RIKY MORTY*/
function Characters() {
  const [characters, setCharacters] = useState([]);

  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  return (
    <Container className="Characteres">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}

      {characters.map((character) => (
        <figure key={character.id}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <h3>{character.status}</h3>
          <p>
            <strong> Location :</strong> {character.location.name}
          </p>
          <button type="button" onClick={() => handleClick(character)}>
            Agregar a favoritos
          </button>
        </figure>
      ))}
    </Container>
  );
}

export default Characters;
