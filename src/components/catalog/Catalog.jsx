import React, { Component } from "react";
import { connect } from "react-redux";
import WithKinodomService from "../hoc";
import { filmGenres, filmRequested, filmListId } from "../../actions";
import CatalogItem from "../catalogItem/CatalogItem";

import "./Catalog.scss";

class Catalog extends Component {
	componentDidMount() {
		this.props.filmRequested();
		const { KinodomService} = this.props;
		KinodomService.getToGenres().then((res) => this.props.filmGenres(res));
	}
	
	render() {
		const { genres, filmListId } = this.props;
		function cfl(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
		const itemL = genres.map((id) => {
			return (
				<li key={id.id} onClick={() => filmListId(id.id)}>
					{cfl(id.genre)} <span></span>
				</li>
			);
		});

		return (
			<div className='catalog' >
				<div className='container'>
					<div className='catalog__container'>
						<div className='catalog__genres'>
							<h1>Каталог</h1>
							<h2>Новинки</h2>
							<p>Жанры</p>
							{itemL}
						</div>
						<CatalogItem />
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = ({ genres, error }) => {
	return {
		genres,
		error,
		
	};
};

const mapDispatchToProps = {
	filmGenres: filmGenres,
	filmListId: filmListId,
	filmRequested,
};
export default WithKinodomService()(
	connect(mapStateToProps, mapDispatchToProps)(Catalog)
);
