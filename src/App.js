import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Pokemonpages from "./api";
function App() {
  return (
    <div className="App" >
      <Navbar />
      <Pokemonpages />
    </div>
  );
}
export default App;