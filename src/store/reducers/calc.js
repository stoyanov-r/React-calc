import { CHANGE_INPUT, RESET, VALIDATE, GET_BUTTON_VALUE, EQUAL } from "../actions/actionTypes";

const initialState = {
  value: '',
  history: [],
  isValid: true,
  onFocus: true,
};

export function calc (state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state, value: action.value, isValid: true, onFocus: true
      };

    case RESET:
      return {
        ...state, value: ''
      }

    case VALIDATE: 
      return {
        ...state, isValid: false
      }

    case GET_BUTTON_VALUE:

      return {
        ...state, value: state.value + action.button
      }

    case EQUAL: 
    const result = eval(state.value).toFixed(2)
      return {
        ...state, value: state.value && result
      }

    default: return state;
  };
};