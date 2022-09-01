import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import axios from "axios";
import TvShows from "./pages/TvShows/TvShows";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          hi
        {/* <video autoplay loop muted plays-inline src="Assets/video.mp4"></video> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/tvshows/:id" element={<TvShows />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
