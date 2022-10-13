import useInput from "./hook/useInputString";
import { useNavigate } from "react-router-dom";
import './Login.css';

const SimpleInput = (props) => {
  const navigate = useNavigate();
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    password: enteredPassword,
    enteredPasswordIsValid,
    hasError: nameInputHasError,
    passwordHasError: enteredPasswordIsInvalid,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    passwordInputChangeHandler,
    passwordInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredNameIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid || !enteredPasswordIsValid) {
      return;
    }
    console.log(enteredName);
    localStorage.setItem('user', enteredName)
    resetNameInput();
    navigate("/dashboard")
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const passwordInputClasses = enteredPasswordIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <div className="Login">
      <h1>Se connecter</h1>
      <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="name">Nom d'utilisateur</label>
          <input
            type="text"
            id="name"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="error-text">Le nom d'utilisateur ne peut pas être vide.</p>
          )}
        </div>
        <div className={passwordInputClasses}>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            onChange={passwordInputChangeHandler}
            onBlur={passwordInputBlurHandler}
            value={enteredPassword}
          />
          {enteredPasswordIsInvalid && (
            <p className="error-text">Le mot de passe doit faire plus de 8 caractères</p>
          )}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Connexion</button>
        </div>
      </form>
    </div>
  );
};

export default SimpleInput;
