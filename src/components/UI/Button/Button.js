import React from 'react';
import classes from './Button.module.scss';

const Button = props => {
  const cls = [classes.Button]
  cls.push(classes[props.type])
  return (
    <button 
      className={cls.join(' ')} 
      type={props.type}
      onClick={props.onClick}
      >{props.text}</button>
  );
}

export default Button;