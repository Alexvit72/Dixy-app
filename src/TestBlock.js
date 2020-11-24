import React from 'react';
import Test from './Test.js';
import Poster from './Poster.js';
import './css_Comp/TestBlock.css';

function TestBlock(props) {
	return <div className={props.className}>
		<Poster
			className='Poster test'
			srcImg=''
			header={<h3>Пройди тест</h3>}
			text={<p>Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности позволяет оценить значение новых предложений.</p>}
		/>
		<Test className='Test' />
	</div>;
}

export default TestBlock;
