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
						<p className='foot-li'>
							В нашем онлайн киномеатре
							<br /> самая большая библиотека
							<br /> хорошего кино любых жанров
						</p>
						<p className='foot-li'>Все права защищены КиноДом ©</p>
					</div>
					<div className='footer__nav '>
						<li className='menu-li'>Премьеры</li>
						<li className='menu-li'>Фильмы</li>
						<li className='menu-li'>Сериалы</li>
						<li className='menu-li'>Детям</li>
					</div>
					<div className='footer__help'>
						<li className='foot-li'>Топ 10 фильмов 2020</li>
						<li className='foot-li'>
							100 фильмов которые стоит
							<br /> посмотреть за жизнь
						</li>
						<li className='foot-li'>Топ 10 фильмов 2020</li>
					</div>
					<div className='footer__info'>
						<span className='footer__info-span'>@kinodom</span>
						<h2 className='footer__info-h2'>kinodom@gmail.com</h2>
						<h2 className='footer__info-h2'>+48 545 214 121</h2>
						<p className='foot-li'>круглосуточная тех.поддержка </p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
