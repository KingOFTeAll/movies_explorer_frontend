import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({ moviesData, onSave, isSaved, onRemove }) {
  const location = useLocation();
  const moviePage = location.pathname === "/movies";

  return (
    <ul className="movies-list">
      {
        moviesData.map(({ _id, ...movie }) => <MoviesCard onRemove={() => { moviePage ? onRemove(movie) :  onRemove(_id)}} isSaved={isSaved} onSave={() => { onSave(movie) }} key={movie.id || _id} movieData={movie} />)
      }
    </ul>
  )
}

export default MoviesCardList;