import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import "./TrendingCard.scss";


const IMAGE_API = "https://image.tmdb.org/t/p/w500"
export default function TrendingCard({value}) {
  let navigate = useNavigate();
    const onClick = () => {
      return navigate(`/tvshows/${value.id}`);
    }

    // const renderCard = () => {
    //   if (value.poster_path) {
    //     return <img src={`${IMAGE_API}${value.poster_path}`}/>;
    //   }
    // }

    return (
      <div className="trending__card" onClick={() => onClick()}>
        {value.poster_path && <img className="trending__image"src={`${IMAGE_API}${value.poster_path}`}/>}
        {/* { renderCard() } */}
      </div>
    )}