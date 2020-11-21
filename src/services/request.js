export default class KinodomService {
	_baseURL = "https://kinopoiskapiunofficial.tech/api";

	async getResource(url) {
		const res = await fetch(`${this._baseURL}${url}`, {
			headers: {
				"X-API-KEY": "790fa14b-5fee-418a-804c-de848ce78c19",
			},
		});
		if (!res.ok) {
			throw new Error(`Could not fetch ${url} + , received ${res.status}`);
		}
		return await res.json();
	}
	async getTopUpcoming() {
		const res = await this.getResource(
			`/v2.1/films/releases?year=2020&month=DECEMBER`
		);
		return res.releases;
	}
	async getToGenres() {
		const res = await this.getResource(`/v2.1/films/filters`);
		return res.genres;
	}
	async getList(id, num) {
		const res = await this.getResource(
			`/v2.1/films/search-by-filters?genre=${id}&page=${num}`
		);
		return res.films;
	}
	async getTopRated(id, num) {
		const res = await this.getResource(
			`/v2.1/films/search-by-filters?genre=${id}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&page=${num}`
		);
		return res.films;
	}
	async getToYear(id, num) {
		const res = await this.getResource(
			`/v2.1/films/search-by-filters?genre=${id}&order=YEAR&type=ALL&yearTo=2020&page=${num}`
		);
		return res.films;
	}
	async getToSearch(val, num) {
		const res = await this.getResource(
			`/v2.1/films/search-by-keyword?keyword=${val}&page=${num}`
		);
		return res.films;
	}
	async getToChild(num) {
		const res = await this.getResource(
			`/v2.1/films/search-by-filters?genre=14&genre=10&order=RATING&type=FILM&yearFrom=2010&page=${num}`
		);
		return res.films;
	}
	
	async getToReleases(num) {
		const res = await this.getResource(
			`/v2.1/films/releases?year=2020&month=NOVEMBER&page=${num}`
		);
		return res.releases;
	}
	async getToSerial(num) {
		const res = await this.getResource(
			`/v2.1/films/search-by-keyword?keyword=%28%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%29&page=${num}`
		);
		return res.films;
	}
}
