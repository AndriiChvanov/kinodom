const initialState = {
	unComing: [],
	items: [],
	itemsId: 1,
	num: 1,
	li: 1,
	genres: [],
	value: "",
	searchObj: [],
	filmS: '',
	error: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "FILM_UPCOMING":
			return {
				...state,
				unComing: action.payload,
				error: false,
			};
		case "FILM_REQESTED":
			return {
				...state,
				unComing: state.unComing,
				error: false,
			};
		case "FILM_GENRES":
			return {
				...state,
				error: false,
				genres: action.payload,
			};
		case "FILM_LIST":
			return {
				...state,
				error: false,
				items: action.payload,
			};
		case "FILM_LIST_ID":
			return {
				...state,
				error: false,
				itemsId: action.payload,
			};
		case "FILM_LIST_NUM":
			return {
				...state,
				error: false,
				num: action.payload,
			};
		case "LI_ACTIVE":
			return {
				...state,
				error: false,
				li: action.payload,
			};
		case "FILM_SEARCH":
			return {
				...state,
				error: false,
				searchObj: action.payload,
			};
			case "FILM_SEARCH_I":
			return {
				...state,
				error: false,
				value: action.payload,
			};
			
		default:
			return state;
	}
};

export default reducer;
