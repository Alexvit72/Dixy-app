import './css_Comp/App.css'
import React from 'react';
import Content from './Content.js';
import TestBlock from './TestBlock.js';
import FormSubscrybe from './FormSubscrybe.js';
import Footer from './Footer.js';

function App() {
	return <div className='App'>
		<Content className='Content' />
		<TestBlock className='TestBlock' />
		<FormSubscrybe className='FormSubscrybe'
			text='Значимость этих проблем настолько очевидна, что постоянный количественный
				рост и сфера нашей активности позволяет оценить значение новых предложений.'
		/>
		<Footer className='Footer' />
	</div>;
}

export default App;
