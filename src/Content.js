import React from 'react';
import './css_Comp/Content.css';
import Poster from './Poster.js';
import Dixy from './images/Dixy.png';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';

function Content(props) {
	return <div className={props.className}>
		<Poster
			className='Poster logo'
			srcImg={Dixy} alt='logo Dixy'
			header={<h3>залепись <span>ЦЕНА</span></h3>}
			text={<p>С 17 февраля по 8 марта 2020 г.</p>}
		/>
		<Poster
			className='Poster kupon'
			srcImg={img1} alt='img1'
			header={<h3>Получите на кассе купон со скидками<sup>**</sup></h3>}
			text={<p>При покупке от 700 руб.<sup>*</sup></p>}
		/>
		<Poster
			className='Poster buklet'
			srcImg={img2} alt='img2'
			header=''
			text=''
		/>
		<Poster
			className='Poster product'
			srcImg={img3} alt='img3'
			header={<h3>Выберите товар<sup>***</sup> и наклейте скидку</h3>}
			text=''
		/>
		<div className='Content-div'>
			<div className='Content-div-left'>
				<p>Наклейка перекрывает штрих-код на упаковке</p>
				<img src={img4} alt='img4' />
			</div>
			<div className='Content-div-right'>
				<img src={img5} alt='img5' />
				<p>Наклейка не перекрывает штрих-код на упаковке</p>
			</div>
		</div>
	</div>;
}

export default Content;
