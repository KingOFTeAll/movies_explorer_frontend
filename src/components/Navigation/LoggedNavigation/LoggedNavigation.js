import './LoggedNavigation.css';
import { NavLink, useLocation } from 'react-router-dom';

function LoggedNavigation() {
  const location = useLocation();
  const isMoviePage = location.pathname === '/movies';

  return (
    <>
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink to="/movies" className={isMoviePage ? "navigation__movies navigation__movies_active" : "navigation__movies"}>Фильмы</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/saved-movies" className={!isMoviePage ? "navigation__movies navigation__movies_active" : "navigation__movies"}>Сохранённые фильмы</NavLink>
        </li>
      </ul>
      <div className="navigation__item-icon">
        <NavLink to="/profile" className="navigation__profile">Аккаунт</NavLink>
      </div>
    </>
  )
}

export default LoggedNavigation;