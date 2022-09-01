import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const API_URL="https://api.themoviedb.org/3/tv/"
const REST_URL="?api_key=de66be7a82e7cc167b3ecb1b850cbc1c&language=en-US";
const IMAGE_API = "https://image.tmdb.org/t/p/w500"

const TvShows = () => {
  const params = useParams();
  const { id }  = params;

  const [showDetail, setShowDetail] = useState({});

  useEffect(() => {
    async function fetchData(){
      const detail = await axios.get(`${API_URL}${id}${REST_URL}`)
        .then(res => res.data);
        setShowDetail(detail);
    }
    fetchData();
  }, [])

  return (
    <>
      <Link to="/" ><button>BACK</button></Link>
        <div className="show-image-container">
          <h1>{showDetail.name}</h1>
          <h2>{showDetail.homepage}</h2>
          <p>{showDetail.overview}</p>
          {showDetail.poster_path && <img src={`${IMAGE_API}${showDetail.poster_path}`}/>}
        </div>
    </>
  );
};

export default TvShows;
