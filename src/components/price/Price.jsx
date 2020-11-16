import React from "react";
import "./Price.scss";
import pautina from "../../icons/pautina.png";
function Price() {
	return (
		<div className='price'>
			<img src={pautina} alt='pautina' />
			<div className='container'>
				<div className='price__container'>
					<div className='price__title'>
						<h1>Тарифы</h1>
						<p>
							Наша компания представляет ширую линейку тарифов, чтобы каждый мог
							подобрать для себя мксимально подходящий
						</p>
					</div>
					<div className='price__info'>
						<div className='price__info-ticket'>
								<div className='price__info-border-hov'></div>
								<img src='#' alt='plus' />
								<h2>Базовый</h2>
								<h3>
									Включает все категории фильмов и сериалов. Оплата помесячно.
									Отключить тариф можно в любое время.
								</h3>
								<p>
									400₽
									<span> / месяц</span>
								</p>
							
						</div>
						<div className='price__info-ticket active'>
								<img src='#' alt='plus' />
								<h2>Оптимальный</h2>
								<h3>
									Включает все категории фильмов и сериалов. Оплата помесячно.
									Договор на 1 год.
								</h3>
								<p>
									300₽
									<span> / месяц</span>
								</p>
						</div>
						<div className='price__info-ticket'>
								<img src='#' alt='plus' />
								<h2>Долгосрочный</h2>
								<h3>
									Включает все категории фильмов и сериалов. Оплата помесячно.
									Договор на 2 года.
								</h3>
								<p>
									250₽
									<span> / месяц</span>
								</p>
						</div>
						<div className='price__info-ticket'>
								<img src='#' alt='plus' />
								<h2>Студенческий</h2>
								<h3>
									Приложите фото студ. билета и получите скидку 50% на выбранный
									тариф до конца текущего года.
								</h3>
								<p>
									400₽
									<span> / месяц</span>
								</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Price;
