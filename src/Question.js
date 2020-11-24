import React from 'react';
import './css_Comp/Question.css';

function Question(props) {
  let list = props.question.answers.map( (item, index) => {
    return <label key={index}>
      <input type='radio'
        name='answer'
        value={'value' + index}
        tabIndex='0'
        checked={props.value === 'value' + index}
        onChange={(event) => props.handleChange(event)}
      />
      {item}
    </label>
  });
  return <div className={props.className}>
    <p>{props.question.text}</p>
    {list}
  </div>;
}

export default Question;
