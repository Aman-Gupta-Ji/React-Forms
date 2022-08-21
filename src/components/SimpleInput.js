import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSumbitHandler = (event) => {
    event.preventDefault();
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

  const nameIputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control is-invalid";

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
        />
        {!enteredNameIsValid && (
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
