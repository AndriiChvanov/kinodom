import React, { useState, useEffect } from "react";
import "./Header.scss";
import Nav from "../nav/Nav";
import movie from "../../icons/movie.png";
import like from "../../icons/like.png";
import advertising from "../../icons/advertising.png";
import btn from "../../icons/header-btn.png";

function Header() {
	const [st, setSt] = useState(60);
	useEffect(() => {
		setInterval(() => {
			setSt(0);
		}, 10000);
	}, [st]);
	return (
		<div className='header' id='main'>
			<Nav />
			<div className='container'>
				<div className='header__container'>
					<div className='header__content'>
						<h1 className='header__content-h1'>
							Кино дом — залог хорошего вечера
						</h1>
						<p className='header__content-p'>
							В нашем онлайн киномеатре самая большая
							<br /> библиотека хорошего кино любых жанров
						</p>
						<button className='button header__btn'>
							Посмотреть каталог
							<img src={btn} alt='btn' />
						</button>
					</div>
					<div
						className='header__promo'
						style={{ transform: `translateX(${st}%)` }}>
						<div className='header__promo-sale'>
							<h2 className='text-h2 header__promo-sale-h2'>
								Бесплатный доступ
							</h2>
							<p className='text-p header__promo-sale-p'>
								Получи один месяц бесплатной подписки
							</p>
						</div>
						<div className='header__promo-sale'>
							<h2 className='text-h2 header__promo-sale-h2'>Скидка 50%</h2>
							<p className='text-p header__promo-sale-p'>
								Получи скидку на следущую подписку за активность в акаунте
							</p>
						</div>
					</div>
				</div>
				<div className='header__wrapper'>
					<div className='header__info'>
						<img className='header__info-img' src={movie} alt='movie' />
						<h2 className='info-h2 header__info-h2'>Огромный выбор</h2>
						<p className='info-p header__info-p'>
							10 000 фильмов и сериалов
							<br /> уже в библиотеке
						</p>
					</div>
					<div className='header__info'>
						<img className='header__info-img' src={like} alt='like' />
						<h2 className='info-h2 header__info-h2'>Индивидуальный подход</h2>
						<p className='info-p header__info-p'>
							Список рекомендуемых фильмов<br/> на основе ваших интересов
						</p>
					</div>
					<div className='header__info'>
						<img
							className='header__info-img'
							src={advertising}
							alt='advertising'
						/>
						<h2 className='info-h2 header__info-h2'>Кино со всего мира</h2>
						<p className='info-p header__info-p'>
							Кино со всего мира, включая
							<br /> Европу и Азию
						</p>
					</div>
				</div>
			</div>
			<div className='blure' />
		</div>
	);
}

export default Header;
