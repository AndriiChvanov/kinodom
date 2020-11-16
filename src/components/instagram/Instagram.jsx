import React from "react";
import "./Instagram.scss";
import inst from "../../icons/inst.png";
import ded from "../../image/dedpull.png";
import post1 from "../../icons/inst1.png";
import post2 from "../../icons/inst2.png";
import post3 from "../../icons/inst3.png";
import post4 from "../../icons/inst4.png";

function Instagram() {
	return (
		<div className='instagram'>
			<div className='container'>
				<div className='instagram__content'>
					<div className='instagram__title'>
						<h1>
							Подпишись на наш <span>instagram</span>
							<br /> и будь в курсе всех ностей
							<br />в мире кино!
						</h1>
					</div>
					<div className='instagram__img-url'>
						<img src={inst} alt='instagram' />
					</div>
				</div>
			</div>
			<div className='instagram__img'>
				<div className='container'>
					<div className='instagram__img-cont'>
						<div className='instagram__img-posts'>
							<img src={post1} alt='instagram post' className='active' />
							<img src={post2} alt='instagram post' />
							<img src={post3} alt='instagram post' />
							<img src={post4} alt='instagram post' />
						</div>
						<div className='instagram__img-dedpull'>
							<img src={ded} alt='dedpull' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Instagram;
