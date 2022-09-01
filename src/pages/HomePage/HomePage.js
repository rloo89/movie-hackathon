import React from 'react'
import SearchBar from "../../Components/SearchBar/SearchBar";
import TrendingBox from "../../Components/TrendingBox/TrendingBox";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function HomePage() {

  const [tvShows, setTvShows] = useState([]);
	const [searchValue, setSearchValue] = useState('');

  const getTvShowRequest = async (searchValue) => {
    const TV_API = "https://api.themoviedb.org/3/search/tv"
    const API_KEY = "?api_key=de66be7a82e7cc167b3ecb1b850cbc1c&language=en-US&page=1&include_adult=false&query="

		const url = TV_API + API_KEY + `${searchValue}`
    // const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setTvShows(responseJson.Search);
		}
	};

  useEffect(() => {
		getTvShowRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const TvShowFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (TvShowFavourites) {
			setFavourites(TvShowFavourites);
		}
	}, []);


  return (
    <>
    <SearchBar/>
    <TrendingBox />
    </>
  )
}

export default HomePage