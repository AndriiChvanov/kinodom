const initialState = {
	unComing: [],
	items: [],
	itemsId: 1,
	num: 1,
	li: 1,
	genres: [],
	value: "",
	searchObj: [],
	filmS: "",
	price: [
		{
			id: 1,
			active: false,
			name: "Базовый",
			text:
				"Включает все категории фильмов и сериалов. Оплата помесячно. Отключить тариф можно в любое время.",
			prises: "400₽",
		},
		{
			id: 2,
			active: true,
			name: "Оптимальный",
			text:
				"Включает все категории фильмов и сериалов. Оплата помесячно. Договор на 1 год.",
			prises: "300₽",
		},
		{
			id: 3,
			active: false,
			name: "Долгосрочный",
			text:
				"Включает все категории фильмов и сериалов. Оплата помесячно. Договор на 2 года.",
			prises: "250₽",
		},
		{
			id: 4,
			active: false,
			name: "Студенческий",
			text:
				"Приложите фото студ. билета и получите скидку 50% на выбранный тариф до конца текущего года.",
			prises: "400₽",
		},
	],
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
		case "IS_ACTIVE":
			const id = action.payload;
			const itemInd = state.price.findIndex((item) => item.id === id);
			state.price.map((item) => (item.active = false));
			const item = state.price.find((item) => item.id === id);
			
			const newItem = {
				id: item.id,
				active: !item.active,
				name: item.name,
				text: item.text,
				prises: item.prises,
			};
			return {
				...state,
				error: false,
				price: [
					...state.price.slice(0, itemInd),
					newItem,
					...state.price.slice(itemInd + 1),
				],
			};
		default:
			return state;
	}
};

export default reducer;
