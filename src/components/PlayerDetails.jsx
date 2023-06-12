import React from "react";
import { useParams } from "react-router-dom";

function PlayerDetails(props) {
  const allPlayers = props.allPlayers;
  const { id } = useParams();
  const myPlayer = allPlayers.find((e) => {
    if (e.id == id) {
      return true;
    }
  });
  return (
    <div>
      {myPlayer && myPlayer.id ? (
        <>
          <div className="puppy-story">
            <h2>
              {myPlayer.name}, the {myPlayer.breed} Superstar
            </h2>
            <p>
              Once upon a time, in a small town, there lived an athletic puppy
              named {myPlayer.name}. {myPlayer.name} was a {myPlayer.breed} with
              boundless energy and a passion for sports.
            </p>
            <p>
              From a young age, it was evident that {myPlayer.name} had a
              natural talent for running and jumping. Whether it was chasing a
              ball or leaping over obstacles, {myPlayer.name} always displayed
              incredible agility and speed.
            </p>
            <p>
              As {myPlayer.name} grew older, their athleticism continued to
              shine. They participated in various dog sports competitions,
              stunning everyone with their remarkable performances.{" "}
              {myPlayer.name} became known as the {myPlayer.breed} superstar,
              setting new records and leaving a lasting impression on the
              audience.
            </p>
            <p>
              The bond between {myPlayer.name} and their human companion grew
              stronger with each victory. Together, they trained tirelessly,
              pushing the boundaries of what was thought possible.{" "}
              {myPlayer.name}'s determination and relentless spirit inspired
              others to pursue their own athletic dreams.
            </p>
            <p>
              Today, {myPlayer.name} stands as a symbol of dedication,
              perseverance, and the incredible potential that lies within each
              of us. Their story reminds us that with hard work and a passion
              for what we love, we can achieve greatness.
            </p>
            <p>
              So, if you ever come across {myPlayer.name} the {myPlayer.breed},
              take a moment to appreciate their journey and remember that within
              every athletic puppy, there's a story waiting to be written.
            </p>
            <img
              src={myPlayer.imageUrl}
              alt={myPlayer.name}
              className="player-image"
            />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PlayerDetails;
