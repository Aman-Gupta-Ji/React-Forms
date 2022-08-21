import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("Name is valid");
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
      return;
    }
  };

  const nameINputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
  };

  const formSumbitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    props.onSubmit(enteredName);
    // nameInputRef.current.value = ""; => Not ideal because we are using useRef() which manipulates the DOM directly.
    setEnteredName("");
  };

  const nameIputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSumbitHandler}>
      <div className={nameIputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameINputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
