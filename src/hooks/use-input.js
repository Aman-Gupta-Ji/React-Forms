import { useReducer } from "react";

const initialState = {
  value: "",
  isValid: false,
  hasError: false,
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
        hasError: !action.isValid && state.isTouched,
      };
    case "RESET":
      return initialState;
    case "BLUR":
      return {
        ...state,
        isTouched: true,
        hasError: !state.isValid,
      };
    default:
      return state;
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  const onChangeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      isValid: validateValue(event.target.value),
    });
  };

  const onBlurHandler = () => {
    dispatch({
      type: "BLUR",
    });
  };

  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };

  return {
    value: inputState.value,
    isValid: inputState.isValid,
    hasError: inputState.hasError,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
