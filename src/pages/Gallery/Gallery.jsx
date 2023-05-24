import React, { useContext, useState, useEffect } from "react";
import { SWContext } from "../../context/context";
import "./Gallery.scss";

const Gallery = () => {
  const { characters, nextPage } = useContext(SWContext);
  const [currentCharacter, setCurrentCharacter] = useState(characters[0]);

  useEffect(() => {
    if (characters.length > 0) {
      setCurrentCharacter(characters[0]);
    }
  }, [characters]);

  const handlePreviousPage = () => {
    nextPage();
  };

  const handleNextPage = () => {
    nextPage();
  };

  return (
    <div>
      <button onClick={handlePreviousPage} className="boton1"  >ver mas</button>

      <div className="characters">
        {characters.length > 0 ? (
          characters.map((character) => (
            <div key={character._id} className="carta">
              <h2>{character.name}</h2>
              <p className="specie">{character.species}</p>
              <img src={character.image} alt={character.name} />
             <p className="location">{character.location.name}</p>
            </div>
          ))
        ) : (
          <p>Cargando personajes...</p>
        )}
      </div>

      <button onClick={handleNextPage} className="boton2"> ver mas</button>
    </div>
  );
};

export default Gallery;

