import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSearch }) {
  const location = useLocation();

  const [searchQuery, setSearchQuery] = useState(() => {
    if (location.pathname === "/movies") {
      const querry = localStorage.getItem("querry") || ""
      return querry
    } else return "";
  });

  const [isShortsChecked, setIsShortsChecked] = useState(() => {
    if (location.pathname === "/movies") {
      const shorts = JSON.parse(localStorage.getItem("shorts")) || false
      return shorts
    } else return false;
  });

  function handleChange({ target }) {
    setSearchQuery(target.value);
  }

  const handleShortsCheck = () => {
    onSearch(searchQuery, !isShortsChecked);
    setIsShortsChecked(!isShortsChecked);
  }

  function handleSearch(e) {
    e.preventDefault();
    onSearch(searchQuery, isShortsChecked);
  }

  return (
    <div className="search">
      <form className="search__form">
        <input className="search__input" placeholder="Фильм" value={searchQuery} onChange={handleChange} required />
        <button className="search__button" type="submit" onClick={handleSearch}>Найти</button>
      </form>
      <FilterCheckbox isChecked={isShortsChecked} checkHandler={handleShortsCheck} />
    </div>
  )
}

export default SearchForm;