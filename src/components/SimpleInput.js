import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSumbitHandler = (event) => {
    event.preventDefault();
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    props.onSubmit(enteredName);
    // nameInputRef.current.value = ""; => Not ideal because we are using useRef() which manipulates the DOM directly.
    setEnteredName("");
  };

  return (
    <form onSubmit={formSumbitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
