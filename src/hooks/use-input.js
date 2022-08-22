import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredvalue, setenteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredvalue);
  const hasError = !valueIsValid && isTouched;

  const onChangeHandler = (event) => {
    setenteredValue(event.target.value);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setenteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredvalue,
    isValid: valueIsValid,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
