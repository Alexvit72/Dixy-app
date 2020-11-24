import React, { useState } from 'react';
import './css_Comp/FormSubscrybe.css'

function FormSubscrybe(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubScrybed, setIsSubScrybed] = useState(false);

  function handleSubmit(event) {
    if (name.length && email.length) {
      setIsSubScrybed(true);
    } else event.preventDefault();
  }

  return <div className={props.className}>
    <h2>ПОДПИСАТЬСЯ НА РАССЫЛКУ</h2>
    <p>{props.text}</p>
    {isSubScrybed ? <div className='subScrybed'>ВЫ ПОДПИСАНЫ НА РАССЫЛКУ</div> : <form className={props.className + '-inputs'}
    onSubmit={(event) => handleSubmit(event)}>
      <input value={name} placeholder='Имя'
        onChange={(event) => setName(event.target.value)}
      />
      <input type='email' value={email} placeholder='Email'
        onChange={(event) => setEmail(event.target.value)}
      />
      <button>ПОДПИСАТЬСЯ</button>
    </form>}
  </div>;
}

export default FormSubscrybe;
