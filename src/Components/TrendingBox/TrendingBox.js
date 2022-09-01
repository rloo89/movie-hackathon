import TrendingCard from "../TrendingCard/TrendingCard";
import "./TrendingBox.scss";


export default function TrendingBox({ results }) {
  return (
    <>
    <div className= "trending__container">
        {results.map((r) => 
          <TrendingCard key={r.id} value={r} />
        )}
    </div>
    </>
  )
};
