const React = require("react");
const { useState, useEffect, createContext } = React;

const URL = "https://rickandmortyapi.com/api/";

export const SWContext = createContext();

export const SWContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const charactersAPI = await fetch(`${URL}/character`);
      const charactersJSON = await charactersAPI.json();
      setCharacters(charactersJSON.results);
    };
    getCharacters();
  }, []);

  return (
    <SWContext.Provider value={{ characters }}>
      {children}
    </SWContext.Provider>
  );
};

// Imprimir imágenes de los personajes en la consola
(async () => {
  const charactersResponse = await fetch(`${URL}/character`);
  const charactersData = await charactersResponse.json();

  charactersData.results.forEach((character) => {
    console.log(character.image);
  });
})();

