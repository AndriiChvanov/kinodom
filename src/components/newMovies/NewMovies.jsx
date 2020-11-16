import React, { Component } from "react";
import Whirligig from "react-whirligig";
import WithKinodomService from "../hoc";
import { filmUpcoming, filmRequested } from "../../actions";
import { connect } from "react-redux";
import newM from "../../image/newMovies.png";
import arrovLeft from "../../icons/arrow-left.png";
import arrovRight from "../../icons/arrow-right.png";
import "./NewMovies.scss";

class NewMovies extends Component {
	componentDidMount() {
		this.props.filmRequested();
		const { KinodomService } = this.props;
		KinodomService.getTopUpcoming().then((res) => this.props.filmUpcoming(res));
	}
	render() {
		const { unComing } = this.props;
		
		let whirligig;
		const next = () => whirligig.next();
		const prev = () => whirligig.prev();
		const items = unComing.map((movie) => {
			return (
				<div className='newmovies__slide' key={movie.filmId}>
					<img src={movie.posterUrlPreview} alt={movie.nameRu} />
					<h2>{movie.nameRu}</h2>      
				</div>
			); 
		});
		return (
			<div className='newmovies'>
				<div className='container'>
					<div className='newmovies__container'>
						<div className='newmovies__wrapper'>
							<div className='newmovies__title'>
								<h1>Скоро на экранах</h1>
								<p>
									Шагай в ногу со временем и не пропускай
									<br /> горячие новинки кино
								</p>
								<h2>Фильмы</h2>
							</div>
							<div className='newmovies__img'>
								<img src={newM} alt='capitan' />
								<h2>Смотреть все</h2>
							</div>
						</div>
						<div className='newmovies__slider'>
							<div className='newmovies__inner'>
								<div className='newmovies__slides'>
									<div className='newmovies__slides-prev' onClick={prev}>
										<img src={arrovLeft} alt='prev' />
									</div>
									<Whirligig
										preventScroll={false}
										gutter={"8px"}
										visibleSlides={5}
										ref={(_whirligigInstance) => {
											whirligig = _whirligigInstance;
										}}
										style={{ overflowY: "hidden" }}>
										{items}
									</Whirligig>
									<div className='newmovies__slides-next' onClick={next}>
										<img src={arrovRight} alt='next' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = ({ unComing, error }) => {
	return {
		unComing,
		error,
	};
};

const mapDispatchToProps = {
	filmUpcoming: filmUpcoming,
	filmRequested,
};
export default WithKinodomService()(
	connect(mapStateToProps, mapDispatchToProps)(NewMovies)
);
