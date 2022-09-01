import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import axios from "axios";
import TvShows from "./pages/TvShows/TvShows";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';


function App() {
  const [tvShows, setTvShows] = useState([]);
	const [searchValue, setSearchValue] = useState('');
  const [videoList, setVideoList] = useState([]);

  // const getTvShowRequest = async (searchValue) => {
    const TV_API = "https://api.themoviedb.org/3/search/tv"
    const API_KEY = "?api_key=de66be7a82e7cc167b3ecb1b850cbc1c&language=en-US&page=1&include_adult=false&query="

		// const url = TV_API + API_KEY + `${searchValue}`
    // const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    // axios
    //   .get(TV_API + API_KEY + `${searchValue}`)
    //   .then((response) => {
    //     setVideoList(response.data);
    //     console.log(response.data)
    //   })

	// 	if (responseJson.Search) {
	// 		setTvShows(responseJson.Search);
	// 	}
	// };

  // useEffect(() => {
	// 	getTvShowRequest(searchValue);
	// }, [searchValue]);

	// 	if (TvShowFavourites) {
	// 		setFavourites(TvShowFavourites);
	// 	}
	// }, []);



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tvshows/:id" element={<TvShows />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
