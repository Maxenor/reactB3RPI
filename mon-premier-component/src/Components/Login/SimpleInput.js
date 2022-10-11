import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [nameState, setNameState] = useState("");
  const [password, setPasswordState] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);

  useEffect(() => {
    if (nameIsValid) console.log("name is Valid");
  }, [nameIsValid]);

  const nameChangeHandler = (e) => {
    setNameState(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPasswordState(e.target.value)
  }

  const nameBlurHandler = (e) => {
    setNameIsTouched(true);

    if (nameState.trim() === "") {
      setNameIsValid(false);
      return;
    }
  };
  const passwordBlurHandler = (e) => {
    setPasswordIsTouched(true);

    if (password.length() < 8) {
      setPasswordIsValid(false);
      return;
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setNameIsTouched(true);
    setPasswordIsTouched(true);

    if (nameState.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
    if (password.length < 8) {
      set
    }
    setNameState("");
    setPasswordState('');
  };

  const nameInputIsinvalid = !nameIsValid && nameIsTouched;
  const nameInputClasses = nameInputIsinvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={nameState}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          type="text"
          id="name"
          placeholder="Nom d'utilisateur"
        />

        {nameInputIsinvalid && (
          <p className="error-text">Le nom ne peut pas être vide</p>
        )}
        <label htmlFor="name">Mot de passe</label>
        <input
          value={nameState}
          onChange={passwordChangeHandler}
          onBlur={nameBlurHandler}
          type="password"
          id="password"
          placeholder="Mot de passe"
        />
      </div>
      <div className="form-actions">
        <button>Connexion</button>
      </div>

      {nameState}
    </form>
  );
};

export default SimpleInput;
