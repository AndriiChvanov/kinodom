import React, { Component } from "react";
import { connect } from "react-redux";
import WithKinodomService from "../hoc";
import { filmRequested, filmList, filmNum, liActive } from "../../actions";
import star from "../../icons/Star.png";
import "./CatalogItem.scss";
class CatalogItem extends Component {
	componentDidMount() {
		this.props.filmRequested();
		const { KinodomService, itemsId, num } = this.props;
		KinodomService.getList(itemsId, num).then((res) =>
			this.props.filmList(res)
		);
	}
	componentDidUpdate(prevProps) {
		const { KinodomService, itemsId, num } = this.props;
		if (this.props.itemsId !== prevProps.itemsId) {
			KinodomService.getList(itemsId, num).then((res) =>
				this.props.filmList(res)
			);
		}
		if (this.props.num !== prevProps.num) {
			KinodomService.getList(itemsId, num).then((res) =>
				this.props.filmList(res)
			);
		}
	}
	activeBtn = (e) => {
		let id = e.target.getAttribute("data-id");
		this.props.liActive(id);
		this.props.filmNum(id);
	};
	topRated = () => {
		const { KinodomService, itemsId, num } = this.props;
		KinodomService.getTopRated(itemsId, num).then((res) =>
			this.props.filmList(res)
		);
	};
	yearRated = () => {
		const { KinodomService, itemsId, num } = this.props;
		KinodomService.getToYear(itemsId, num).then((res) =>
			this.props.filmList(res)
		);
	};
	render() {
		const { items, li, searchObj } = this.props;
		const mov = items.map((movie) => {
			return (
				<div className='catalog__items-sort  item-slide' key={movie.filmId}>
					<img
						className='item-img catalog__items-sort-img '
						src={movie.posterUrlPreview}
						alt={movie.nameRu}
					/>
					<h2 className='item-h2 catalog__items-sort-h2'>{movie.nameRu}</h2>
					<h3 className='item-h3 catalog__items-sort-h3'>
						{movie.genres[0] ? `${movie.genres[0].genre} ` : ""}
						{movie.genres[1] ? `${movie.genres[1].genre} ` : ""} <br />
						{movie.genres[2] ? ` ${movie.genres[2].genre}` : ""}
					</h3>
					<p className='item-p catalog__items-sort-p'>
						{movie.rating}
						<span className='item-span catalog__items-sort-span'>
							<img src={star} alt='star' />
						</span>
					</p>
				</div>
			);
		});
		const movFilter = searchObj.map((movie) => {
			return (
				<div className='catalog__items-sort  item-slide' key={movie.filmId}>
					<img
						className='item-img catalog__items-sort-img'
						src={movie.posterUrlPreview}
						alt={movie.nameRu}
					/>
					<h2 className='catalog__items-sort-h2 item-h2 '>{movie.nameRu}</h2>
					<h3 className='catalog__items-sort-h3 item-h3 '>
						{movie.genres[0] ? `${movie.genres[0].genre} ` : ""}
						{movie.genres[1] ? `${movie.genres[1].genre} ` : ""} <br />
						{movie.genres[2] ? ` ${movie.genres[2].genre}` : ""}
					</h3>
					<p className='catalog__items-sort-p item-p'>
						{movie.rating}
						<span className='catalog__items-sort-span item-span '>
							<img src={star} alt='star' />
						</span>
					</p>
				</div>
			);
		});
		return (
			<div className='catalog__items' id='catalog__filter'>
				<div className='catalog__items-filter'>
					<h2>Сортировать:</h2>
					<b className='active' onClick={() => this.topRated()}>
						популярность
					</b>

					<b onClick={() => this.yearRated()}>год выпуска</b>
				</div>
				<div className='catalog__items-content'>
					{movFilter.length === 0 ? mov : movFilter}
				</div>
				<ul
					className='catalog__items-pagination'
					onClick={(e) => this.activeBtn(e)}>
					<li className={li === 1 ? "active" : ""} data-id='1'>
						1
					</li>
					<li className={li === 2 ? "active" : ""} data-id='2'>
						2
					</li>
					<li className={li === 3 ? "active" : ""} data-id='3'>
						3
					</li>
					<li className={li === 4 ? "active" : ""} data-id='4'>
						4
					</li>
					<li className={li === 5 ? "active" : ""} data-id='5'>
						5
					</li>
				</ul>
			</div>
		);
	}
}
const mapStateToProps = ({ items, error, itemsId, num, li, searchObj }) => {
	return {
		items,
		error,
		itemsId,
		num,
		li,
		searchObj,
	};
};

const mapDispatchToProps = {
	filmList: filmList,
	liActive: liActive,
	filmNum: filmNum,
	filmRequested,
};
export default WithKinodomService()(
	connect(mapStateToProps, mapDispatchToProps)(CatalogItem)
);
