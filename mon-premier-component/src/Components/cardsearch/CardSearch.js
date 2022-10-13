import "./CardSearch.css";
import useInput from "./hook/useInputString";
import CardSearched from "./CardSearched";
import { useState } from "react";

function CardSearch() {

  const {
    cardType: enteredCardType,
    isValid: enteredCardTypeIsValid,
    hasError: enteredCardTypeIsInvalid,
    cardTypeChangeHandler,
    cardTypeBlurHandler,
    reset: resetCardType,
  } = useInput((value) => value.trim() !== "");

  const [buttonClicked, setButtonCLick] = useState(false);

  const buttonClickHandler = (event) => {
    setButtonCLick(true)
  }

  let formIsValid = false;

  if (enteredCardTypeIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredCardTypeIsValid) {
      return;
    }
    resetCardType();
  };
  const cardTypeInputClasses = enteredCardTypeIsInvalid
  ? "form-control invalid"
  : "form-control";
  console.log(enteredCardTypeIsInvalid)
  return (
    <div className="App">
      <form onSubmit={formSubmissionHandler}>
        <div className={cardTypeInputClasses}>
          <label htmlFor="cardType">Type de carte recherché</label>
          <input
            type="text"
            id="cardType"
            placeholder="Vampire/Human/Beast/Dragon"
            onChange={cardTypeChangeHandler}
            onBlur={cardTypeBlurHandler}
            value={enteredCardType}
          />
          {enteredCardTypeIsInvalid && (
            <p className="error-text">Le type de carte est incorrect.</p>
          )}
        </div>
        <div className="form-actions">
          <button onClick={buttonClickHandler} disabled={!formIsValid}>Chercher</button>
        </div>
      </form>
      {buttonClicked && (
            <CardSearched enteredCardType={enteredCardType} isClicked={buttonClicked} />
          )}
    </div>
  );
}

export default CardSearch;
