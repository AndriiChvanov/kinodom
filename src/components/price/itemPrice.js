import React from "react";

const ItemPrice = ({ priceList, handlerActive }) => {
	const {  active, name, text, prises } = priceList;;
	return (
		<div
			onClick={() => handlerActive()}
			className={active ? "price__info-ticket active" : "price__info-ticket"}>
			<img className='price__info-ticket-img' src='#' alt='plus' />
			<h2 className='price__info-ticket-h2'>{name}</h2>
			<h3 className='price__info-ticket-h2'>{text}</h3>
			<p className='price__info-ticket-p'>
				{prises}
				<span className='price__info-ticket-span'> / месяц</span>
			</p>
		</div>
	);
};

export default ItemPrice;
