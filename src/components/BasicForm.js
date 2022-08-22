import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredfName,
    hasError: fNameInputhasError,
    isValid: fNameInputisValid,
    onChangeHandler: fNameInputChangeHandler,
    onBlurHandler: fNameInputBlurHandler,
    reset: fNameInputReset,
  } = useInput((enteredfName) => enteredfName.trim().length > 0);

  const {
    value: enteredlName,
    hasError: lNameInputhasError,
    isValid: lNameInputisValid,
    onChangeHandler: lNameInputChangeHandler,
    onBlurHandler: lNameInputBlurHandler,
    reset: lNameInputReset,
  } = useInput((enteredlName) => enteredlName.trim().length > 0);

  const {
    value: enteredEmail,
    hasError: emailInputhasError,
    isValid: emailInputisValid,
    onChangeHandler: emailInputChangeHandler,
    onBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput((enteredEmail) => enteredEmail.includes("@"));

  const formIsValid =
    fNameInputisValid && lNameInputisValid && emailInputisValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    fNameInputBlurHandler();
    lNameInputBlurHandler();
    emailInputBlurHandler();

    if (!formIsValid) return;

    props.onSubmit(enteredfName, enteredlName, enteredEmail);

    fNameInputReset();
    lNameInputReset();
    emailInputReset();
  };

  const fNameInputClasses = fNameInputhasError
    ? "form-control invalid"
    : "form-control";
  const lNameInputClasses = lNameInputhasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputhasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={fNameInputClasses}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            onChange={fNameInputChangeHandler}
            onBlur={fNameInputBlurHandler}
            value={enteredfName}
          />
          {fNameInputhasError && (
            <p className="error-text">Fist Name must not be empty</p>
          )}
        </div>
        <div className={lNameInputClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            onChange={lNameInputChangeHandler}
            onBlur={lNameInputBlurHandler}
            value={enteredlName}
          />
          {lNameInputhasError && (
            <p className="error-text">Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputhasError && (
          <p className="error-text">E-Mail Address must contain @</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
