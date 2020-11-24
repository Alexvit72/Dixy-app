import React, { useState } from 'react';
import Question from './Question.js';
import Alarm from './Alarm.js';
import { questions } from './questions.js';
import { answers } from './answers.js';
import './css_Comp/Test.css';

function Test(props) {
	const [quesNum, setQuesNum] = useState(0);
	const [value, setValue] = useState('');
	const [counts, setCounts] = useState([0, 0, 0]);
	const [alarmMessage, setAlarmMessage] = useState('');

	function handleChange(event) {
		setValue(event.target.value);
		setAlarmMessage('');
		let index = Number(event.target.value.slice(-1));
		counts[index] += 1;
		setCounts(counts);
	}

	function handleClick() {
		if (quesNum < questions.length) {
			if (value.length) {
				setQuesNum(quesNum + 1);
				setValue('');
			} else {
				setAlarmMessage(<Alarm className='Alarm' message='ВЫБЕРИТЕ ОТВЕТ' />);
				return;
			}
		} else {
			setQuesNum(0);
			setCounts([0, 0, 0]);
		}
	}
	let num = counts.indexOf(Math.max(counts[0], counts[1], counts[2]));
	let result = <p>
		{answers[num][0]}<br />
		{answers[num][1]}
	</p>;

	return <div className={props.className}>
		{quesNum < questions.length ?
			<Question
				className='Question'
				value={value}
				question={questions[quesNum]}
				handleChange={handleChange}
		 	/>
			: result}
		<button className={props.className + '-button'} onClick={handleClick}>
			{quesNum < questions.length ? 'ДАЛЕЕ' : 'ПОВТОРИТЬ'}
		</button>
		{alarmMessage}
	</div>;
}

export default Test;
