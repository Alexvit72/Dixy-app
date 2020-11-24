import React from 'react';
import './css_Comp/Poster.css';

function Poster(props) {
	return <div className={props.className}>
		<img src={props.srcImg} alt={props.alt} />
		{props.header}
		{props.text}
	</div>;
}

export default Poster;
