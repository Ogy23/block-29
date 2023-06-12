import { useState, useEffect } from "react";
import SinglePuppy from "./SinglePuppy";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [players, setPlayers] = useState([]);
  let filteredPlayers = players.filter((result) => {
    let lowercasedName = result.name.toLowerCase();
    let lowercasedQuery = searchQuery.toLowerCase();

    if (lowercasedName.includes(lowercasedQuery)) {
      return result;
    }
  });
  useEffect(() => {
    async function fetchAllPlayers() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2304-FTB-ET-WEB-FT/players"
        );
        const translatedData = await response.json();
        setPlayers(translatedData.data.players);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllPlayers();
  });
  return (
    <div id="main-container">
      <form>
        <label className="label" htmlFor="search-query">
          Search By Name:{" "}
        </label>
        <input
          name="search-query"
          type="text"
          placeholder="type here"
          value={searchQuery}
          onChange={(search) => {
            setSearchQuery(search.target.value);
          }}
        ></input>
      </form>
      <div>
        {filteredPlayers.length ? (
          filteredPlayers.map((result, idx) => {
            return <SinglePuppy key={idx} player={result} />;
          })
        ) : (
          <p>No player by name.</p>
        )}
      </div>
    </div>
  );
}

export default SearchBar;