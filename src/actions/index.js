const filmUpcoming = (upComing) => {
	return {
		type: "FILM_UPCOMING",
		payload: upComing,
	};
};
const filmGenres = (genres) => {
	return {
		type: "FILM_GENRES",
		payload: genres,
	};
};
const filmRequested = () => {
	return {
		type: "FILM_REQESTED",
	};
};

const filmList = (list) => {
	return {
		type: "FILM_LIST",
		payload: list,
	};
};
const filmListId = (id) => {
	return {
		type: "FILM_LIST_ID",
		payload: Number(id),
	};
};
const filmNum = (num) => {
	return {
		type: "FILM_LIST_NUM",
		payload: Number(num),
	};
};
const liActive = (id) => {
	return {
		type: "LI_ACTIVE",
		payload: Number(id),
	};
};
const filmSearch = (res) => {
	return {
		type: "FILM_SEARCH",
		payload: res,
	};
};
const filmSearchValue = (value) => {
	return {
		type: "FILM_SEARCH_I",
		payload: value,
	};
}
export {
	filmUpcoming,
	filmGenres,
	filmList,
	filmRequested,
	filmListId,
	filmNum,
	liActive,
	filmSearch,
	filmSearchValue,
};
