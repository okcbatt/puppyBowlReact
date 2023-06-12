import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AllPlayers(props) {
  const allPlayers = props.allPlayers;
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const filteredPlayers = allPlayers.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search by Player Name"
        />
      </div>
      <div className="card-container">
        {filteredPlayers.length ? (
          filteredPlayers.map((player) => (
            <div key={player.id} className="player-card">
              <h3 className="player-name">{player.name}</h3>
              <img src={player.imageUrl} alt={player.name} className="player-image" />
              <div className="player-details">
                <p className="player-breed">{player.breed}</p>
                <p className="player-status">{player.status}</p>
              </div>
              <button
                onClick={() => {
                  navigate(`/players/${player.id}`);
                }}
              >
                Details
              </button>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default AllPlayers;
