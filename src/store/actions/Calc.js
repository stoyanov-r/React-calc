import { CHANGE_INPUT, RESET, VALIDATE, GET_BUTTON_VALUE, EQUAL } from "./actionTypes";

export function changeInput (value) { 

  const goodRe = /[0-9]+[-* +/0-9]|[0-9]/;
  const bedRe = /^[-*+/]|[-*+/]+[-*+/]/;

  if (bedRe.test(value)) {
    return {
      type: VALIDATE
    }
  }

  if (goodRe.test(+value) || goodRe.test(value)) {
      return {
        type: CHANGE_INPUT,
        value
      }
  }

  return {
    type: VALIDATE
  }
}

export function onKeyHandler (evt) {
  const {keyCode} = evt
  return dispatch => {
    switch (keyCode) {
      case 27: 
        dispatch(reset());
        break;
      case 13: 
        dispatch(equal());
        break;
      default: break
    }
  }
}

export function onButtonClick (button) {

  return {
    type: GET_BUTTON_VALUE,
    button
  }
}

export function reset () {
  return {
    type: RESET
  }
}

export function equal () {
  return {
    type: EQUAL
  }
}
