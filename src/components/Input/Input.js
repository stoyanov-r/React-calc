import React, { createRef, useEffect } from 'react';
import classes from './Input.module.scss';
import { connect } from 'react-redux';
import { changeInput, onKeyHandler } from '../../store/actions/Calc';

const Input = ({onEnterClick, isValid, inputValue, onInputChange }) => {

  const inputRef = createRef()
  useEffect(() => {
    inputRef.current.focus()
    inputRef.current.selectionStart = inputRef.current.value.length;
  })

  return ( 
    <input 
      onKeyDown={onEnterClick}
      className={
        isValid
          ? classes.Input
          : `${classes.Input} ${classes.invalid}`
        } 
      type='text' 
      value={inputValue} 
      onChange={onInputChange}
      placeholder='0'
      ref={inputRef}
      />
  );
}

function mapStateToProps (state) {
  return {
    inputValue: state.calc.value,
    isValid: state.calc.isValid,
    onFocus: state.calc.onFocus,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onInputChange: evt => dispatch(changeInput(evt.target.value)),
    onEnterClick: evt => dispatch(onKeyHandler(evt)),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( Input);
