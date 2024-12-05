import { moviesUrl } from '../config/config'

const mainApiOptions = {
  baseUrl: "https://api.mymovies.nomoreparties.sbs",
};

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponseStatus(response, method) {
    return response.ok
      ? response.json()
      : Promise.reject(`Ошибка в ${method}: ${response.status}`);
  }

  signup(userData) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then((res) => {
      return this._checkResponseStatus(res, "signup");
    });
  }

  signin(userData) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then((res) => {
      return this._checkResponseStatus(res, "signin");
    });
  }

  jwtCheck(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      return this._checkResponseStatus(res, "jwtCheck");
    });
  }

  edit(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        "name": name,
        "email": email,
      })
    }).then((res) => {
      return this._checkResponseStatus(res, "edit");
    });
  }

  save(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        'authorization': `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${moviesUrl}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${moviesUrl}${movie.image.formats.thumbnail.url}`,
        movieId: `${movie.id}`,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN
      })
    }).then((res) => {
      return this._checkResponseStatus(res, "save");
    });
  }

  remove(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        'authorization': `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      },
    }).then((res) => {
      return this._checkResponseStatus(res, "remove");
    });
  }

  getInitialMovie() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        'authorization': `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      },
    }).then((res) => {
      return this._checkResponseStatus(res, "getInitialMovie");
    });
  }
}

export const mainApi = new MainApi(mainApiOptions);
