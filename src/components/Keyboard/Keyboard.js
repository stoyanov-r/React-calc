import React from 'react';
import Button from '../UI/Button/Button';
import classes from './Keyboard.module.scss';
import { connect } from 'react-redux';
import { onButtonClick, reset, equal } from '../../store/actions/Calc';


const Keyboard = (props) => {
  const numbers = new Array(10)
    .fill('')
    .map((_, i) => i) 
  return (
    <div className={classes.Keyboard}>
      <div className={classes.numbers}>
        <Button onClick={props.onButtonClick} type='point' text='.' />
        <Button onClick={props.onButtonClick} type='number' text='00' />
        {numbers.map((item, i) => <Button 
          type='number'
          text={item} 
          key={`button-${i}`}
          onClick={props.onButtonClick}
          />)}
      </div>
      <div className={classes.operators}>
        <Button onClick={props.onButtonClick} type='multiply' text='*'/>
        <Button onClick={props.onButtonClick} type='division' text='/'/>
        <Button onClick={props.onButtonClick} type='minus' text='-'/>
        <Button onClick={props.onButtonClick} type='plus' text='+'/>
      </div>
      <div className={classes.specialButtons}>
        <Button onClick={props.equal} type='equal' text='='/>
        <Button onClick={props.clear} type='clear' text='C'/>
      </div>
    </div>
  );
}

function mapDispatchToProps (dispatch) {
  return {
    onButtonClick: evt => dispatch(onButtonClick(evt.target.innerText)),
    clear: () => dispatch(reset()),
    equal: () => dispatch(equal()),
  }
}

export default connect(null, mapDispatchToProps)(Keyboard);
