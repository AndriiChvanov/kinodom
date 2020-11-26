import React, { Component } from "react";
import { connect } from "react-redux";
import WithKinodomService from "../hoc";
import { isActive } from "../../actions";
import ItemPrice from "./itemPrice";

import "./Price.scss";
import pautina from "../../icons/pautina.png";

class Price extends Component {
	
	render() {
		const { priceList, isActive } = this.props;
		const items = priceList.map((it) => {
			return (
				<ItemPrice
					key={it.id}
					priceList={it}
					handlerActive={() => isActive(it.id)}
				/>
			);
		});
		return (
			<div className='price'>
				<img src={pautina} alt='pautina' />
				<div className='container'>
					<div className='price__container'>
						<div className='price__title'>
							<h1 className='title-h1 price__title-h1'>Тарифы</h1>
							<p className='title-p price__title-p'>
								Наша компания представляет ширую линейку тарифов, чтобы каждый
								мог подобрать для себя мксимально подходящий
							</p>
						</div>
						<View items={items} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		priceList: state.price,
	};
};

const mapDispatchToProps = {
	isActive: isActive,
};
const View = ({ items }) => {
	return <div className='price__info'>{items}</div>;
};
export default WithKinodomService()(
	connect(mapStateToProps, mapDispatchToProps)(Price)
);
