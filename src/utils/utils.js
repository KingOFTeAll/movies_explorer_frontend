import { shortsDuration, mobileSize, tabletSize, mobileMoviesObj, tabletMoviesObj, desktopMoviesObj } from "../config/config";

export function convertingDuration(duration) {
	const hours = Math.trunc(duration / 60);
	const minutes = duration % 60;
	const result = [];
	if(hours) result.push(`${hours}ч`);
	if(minutes) result.push(`${minutes}м`);
	return result.join(" ");
}

// все про фильтрацию
function queryFilter(movie, query) {
	const correctQuery = query.toLowerCase(); 
	const check = movie.nameRU.toLowerCase().includes(correctQuery);
	return check;
}

function durationFilter(duration, shorts, correctDuration = shortsDuration) {
	if (shorts && (duration <= correctDuration)) {
		return true;
	} else {
		return (!shorts);
	}
}

export function filterMovies(movie, query, shorts) {
	return queryFilter(movie, query) && durationFilter(movie.duration, shorts);
}

// все про отображение нужного числа фильмов
export function getCorrectNumberMovies() {
	const screenWidth = window.innerWidth;
	if (screenWidth <= mobileSize) {
		return mobileMoviesObj;
	} else if (screenWidth <= tabletSize) {
		return tabletMoviesObj;
	} else {
		return desktopMoviesObj;
	}
}