import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    console.log(nameIsValid)
    if (nameState.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true)
  };
  const passwordBlurHandler = (e) => {
    setPasswordIsTouched(true);
    if (password.length < 8) {
      setPasswordIsValid(false);
      return;
    }
    setPasswordIsValid(true)
  };

  const navigate = useNavigate();

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
      setPasswordIsValid(false);
    }
    setPasswordIsValid(true);
    setNameState("");
    setPasswordState('');
    navigate("/dashboard")
    //https://reactrouter.com/en/main/fetch/redirect ne marche pas
  };

  const nameInputIsinvalid = !nameIsValid && nameIsTouched;
  const passwordInputIsInvalid = !passwordIsValid && passwordIsTouched;
  const nameInputClasses = nameInputIsinvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Nom d'utilisateur</label>
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
        <label htmlFor="password">Mot de passe</label>
        <input
          value={password}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          type="password"
          id="password"
          placeholder="Mot de passe"
        />
        {passwordInputIsInvalid && (
          <p className="error-text">Le not de passe doit faire plus de 8 caractères</p>
        )}
      </div>
      <div className="form-actions">
        <button>Connexion</button>
      </div>

      {nameState}
    </form>
  );
};

export default SimpleInput;
