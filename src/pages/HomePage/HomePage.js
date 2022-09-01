import React from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import TrendingBox from "../../Components/TrendingBox/TrendingBox";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const TV_API = "https://api.themoviedb.org/3/search/tv";
const API_KEY = "de66be7a82e7cc167b3ecb1b850cbc1c";
function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);

  const onSearch = async () => {
    const data = await axios
      .get(TV_API, {
        params: {
          api_key: API_KEY,
          language: "en-US",
          page: 1,
          include_adult: false,
          query: searchValue,
        },
      })
      .then((res) => res.data);
    setResults(data.results);
  };

  return (
    <>
      {results.length > 0 && ( // && signifca and then run the next of code
        <SearchBar
          value={searchValue}
          setValue={setSearchValue}
          onSearch={onSearch}
        />
      )}
      <div>
        <TrendingBox results={results} />
        {results.length <= 0 && (
          <SearchBar
            value={searchValue}
            setValue={setSearchValue}
            onSearch={onSearch}
          />
        )}
      </div>
    </>
  );
}

export default HomePage;
