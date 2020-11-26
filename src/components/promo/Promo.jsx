import React from "react";
import "./Promo.scss";
import spider from "../../icons/spider.png";
import one from "../../icons/1.png";
import two from "../../icons/2.png";
import pl from "../../icons/play.png";
function Promo() {
	return (
		<div className='promo'>
			<div className='container'>
				<div className='promo__container'>
					<div className='promo__info'>
						<div className='promo__info-title'>
							<h1 className='promo__info-title-h1 title-h1'>Акции</h1>
							<p className='promo__info-title-p title-p'>
								Кино дом любит своих клиентом и поэтому всегда радует акция
								<br /> и скидками. Сейчас на сайте активны две акции Бесплатный
								месяц
								<br /> и Скидка 50% за активность, ниже можно прочитать условия
							</p>
						</div>
						<div className='promo__info-img'>
							<img src={spider} alt='spider' />
						</div>
					</div>
					<div className='promo__free'>
						<div className='promo__free-one'>
							<img className='promo__free-img' src={one} alt='' />
							<div className='promo__free-info'>
								<h2 className='promo__free-info-h2 free-h2'>
									Бесплатный доступ
								</h2>
								<p className='promo__free-info-p free-p'>
									Оплатите любой тариф и получи следующий месяц подписки
									абсолютно бесплатно. Акция действует на все тарифи. Срок
									действия акции заканчивается 30 ноября 2020 г.
								</p>
								<button className='button promo__free-btn'>
									Активировать{" "}
									<img className='button-img' src={pl} alt='play' />
								</button>
							</div>
						</div>
						<div className='promo__free-promo'>
							<img className='promo__free-img' src={two} alt='' />
							<div className='promo__free-info'>
								<h2 className='promo__free-info-h2 free-h2'>Скидка 50%</h2>
								<p className='promo__free-info-p free-p'>
									За активность в аккаунте: написание рецензий, прохождение
									квизов, составление собственных подборок — скидка 50% на любой
									тариф при следующей оплате доступа к сервису
								</p>
								<button className='button promo__free-btn'>
									Активировать{" "}
									<img className='button-img' src={pl} alt='play' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Promo;
