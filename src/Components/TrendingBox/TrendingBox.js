import TrendingCard from "../TrendingCard/TrendingCard";
import "./TrendingBox.scss";


export default function TrendingBox() {
  return (
    <>
    <div className= "trending__container">
        <h3>Trending</h3>
        <TrendingCard />
    </div>
    </>
  )
};
