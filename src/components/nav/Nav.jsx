import React, { Component } from "react";
import { connect } from "react-redux";
import WithKinodomService from "../hoc";
import {
	filmSearch,
	filmRequested,
	filmSearchValue,
	filmList,
} from "../../actions";
import { Link } from "react-scroll";

import "./Nav.scss";

import logo from "../../icons/logo.png";
import search from "../../icons/search.png";
import login from "../../icons/login.png";

class Nav extends Component {
	searchValue = (e, value) => {
		if (e.key === "Enter") {
			e.preventDefault();
			const { KinodomService, num } = this.props;
			KinodomService.getToSearch(value, num)
				.then((res) => this.props.filmSearch(res))
				.then(this.props.filmSearchValue(value));
		}
	};
	toReleases = (e) => {
		e.preventDefault();
		const { KinodomService, num } = this.props;
		KinodomService.getToReleases(num).then((res) => this.props.filmList(res));
	};
	toChild = (e) => {
		e.preventDefault();
		const { KinodomService, num } = this.props;
		KinodomService.getToChild(num).then((res) => this.props.filmList(res));
	};
	toSerial = (e) => {
		e.preventDefault();
		const { KinodomService, num } = this.props;
		KinodomService.getToSerial(num).then((res) => this.props.filmList(res));
	};
	render() {
		return (
			<div className='nav'>
				<div className='container'>
					<div className='nav__wrapper'>
						<div className='nav__logo'>
							<Link to='main'>
								<img src={logo} alt='КиноДом' />
							</Link>
						</div>
						<ul className='nav__menu menu-li'>
							<Link to='catalog__filter'>
								<li
									className='nav__menu-li'
									onClick={(e) => this.toReleases(e)}>
									Премьеры
								</li>
							</Link>
							<Link to='catalog__filter'>
								<li className='nav__menu-li'>Фильмы</li>
							</Link>
							<Link to='catalog__filter'>
								<li className='nav__menu-li' onClick={(e) => this.toSerial(e)}>
									Сериалы
								</li>
							</Link>
							<Link to='catalog__filter'>
								<li className='nav__menu-li' onClick={(e) => this.toChild(e)}>
									Детям
								</li>
							</Link>
						</ul>
						<div className='nav__search menu-li'>
							<img src={search} alt='Поиск' />
							<form action=''>
								<Link to='catalog__filter'>
									<input
										
										type='search'
										placeholder='Поиск'
										onKeyPress={(e) => this.searchValue(e, e.target.value)}
									/>
								</Link>
							</form>
							<img src={login} alt='Логин' />
							Войти
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ value, num, searchObj }) => {
	return {
		value: value,
		searchObj: searchObj,
		num,
	};
};

const mapDispatchToProps = {
	filmSearch: filmSearch,
	filmSearchValue: filmSearchValue,
	filmList:filmList,
	filmRequested,
};
export default WithKinodomService()(
	connect(mapStateToProps, mapDispatchToProps)(Nav)
);
