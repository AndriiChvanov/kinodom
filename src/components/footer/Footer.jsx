import React from "react";
import "./Footer.scss";
import logo from '../../icons/logo.png'
function Footer() {
	return (
		<div className='footer'>
			<div className='container'>
				<div className='footer__container'>
					<div className='footer__logo'>
						<img src={logo} alt='logo' />
						<p>
							В нашем онлайн киномеатре
							<br /> самая большая библиотека
							<br /> хорошего кино любых жанров
						</p>
						<p>Все права защищены КиноДом ©</p>
					</div>
					<div className='footer__nav'>
						<li>Премьеры</li>
						<li>Фильмы</li>
						<li>Сериалы</li>
						<li>Детям</li>
					</div>
					<div className='footer__help'>
						<li>Топ 10 фильмов 2020</li>
						<li>
							100 фильмов которые стоит
							<br /> посмотреть за жизнь
						</li>
						<li>Топ 10 фильмов 2020</li>
					</div>
					<div className='footer__info'>
						<span>@kinodom</span>
						<h2>kinodom@gmail.com</h2>
						<h2>+48 545 214 121</h2>
						<p>круглосуточная тех.поддержка </p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
