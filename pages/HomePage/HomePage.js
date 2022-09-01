import React from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import TrendingBox from "./Components/TrendingBox/TrendingBox";
import { useEffect, useState } from "react";

function HomePage() {
  const TV_API = "https://api.themoviedb.org/3/";
  const API_KEY = "?api_key=de66be7a82e7cc167b3ecb1b850cbc1c";
  const SEARCH_API = TV_API + "search/tv" + API_KEY;
  const TRENDING_URL = "https://api.themoviedb.org/3/trending/tv/day?api_key=de66be7a82e7cc167b3ecb1b850cbc1c";

  const [tvShows, setTvShows] = useState([]);
  const [search, setSearch] = useState([]);
  const [trending, setTrending] = useState([]);

  const response = await fetch(url);
  const responseJson = await response.json();

  if (responseJson.search) {
    setTvShows(responseJson.search);
  }

  useEffect(() => {
    fetchTvShows();
  }, []);

  return (
    <>
      <SearchBar />
      <TrendingBox />
    </>
  );
}

export default HomePage;
