import React from 'react';
import './css_Comp/Alarm.css';

function Alarm(props) {
  return <div className={props.className}>
    {props.message}
  </div>;
}

export default Alarm;
