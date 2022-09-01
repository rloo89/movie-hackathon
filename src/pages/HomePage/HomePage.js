import React from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import TrendingBox from "../../Components/TrendingBox/TrendingBox";
import ShowsNav from "../../Components/ShowsNav/ShowsNav";
import { useState, useEffect } from "react";
import axios from "axios";
import videoBg from "../HomePage/video.mp4"
import logo from "../HomePage/logo-2.jpg"
import { useParams } from "react-router-dom";
import "./HomePage.scss"

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
  <div className="logo-container">
  <img className="image" src={logo} alt="" />
  </div>
	<ShowsNav/>
      {results.length > 0 && ( // && signifca and then run the next of code
        <SearchBar
          value={searchValue}
          setValue={setSearchValue}
          onSearch={onSearch}
        />
      )}
      <div>
        {results.length <= 0 && (
          <SearchBar
            value={searchValue}
            setValue={setSearchValue}
            onSearch={onSearch}
          />
        )}
		 <TrendingBox results={results} />
      </div>
      {/* <video className="video">
        <source src={videoBg} autoPlay loop muted/>
		</video> */}
    </>
  );
}

export default HomePage;
