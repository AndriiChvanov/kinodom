import React from "react";

const ItemPrice = ({ priceList, handlerActive }) => {
	const {  active, name, text, prises } = priceList;;
	return (
		<div
			onClick={() => handlerActive()}
			className={active ? "price__info-ticket active" : "price__info-ticket"}
			>
			<img src='#' alt='plus' />
			<h2>{name}</h2>
			<h3>{text}</h3>
			<p>
				{prises}
				<span> / месяц</span>
			</p>
		</div>
	);
};

export default ItemPrice;
