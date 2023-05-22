import React, { useContext, useState, useEffect } from "react";
import { SWContext } from "../../context/context";
import "./Gallery.scss";

const Gallery = () => {
  const { characters } = useContext(SWContext);
  const [img, setImg] = useState("");
  const [h2, setH2] = useState("");

  useEffect(() => {
    if (characters.length > 0) {
      setImg(characters[0].image);
      setH2(characters[0].name);
    }
  }, [characters]);

  return (
    <div className="characters">
       {characters.length > 0 ? (
        characters.map((character) => (
          <div
            onMouseOver={() => setH2(character.name)}
           
            key={character._id}
            className="carta"
          >
            <h2 className="hover">{h2}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        ))
      ) : (
        <p>Cargando personajes...</p>
      )}
    </div>
  );
};

export default Gallery;
