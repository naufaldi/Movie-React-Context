import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry",
      price: "$10",
      id: 2312,
    },
    {
      name: "Potter",
      price: "$440",
      id: 123,
    },
    {
      name: "Joshua",
      price: "$30",
      id: 244,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
