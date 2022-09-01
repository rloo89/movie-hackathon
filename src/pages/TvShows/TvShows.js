import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./TvShows.scss";
import logo from "../HomePage/logo-2.jpg"
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
    <section className="show-container">
        <div className="show-image" style={{backgroundImage:`linear-gradient(rgba(50, 50, 50, 0.5), rgba(50, 50, 50, 0.5)),url(${IMAGE_API}${showDetail.backdrop_path})`}}>
          <div className="show-image__container">
            <div className="show-image__wrapper">
          {showDetail.poster_path && <img  className="show-image__img"src={`${IMAGE_API}${showDetail.poster_path}`}/>}
          </div>
          <div className="show-image__detail">
          <h1>{showDetail.name}</h1>
          <h2>{showDetail.homepage}</h2>
          <p>{showDetail.overview}</p>
          </div>
          </div>
        </div>
          <div className="overlay"></div>
          <Link className="btn__link" to="/"><button className="btn">BACK</button></Link>
    </section>
  );
};

export default TvShows;
