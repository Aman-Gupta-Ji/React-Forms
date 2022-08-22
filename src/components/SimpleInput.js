import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputhasError,
    isValid: nameInputisValid,
    onChangeHandler: nameInputChangeHandler,
    onBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
  } = useInput((enteredName) => enteredName.trim().length > 0);

  const {
    value: enteredEmail,
    hasError: emailInputhasError,
    isValid: emailInputisValid,
    onChangeHandler: emailInputChangeHandler,
    onBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput((enteredEmail) => enteredEmail.includes("@"));

  const formIsValid = nameInputisValid && emailInputisValid;

  const formSumbitHandler = (event) => {
    event.preventDefault();

    nameInputBlurHandler();
    emailInputBlurHandler();

    if (!formIsValid) return;

    props.onSubmit(enteredName, enteredEmail);

    nameInputReset();
    emailInputReset();
  };

  const nameIputClasses = nameInputhasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputhasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSumbitHandler}>
      <div className={nameIputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputhasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputhasError && (
          <p className="error-text">Email must contain @</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
