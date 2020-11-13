import React from "react";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie";
function App() {
  return (
    <>
      <MovieProvider>
        <Nav />
        <MovieList />
        <AddMovie />
      </MovieProvider>
    </>
  );
}

export default App;
