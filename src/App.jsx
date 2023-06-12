import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AllPlayers from "./components/AllPlayers";
import NavBar from "./components/NavBar";
import PlayerDetails from "./components/PlayerDetails";

function App() {
  const [allPlayers, setAllPlayers] = useState([]);
  useEffect(() => {
    async function fetchAllPlayers() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2304-FTB-ET-WEB-FT/players"
        );
        const translatedData = await response.json();
        setAllPlayers(translatedData.data.players);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllPlayers();
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/players"
          element={<AllPlayers allPlayers={allPlayers} />}
        />
        <Route
          path="/players/:id"
          element={<PlayerDetails allPlayers={allPlayers} />}
        />
      </Routes>
    </>
  );
}

export default App;
