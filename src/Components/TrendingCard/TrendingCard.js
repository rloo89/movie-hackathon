import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";


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
        <h3 className="trending__title">{value.name}</h3>
        {value.poster_path && <img src={`${IMAGE_API}${value.poster_path}`}/>}
        {/* { renderCard() } */}
      </div>
    )}