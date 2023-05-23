import React, { useState, useEffect, createContext, useContext } from "react";

const URL = "https://rickandmortyapi.com/api/";

export const SWContext = createContext();

export const SWContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getCharacters = async () => {
      const charactersAPI = await fetch(`${URL}/character?page=${currentPage}`);
      const charactersJSON = await charactersAPI.json();
      setCharacters(charactersJSON.results);
    };
    getCharacters();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <SWContext.Provider value={{ characters, nextPage }}>
      {children}
    </SWContext.Provider>
  );
};
