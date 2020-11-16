import React, { Component } from "react";
import { connect } from "react-redux";
import WithKinodomService from "../hoc";
import { filmSearch, filmRequested, filmSearchValue } from "../../actions";
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
	render() {
		return (
			<div className='nav'>
				<div className='nav__wrapper'>
					<div className='nav__logo'>
						<Link to='main'>
							<img src={logo} alt='КиноДом' />
						</Link>
					</div>
					<ul className='nav__menu'>
						<li>Премьеры</li>
						<li>Фильмы</li>
						<li>Сериалы</li>
						<li>Детям</li>
					</ul>
					<div className='nav__search'>
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

	filmRequested,
};
export default WithKinodomService()(
	connect(mapStateToProps, mapDispatchToProps)(Nav)
);
