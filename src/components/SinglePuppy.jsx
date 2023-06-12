import React from "react";
import { useNavigate } from "react-router-dom";

function SinglePuppy({ player }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="all-players">
        <div className="details">
          <h2 className="name">{player.name}</h2>
          <h2>{player.breed}</h2>
        </div>
        <img className="playerImg" src={player.imageUrl}></img>
        <button
          className="link"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/players/${player.id}`);
          }}
        >
          Details
        </button>
      </div>
    </>
  );
}

export default SinglePuppy;