import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredCardType, setEnteredCardType] = useState("");
  const [CardTypeTouched, setCardTypeTouched] = useState(false);
  const creatureType = ["vampire", "human", "beast", "dragon"];
  const cardTypeIsValid =
    validateValue(enteredCardType) &&
    creatureType.indexOf(enteredCardType) > -1;
  const hasError = !cardTypeIsValid && CardTypeTouched;
  const creatureTypeHasError = !cardTypeIsValid;

  const cardTypeChangeHandler = (event) => {
    setEnteredCardType(event.target.value.toLowerCase());
  };

  const cardTypeBlurHandler = (event) => {
    setCardTypeTouched(true);
  };

  const reset = () => {
    setEnteredCardType("");
    cardTypeBlurHandler(false);
  };

  return {
    cardType: enteredCardType,
    isValid: cardTypeIsValid,
    hasError,
    creatureTypeHasError,
    cardTypeChangeHandler,
    cardTypeBlurHandler,
    reset,
  };
};

export default useInput;
