import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState } from "react";
import { mainApi } from "../../utils/MainApi";
import { filterMovies } from "../../utils/utils";

function SavedMovies({ onModal }) {
  const [savedMoviesData, setSavedMoviesData] = useState(() => {
    return JSON.parse(localStorage.getItem("savedMovie"))
  })
  const [searchedResult, setSearchedResult] = useState(savedMoviesData);
  const [isNothingFound, setIsNothingFound] = useState(false);

  function handleRemove(id) {
    return mainApi.remove(id)
      .then((res) => {
        const newArr = savedMoviesData.filter((item) => item._id !== id)
        setSavedMoviesData(newArr);

        const newArrResult = searchedResult.filter((item) => item._id !== id)
        setSearchedResult(newArrResult);
        localStorage.setItem("savedMovie", JSON.stringify(newArr));
      })
      .catch((err) => {
        if (err === "Ошибка в remove: 400") {
          onModal({ statusOk: false, text: "При удалении карточки произошла ошибка.", isOpen: true })
        } else onModal({ statusOk: false, text: "Что-то пошло не так...", isOpen: true })
      })
  }

  function searchMovies(querry, shorts) {
    const currentSearchedResult = savedMoviesData.filter(movie => filterMovies(movie, querry, shorts));
    if (currentSearchedResult.length === 0) {
      setIsNothingFound(true);
      setSearchedResult([]);
    } else {
      setIsNothingFound(false);
      console.log("Найденные после фильтрации фильмы:", currentSearchedResult);
      setSearchedResult(currentSearchedResult);
    }
  }

  return (
    <main className="saved-movies">
      <SearchForm onSearch={searchMovies} />
      <MoviesCardList onRemove={handleRemove} moviesData={searchedResult} />
      {isNothingFound ? <span className="saved-movies__nothing">Ничего не найдено</span> : null}
    </main>
  )
};

export default SavedMovies;
