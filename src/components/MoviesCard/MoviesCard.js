import { useState, useEffect } from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { moviesUrl } from "../../config/config";
import MovieCardButton from "./MovieCardButton/MovieCardButton";
import { convertingDuration } from "../../utils/utils";

function MoviesCard({ movieData, onSave, isSaved, onRemove }) {
  const location = useLocation();
  const moviePage = location.pathname === "/movies"

  const [isSave, setIsSave] = useState(false);

  function saveMovieHandler() {
    onSave();
  }

  function deleteMovieHandler() {
    onRemove();
  }

  useEffect(() => {
    if (isSaved) {
      const result = isSaved.some((item) => (movieData.id) === item.movieId)
      setIsSave(result);
    }
  }, [isSaved])

  return (
    <li className="movie-card">
      <a
        className="movie-card__trailer"
        href={movieData.trailerLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="movie-card__image"
          alt={movieData.nameRu}
          src={moviePage ? `${moviesUrl}/${movieData.image.url}` : movieData.image}
        />
      </a>
      <MovieCardButton
        type={moviePage ? isSave ? "movie-card-button_type_save" : "movie-card-button" : "movie-card-button_type_remove"}
        onClickHandler={
          moviePage ? isSave ? deleteMovieHandler : saveMovieHandler : deleteMovieHandler
        }
      >
      </MovieCardButton>
      <div className="movie-card__description">
        <p className="movie-card__name">{movieData.nameRU}</p>
        <span className="movie-card__duration">
          {convertingDuration(movieData.duration)}
        </span>
      </div>
    </li>
  );
}

export default MoviesCard;
